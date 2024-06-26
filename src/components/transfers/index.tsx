import { memo, useState, useEffect, useMemo, useRef, useCallback } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useTranslation } from "react-i18next"
import useWindowSize from "@/hooks/useWindowSize"
import eventEmitter from "@/lib/eventEmitter"
import { type WorkerToMainMessage } from "@/lib/worker/types"
import { useTransfersStore, type TransferState, type Transfer as TransferType } from "@/stores/transfers.store"
import { Virtuoso } from "react-virtuoso"
import { calcSpeed, calcTimeLeft, getTimeRemaining, bpsToReadable } from "./utils"
import throttle from "lodash/throttle"
import { ArrowDownUp } from "lucide-react"
import { IS_DESKTOP } from "@/constants"
import Transfer from "./transfer"

export const transferStateSortingPriority: Record<TransferState, number> = {
	started: 1,
	paused: 2,
	error: 3,
	queued: 4,
	stopped: 5,
	finished: 6
}

export const Transfers = memo(() => {
	const { t } = useTranslation()
	const windowSize = useWindowSize()
	const [open, setOpen] = useState<boolean>(false)
	const { transfers, setTransfers, speed, setProgress, setRemaining, setSpeed, remaining, setFinishedTransfers } = useTransfersStore()
	const bytesSent = useRef<number>(0)
	const allBytes = useRef<number>(0)
	const progressStarted = useRef<number>(-1)
	const [remainingReadable, setRemainingReadable] = useState<string>("")

	const onDragOver = useCallback(
		(e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault()

			let hasFile = false

			if (e && e.dataTransfer && e.dataTransfer.items && e.dataTransfer.items.length > 0) {
				for (const item of e.dataTransfer.items) {
					if (item.kind === "file") {
						hasFile = true

						break
					}
				}
			}

			if (hasFile && open) {
				setOpen(false)
			}
		},
		[open]
	)

	const transfersSorted = useMemo(() => {
		return transfers.sort((a, b) => transferStateSortingPriority[a.state] - transferStateSortingPriority[b.state])
	}, [transfers])

	const ongoingTransfers = useMemo(() => {
		return transfersSorted.filter(
			transfer => transfer.state === "queued" || transfer.state === "started" || transfer.state === "paused"
		)
	}, [transfersSorted])

	const virtuosoHeight = useMemo(() => {
		return windowSize.height - 130
	}, [windowSize.height])

	const getItemKey = useCallback((_: number, transfer: TransferType) => transfer.uuid, [])

	const itemContent = useCallback(
		(_: number, transfer: TransferType) => {
			return (
				<Transfer
					transfer={transfer}
					setTransfers={setTransfers}
					t={t}
				/>
			)
		},
		[t, setTransfers]
	)

	const updateInfo = useRef(
		throttle(() => {
			const now = Date.now()
			const transferRemaining = calcTimeLeft(bytesSent.current, allBytes.current, progressStarted.current)
			const transferPercent = (bytesSent.current / allBytes.current) * 100
			const transferSpeed = calcSpeed(now, progressStarted.current, bytesSent.current)

			setRemaining(transferRemaining)
			setSpeed(transferSpeed)
			setProgress(isNaN(transferPercent) ? 0 : transferPercent >= 100 ? 100 : transferPercent)

			const remainingReadable = getTimeRemaining(now + transferRemaining * 1000)

			if (remainingReadable.total <= 1 || remainingReadable.seconds <= 1) {
				remainingReadable.total = 1
				remainingReadable.days = 0
				remainingReadable.hours = 0
				remainingReadable.minutes = 0
				remainingReadable.seconds = 1
			}

			setRemainingReadable(
				t("transfers.remaining", {
					time:
						(remainingReadable.days > 0 ? remainingReadable.days + "d " : "") +
						(remainingReadable.hours > 0 ? remainingReadable.hours + "h " : "") +
						(remainingReadable.minutes > 0 ? remainingReadable.minutes + "m " : "") +
						(remainingReadable.seconds > 0 ? remainingReadable.seconds + "s " : "")
				})
			)
		}, 100)
	).current

	const handleTransferUpdates = useCallback(
		(message: WorkerToMainMessage) => {
			if (message.type === "download" || message.type === "upload") {
				const now = Date.now()

				if (message.data.type === "queued") {
					setTransfers(prev => [
						...prev,
						{
							type: message.type,
							uuid: message.data.uuid,
							state: "queued",
							bytes: 0,
							name: message.data.name,
							size: 0,
							startedTimestamp: 0,
							queuedTimestamp: now,
							errorTimestamp: 0,
							finishedTimestamp: 0,
							progressTimestamp: 0
						}
					])

					if (progressStarted.current === -1) {
						progressStarted.current = now

						setOpen(true)
					} else {
						if (now < progressStarted.current) {
							progressStarted.current = now

							setOpen(true)
						}
					}
				} else if (message.data.type === "started") {
					setTransfers(prev =>
						prev.map(transfer =>
							transfer.uuid === message.data.uuid
								? {
										...transfer,
										state: "started",
										startedTimestamp: Date.now(),
										size: message.data.type === "started" ? message.data.size : 0
									}
								: transfer
						)
					)

					allBytes.current += message.data.size
				} else if (message.data.type === "progress") {
					const bytes = message.data.bytes

					bytesSent.current += bytes

					setTransfers(prev =>
						prev.map(transfer =>
							transfer.uuid === message.data.uuid
								? {
										...transfer,
										bytes: transfer.bytes + bytes,
										progressTimestamp: Date.now()
									}
								: transfer
						)
					)
				} else if (message.data.type === "finished") {
					setFinishedTransfers(prev => [
						...prev,
						{
							type: message.type,
							uuid: message.data.uuid,
							state: "finished",
							bytes: message.data.type === "finished" ? message.data.size : 0,
							name: message.data.name,
							size: message.data.type === "finished" ? message.data.size : 0,
							startedTimestamp: 0,
							queuedTimestamp: now,
							errorTimestamp: 0,
							finishedTimestamp: Date.now(),
							progressTimestamp: 0
						}
					])
					setTransfers(prev => prev.filter(transfer => transfer.uuid !== message.data.uuid))
				} else if (message.data.type === "error") {
					if (allBytes.current >= message.data.size) {
						allBytes.current -= message.data.size
					}

					setTransfers(prev =>
						prev.map(transfer =>
							transfer.uuid === message.data.uuid ? { ...transfer, state: "error", errorTimestamp: Date.now() } : transfer
						)
					)
				} else if (message.data.type === "stopped") {
					if (allBytes.current >= message.data.size) {
						allBytes.current -= message.data.size
					}

					setTransfers(prev => prev.filter(transfer => transfer.uuid !== message.data.uuid))
				}

				updateInfo()
			}
		},
		[setFinishedTransfers, setTransfers, updateInfo]
	)

	useEffect(() => {
		if (ongoingTransfers.length === 0) {
			bytesSent.current = 0
			progressStarted.current = -1
			allBytes.current = 0

			setRemaining(0)
			setSpeed(0)
			setProgress(0)
		}
	}, [ongoingTransfers, setRemaining, setSpeed, setProgress])

	useEffect(() => {
		const listener = eventEmitter.on("openTransfers", () => {
			setOpen(true)
		})

		const workerMessageListener = eventEmitter.on("workerMessage", (message: WorkerToMainMessage) => {
			handleTransferUpdates(message)
		})

		let desktopMessageListener: { remove: () => void } | null = null

		if (IS_DESKTOP) {
			desktopMessageListener = window.desktopAPI.onMainToWindowMessage(handleTransferUpdates)
		}

		return () => {
			listener.remove()
			workerMessageListener.remove()

			if (desktopMessageListener) {
				desktopMessageListener.remove()
			}
		}
	}, [handleTransferUpdates])

	return (
		<Sheet
			open={open}
			onOpenChange={setOpen}
		>
			<SheetContent
				forceMount={true}
				className="outline-none focus:outline-none active:outline-none hover:outline-none no-outline select-none"
				onDragOver={onDragOver}
			>
				<SheetHeader className="mb-4">
					<SheetTitle>{transfersSorted.length > 0 && t("transfers.title")}</SheetTitle>
				</SheetHeader>
				<Virtuoso
					data={transfersSorted}
					totalCount={transfersSorted.length}
					height={virtuosoHeight}
					width="100%"
					computeItemKey={getItemKey}
					itemContent={itemContent}
					onDragOver={onDragOver}
					components={{
						EmptyPlaceholder: () => {
							return (
								<div
									className="w-full flex flex-col items-center justify-center text-muted-foreground gap-2"
									style={{
										height: virtuosoHeight
									}}
								>
									<ArrowDownUp size={60} />
									<p>{t("transfers.noActiveTransfers")}</p>
								</div>
							)
						}
					}}
					style={{
						overflowX: "hidden",
						overflowY: "auto",
						height: virtuosoHeight + "px",
						width: "100%"
					}}
				/>
				<div className="flex flex-row justify-between items-center gap-4 h-12 text-muted-foreground">
					{remaining > 0 && speed > 0 && (
						<>
							<p>{remainingReadable}</p>
							<p>{bpsToReadable(speed)}</p>
						</>
					)}
				</div>
			</SheetContent>
		</Sheet>
	)
})

export default Transfers
