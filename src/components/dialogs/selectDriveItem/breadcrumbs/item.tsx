import { memo, useCallback, useState, useMemo } from "react"
import { ChevronRight } from "lucide-react"
import { directoryUUIDToNameCache } from "@/cache"
import { getItem } from "@/lib/localForage"
import { useTranslation } from "react-i18next"
import useSDKConfig from "@/hooks/useSDKConfig"
import { cn } from "@/lib/utils"
import useMountedEffect from "@/hooks/useMountedEffect"

export const Item = memo(
	({
		uuid,
		setPathname,
		components,
		index,
		pathname
	}: {
		uuid: string
		setPathname: React.Dispatch<React.SetStateAction<string>>
		components: string[]
		index: number
		pathname: string
	}) => {
		const { baseFolderUUID } = useSDKConfig()
		const { t } = useTranslation()
		const [name, setName] = useState<string>(directoryUUIDToNameCache.has(uuid) ? (directoryUUIDToNameCache.get(uuid) as string) : "")

		const parent = useMemo(() => {
			const ex = pathname.split("/")

			return ex[ex.length - 1]
		}, [pathname])

		const navigateToPath = useCallback(() => {
			let builtPathname = ""
			const ex = pathname.split("/")

			for (const exItem of ex) {
				builtPathname += builtPathname.length === 0 ? exItem : `/${exItem}`

				if (builtPathname.endsWith(uuid)) {
					setPathname(builtPathname)

					return
				}
			}
		}, [uuid, pathname, setPathname])

		const fetchDirectoryName = useCallback(async () => {
			if (uuid === baseFolderUUID) {
				setName(t("cloudDrive"))

				return
			}

			try {
				const pathName = await getItem<string | undefined | null>(`directoryUUIDToName:${uuid}`)

				if (!pathName) {
					setName(t("topBar.breadcrumbs.directory"))

					return
				}

				directoryUUIDToNameCache.set(uuid, pathName)

				setName(pathName)
			} catch (e) {
				console.error(e)
			}
		}, [uuid, t, baseFolderUUID])

		useMountedEffect(() => {
			fetchDirectoryName()
		})

		if (name.length === 0) {
			return null
		}

		return (
			<div className="flex flex-row items-center select-none">
				<p
					className={cn(
						"hover:text-primary cursor-pointer select-none line-clamp-1 shrink-0",
						parent === uuid ? "text-primary" : "text-muted-foreground"
					)}
					onClick={navigateToPath}
					onDoubleClick={navigateToPath}
				>
					{name}
				</p>
				{index < components.length - 1 && (
					<ChevronRight
						size={16}
						className="select-none mx-[1px]"
					/>
				)}
			</div>
		)
	}
)

export default Item
