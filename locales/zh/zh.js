{
	"cloudDrive": "云盘",
	"new": "新建",
	"image": "图像",
	"empty": "清空",
	"copiedToClipboard": "已复制到剪贴板",
	"everyone": "所有人",
	"unknownUser": "未知用户",
	"login": {
		"header": "登录",
		"description": "在下面输入您的邮件和密码来登录您的账户",
		"useTwoFactorRecoveryKey": "改用恢复密钥",
		"buttons": {
			"login": "登录",
			"createAccount": "创建账户",
			"forgotPassword": "忘记密码？"
		},
		"placeholders": {
			"normal": {
				"email": "邮件地址",
				"password": "密码",
				"2faCode": "双重认证代码",
				"2faRecoveryKey": "恢复密钥"
			},
			"example": {
				"email": "shili@hanhuazu.com",
				"password": "****************",
				"2faCode": "381740",
				"2faRecoveryKey": "恢复密钥"
			}
		},		
		"dialogs": {
			"forgotPassword": {
				"title": "忘记密码",
				"continue": "发送说明",
				"placeholder": "邮件地址"
							}
		},
		"alerts": {
			"emailOrPasswordWrong": "邮件地址或密码错误",
			"enter2FA": "请输入您的双重认证代码",
			"enter2FARecoveryKey": "请输入您的双重认证恢复密钥",
		    "forgotPasswordSent": "密码重置说明已发送至 {{email}}"
		    	}
	},
	"register": {
		"header": "创建账户",
		"description": "在下面输入您的邮件地址和密码以创建账户",
		"buttons": {
			"register": "创建账户",
			"resendConfirmation": "重新发送验证邮件",
			"login": "登录"
		},
		"passwordStrength": {
			"length": "长度",
			"uppercase": "大写字符",
			"lowercase": "小写字符",
			"specialChars": "特殊字符"
		},
		"placeholders": {
			"normal": {
				"email": "邮件地址",
				"password": "密码",
				"confirmPassword": "确认密码"
			},
			"example": {
				"email": "shili@hanhuazu.com",
				"password": "****************",
				"confirmPassword": "****************"
			}
		},
		"dialogs": {
			"confirmationSend": {
				"title": "重新发送验证邮件",
				"continue": "发送",
				"placeholder": "邮件地址"
			}
		},
		"alerts": {
			"passwordWeak": "您选择的密码太弱",
			"confirmationSent": "验证邮件已发送至 {{email}}",
			"passwordsNotMatching": "密码不一致",
			"success": {
				"title": "已创建账户",
				"continue": "继续",
				"description": "我们已向 {{email}} 发送了一封验证电子邮件。请您点击邮件中的链接以确认注册。请务必检查您的垃圾邮件文件夹。"
			}
		}
	},
	"reset": {
		"header": "重置密码",
		"description": "输入您的邮件地址和新密码并导入主密钥来重置密码",
		"importMasterKeys": "导入主密钥",
		"masterKeysImported": "已导入主密钥",
		"masterKeysNotImported": "未导入任何主密钥",
		"placeholders": {
			"normal": {
				"email": "邮件地址",
				"password": "密码",
				"confirmPassword": "确认密码"
			},
			"example": {
				"email": "shili@hanhuazu.com",
				"password": "****************",
				"confirmPassword": "****************"
			}
		},
		"buttons": {
			"reset": "重置",
			"back": "返回"
		},
		"dialogs": {
			"noMasterKeysImported": {
				"title": "重置密码",
				"continue": "我了解",
				"description": "我了解，由于零知识端到端加密的原理，如果不使用导出的主密钥重置密码，我将无法访问存储在我账户中的所有数据。"
			},
			"noMasterKeysImported2": {
				"title": "重置密码",
				"continue": "我确定",
				"description": "您确定吗？如果不导入主密钥，您将删除账户中存储的所有数据。如果您没有主密钥文件并且想要重置账户，您可以忽略此警告。"
			},
			"noMasterKeysImported3": {
				"title": "重置密码",
				"continue": "是的",
				"description": "您真的确定吗？"
			}
		},
		"alerts": {
			"invalidMasterKeysFile": "主密钥文件无效",
			"invalidMasterKeysFileWrongUserId": "这些密钥属于不同的账户",
			"masterKeysImported": "已导入主密钥",
			"passwordWeak": "您选择的密码太弱",
			"passwordsNotMatching": "密码不一致",
			"invalidMasterKeys": "主密钥无效",
			"passwordChanged": "密码更改成功"
		}
	},
	"auth": {
		"footer": {
			"tos": "服务条款",
			"privacy": "隐私"
		}
	},
	"api": {
		"errors": {
			"invalid_params": "无效参数",
			"internal_error": "内部错误",
			"rate_limited": "速率已被限制"
		}
	},
	"topbar": {
		"placeholders": {
			"normal": {
				"search": "在此目录中搜索..."
			},
			"example": {
				"search": "在此目录中搜索..."
			}
		}
	},
	"dropZone": {
		"cta": "在此处上传",
		"chatsCta": "附加到聊天"
	},
	"topBar": {
		"breadcrumb": {
			"cloudDrive": "云盘"
		},
		"searchInThisFolder": "在此目录中搜索...",
		"breadcrumbs": {
			"recents": "最近",
			"cloudDrive": "云盘",
			"links": "链接",
			"sharedWithMe": "与我共享",
			"sharedWithOthers": "与他人共享",
			"favorites": "收藏",
			"trash": "回收站",
			"directory": "目录"
	    },
		"listView": "列表视图",
		"gridView": "网格视图"
	},
	"innerSideBar": {
		"top": {
			"settings": "设置",
			"notes": "笔记",
			"chats": "聊天",
			"contacts": "联系人",
			"syncs": "同步"
		},
		"bottom": {
			"settings": "设置"
		},
		"notes": {
			"search": "搜索...",
			"tags": {
				"all": "所有",
				"favorites": "收藏",
				"pinned": "已置顶"
			},
			"createNote": "创建笔记",
			"createTag": "创建标签",
			"empty": "暂无笔记",
			"emptyCreate": "创建一个"
		},
		"chats": {
			"empty": "暂无聊天",
			"emptyCreate": "创建一个",
			"search": "搜索...",
			"createChat": "创建聊天"
		},
		"recents": "最近",
		"cloudDrive": "云盘",
		"links": "链接",
		"sharedWithMe": "与我共享",
		"sharedWithOthers": "与他人共享",
		"favorites": "收藏",
		"trash": "回收站",
		"settings": {
			"general": "通用",
			"invoices": "发票",
			"subscriptions": "订阅",
			"account": "账户",
			"events": "事件",
			"security": "安全",
			"invite": "邀请",
			"plans": "计划"
		},
		"contacts": {
			"online": "在线",
			"offline": "离线",
			"all": "所有",
			"blocked": "已拉黑",
			"in": "请求",
			"out": "待处理"
		}
	},
	"sideBar": {
		"cloudDrive": "云盘",
		"transfers": "传输",
		"notes": "笔记",
		"chats": "聊天",
		"contacts": "联系人",
		"settings": "设置",
		"syncs": "同步",
		"mounts": "挂载",
		"terminal": "终端"
	},
	"dialogs": {
		"cancel": "取消",
		"selectDriveItem": {
			"title": "选择",
			"submit": "选择",
			"newFolder": "新建目录",
			"empty": "尚未上传任何文件或目录",
			"selectRoot": "从云端选择"
		},
		"selectContacts": {
			"title": "选择联系人",
			"submit": "选择",
			"empty": "未选择任何联系人"
		},
		"publicLink": {
			"title": "公开链接",
			"description": "创建公开链接",
			"close": "关闭",
			"save": "保存",
			"enabled": "已启用",
			"downloadButton": "下载按钮",
			"link": "链接",
			"copyLink": "复制",
			"expiresAfter": "过期于",
			"password": "密码（留空表示禁用）",
			"passwordPlaceholder": "密码"
		},
		"sharedWith": {
			"title": "共享给",
			"add": "添加",
			"close": "关闭",
			"remove": "移除",
			"stopSharing": {
				"title": "停止共享",
				"description": "您确定要停止与 {{name}} 共享 {{item}} 吗？",
				"continue": "停止共享"
			}
		},
		"changeEmail": {
			"title": "更改您的邮件地址",
			"newEmail": "新邮件地址",
			"newEmailPlaceholder": "新邮件地址",
			"confirmNewEmail": "确认新邮件地址",
			"confirmNewEmailPlaceholder": "确认新邮件地址",
			"password": "您的密码",
			"passwordPlaceholder": "密码",
			"close": "关闭",
			"save": "保存",
			"successToast": "成功更改您的电子邮件地址"
		},
		"changePassword": {
			"title": "更改您的密码",
			"newPassword": "新密码",
			"newPasswordPlaceholder": "新密码",
			"confirmNewPassword": "确认新密码",
			"confirmNewPasswordPlaceholder": "确认新密码",
			"currentPassword": "您当前的密码",
			"currentPasswordPlaceholder": "当前的密码",
			"close": "关闭",
			"save": "保存",
			"successToast": "已成功更改密码"
		},
		"personalInformation": {
			"title": "修改个人信息",
			"firstName": "名",
			"lastName": "姓",
			"close": "关闭",
			"save": "保存",
			"companyName": "公司名称",
			"vatId": "增值税号",
			"street": "街道",
			"streetNumber": "街道编号",
			"city": "城市",
			"postalCode": "邮政编码",
			"country": "国家"
		},
		"twoFactorCode": {
			"useRecoveryKey": "改用恢复密钥",
			"recoveryKeyPlaceholder": "恢复密钥",
			"title": "双重认证",
			"continue": "继续",
			"info": "请输入您的双重认证代码"
		},
		"noteParticipants": {
			"remove": "移除",
			"toggleReadPermissions": "更改权限为仅可读取",
			"toggleWritePermissions": "更改权限为仅可写入",
			"title": "参与者",
			"close": "关闭"
		},
		"fileVersions": {
			"title": "文件版本",
			"delete": {
				"title": "删除文件版本",
				"description": "您确定要永久删除 {{name}} 吗？此操作无法撤消！",
				"continue": "删除"
			}
		},
		"noteHistory": {
			"empty": "尚无先前的笔记版本"
		},
		"previewDialog": {
			"save": "保存",
			"readOnly": "只读"
		},
		"transparentFullScreenImage": {
			"openOriginal": "打开原图"
		},
		"report": {
			"title": "报告滥用",
			"email": "邮件地址",
			"emailPlaceholder": "邮件地址",
			"comment": "评论",
			"commentPlaceholder": "请向我们提供所有必要的详细信息，以便我们尽快采取适当措施（可选）",
			"reason": "原因",
			"close": "关闭",
			"send": "发送",
			"successToast": "已发送滥用报告",
			"reasons": {
				"cp": "幼儿色情",
				"dmca": "侵权",
				"stolen": "窃取数据",
				"other": "其他",
				"spam": "垃圾邮件",
				"malware": "恶意软件"
			}
		},
		"profile": {
			"memberSince": "自 {{since}} 以来的成员",
			"add": "发送联系人请求",
			"block": "拉黑",
			"remove": "从联系人中删除",
			"unblock": "取消拉黑"
		}
	},
	"contextMenus": {
		"item": {
			"download": "下载",
			"publicLink": "公开链接",
			"share": "共享",
			"versions": "版本",
			"favorite": "收藏",
			"unfavorite": "取消收藏",
			"rename": "重命名",
			"move": "移动",
			"trash": "回收站",
			"restore": "恢复",
			"preview": "预览",
			"edit": "编辑",
			"remove": "移除",
			"stopSharing": "停止共享",
			"selectDestination": "选择目标位置",
			"cloudDrive": "云盘",
			"open": "打开",
			"color": "颜色",
	        "deletePermanently": "永久删除",
			"copyId": "复制 ID",
			"dialogs": {
				"trash": {
					"title": "回收",
					"description": "您确定要将 {{name}} 移到回收站吗？之后您可以随时恢复它。",
					"continue": "回收"
				},
				"trashMultiple": {
					"title": "回收",
					"description": "您确定要将 {{count}} 个项目移到回收站吗？之后您可以随时恢复。",
					"continue": "回收"
				},
				"deletePermanently": {
					"title": "永久删除",
					"description": "您确定要永久删除 {{name}} 吗？此操作无法撤消！",
					"continue": "删除"
				},
				"deletePermanentlyMultiple": {
					"title": "永久删除",
					"description": "您确定要永久删除 {{count}} 个项目吗？此操作无法撤消！",
					"continue": "删除"
				}
			}
		},
		"drive": {
			"uploadFiles": "上传文件",
			"uploadFolders": "上传目录",
			"newTextFile": "新建文本文件",
			"newFolder": "新建目录",
			},
		"notes": {
			"history": "历史",
			"participants": "参与者",
			"type": "类型",
			"pin": "置顶",
			"unpin": "取消置顶",
			"favorite": "收藏",
			"unfavorite": "取消收藏",
			"duplicate": "复制",
			"export": "导出",
			"exportAll": "导出所有",
			"archive": "归档",
			"restore": "恢复",
			"trash": "回收站",
			"delete": "删除",
			"rename": "重命名",
			"tags": "标签",
			"leave": "离开",
			"copyId": "复制 ID",
			"createTag": "创建标签",
			"types": {
				"md": "Markdown",
				"rich": "富文本",
				"text": "文本",
				"checklist": "清单",
				"code": "代码"
			}
		},
		"contacts": {
			"profile": "资料",
			"remove": "移除",
			"block": "拉黑"
		},
		"chat": {
			"input": {
				"selectFromDrive": "从云端中选择",
				"attachFiles": "附加文件"
			}
		},
		"chats": {
			"editName": "编辑名称",
			"leave": "离开",
			"delete": "删除",
			"copyId": "复制 ID"
		}
	},
	"transfers": {
		"title": "传输",
		"remaining": "大约剩余 {{time}}",
		"noActiveTransfers": "没有进行中的传输",
		"state": {
			"finished": "已完成",
			"queued": "已入列",
			"started": "已开始",
			"error": "出错啦",
			"stopped": "已停止",
			"paused": "已暂停"
		},
		"pause": "暂停",
		"resume": "开始",
		"stop": "停止"
	},
	"chats": {
		"newMessagesSince": "自 {{since}} 以来有 {{count}} 条新消息",
		"markAsRead": "标为已读",
		"maxSizeReached": "最大消息大小限制为 {{chars}} 个字符",
		"newMessageSince": "自 {{since}} 以来有 {{count}} 条新消息",
		"showParticipants": "显示参与者",
		"hideParticipants": "隐藏参与者",
		"addParticipants": "添加参与者",
		"emojisMatching": "与 {{text}} 匹配的表情符号",
		"empty": {
			"title": "暂无聊天",
			"description": "您创建的聊天或您被添加到的聊天将显示在这里",
			"create": "创建"
		},
		"header": {
			"title": "端到端加密",
			"description": "Filen 默认使用零知识端到端加密来保护每次聊天。",
			"feature1": "只有聊天成员可以解密并阅读内容",
			"feature2": "系统确保收到的数据确实来自显示的用户，并且没有被更改"
		},
		"message": {
			"time": {
				"now": "现在",
				"secondAgo": "{{seconds}} 秒前",
				"secondsAgo": "{{seconds}} 秒前",
				"minuteAgo": "{{minutes}} 分钟前",
				"minutesAgo": "{{minutes}} 分钟前",
				"hourAgo": "{{hours}} 小时前",
				"hoursAgo": "{{hours}} 小时前",
				"todayAt": "今天 {{date}}",
				"yesterdayAt": "昨天 {{date}}"
			},
			"edited": "已修改",
			"reply": "回复",
			"delete": "删除",
			"edit": "修改",
			"copyId": "复制 ID",
			"copyText": "复制文本",
			"leave": "离开"
		},
		"input": {
			"placeholder": "发送一条消息...",
			"typing": "正在输入...",
			"typingMultiple": "正在输入...",
			"replyingTo": "正在回复给",
			"placeholderMobile": "消息..."
		},
		"dialogs": {
			"deleteMessage": {
				"title": "删除消息",
				"description": "您确定要删除此消息吗？此操作无法撤消！",
				"continue": "删除"
			},
			"removeParticipant": {
				"title": "移除参与者",
				"description": "您确定要从此聊天中移除 {{name}} 吗？",
				"continue": "移除"
			},
			"deleteConversation": {
				"title": "删除聊天",
				"description": "您确定要删除此聊天吗？此操作无法撤消！",
				"continue": "删除"
			},
			"leaveConversation": {
				"title": "离开聊天",
				"description": "您确定要离开此聊天吗？",
				"continue": "离开"
			},
			"editName": {
				"title": "编辑名称",
				"placeholder": "新名称",
				"continue": "保存"
			}
		},
		"embeds": {
			"og": {
				"noTitleAvailable": "没有可用的标题",
				"noDescriptionAvailable": "没有可用的描述",
				"noImageAvailable": "没有可用的图像"
			}
		},
		"participants": {
			"profile": "资料",
			"remove": "移除"
		}
	},
	"contacts": {
		"addContact": "添加联系人",
		"search": "搜索...",
		"empty": "暂无联系人",
		"openChat": "开始聊天",
		"more": "更多",
		"dialogs": {
			"unblock": {
				"title": "取消拉黑用户",
				"description": "您确定要取消拉黑 {{name}} 吗？",
				"continue": "取消拉黑"
			},
			"remove": {
				"title": "移除联系人",
				"description": "您确定要从联系人中移除 {{name}} 吗？",
				"continue": "移除"
			},
			"block": {
				"title": "拉黑用户",
				"description": "您确定您想要拉黑 {{name}} 吗?",
				"continue": "拉黑"
			},
			"sendRequest": {
				"title": "发送联系人请求",
				"placeholder": "Filen 用户的邮件地址",
				"continue": "发送"
			}
		}
	},
	"settings": {
		"dialogs": {
			"deleteVersions": {
				"title": "删除版本文件",
				"description": "您确定要删除所有版本文件吗？此操作无法撤消！",
				"continue": "删除"
			},
			"deleteAll": {
				"title": "删除所有文件和目录",
				"description": "您确定要删除所有文件和目录吗？此操作无法撤消！",
				"continue": "删除"
			},
			"deleteAll2": {
				"title": "删除所有文件和目录",
				"description": "您真的确定吗？此操作无法撤消！",
				"continue": "删除"
			},
			"deleteAll3": {
				"title": "删除所有文件和目录",
				"description": "您 100% 确定吗？此操作无法撤消！",
				"continue": "删除"
			},
			"requestAccountDeletion": {
				"title": "删除账户",
				"description": "您确定要删除您的账户及其所有相关数据吗？我们将向您发送确认电子邮件。此操作无法撤消！",
				"continue": "请求删除"
			},
			"logout": {
				"title": "退出登录",
				"description": "您确定要退出登录吗？",
				"continue": "退出登录"
			},
			"clearThumbnailCache": {
				"title": "清除缩略图缓存",
				"description": "您确定要清除本地缩略图缓存吗？这将释放本地存储空间，但在需要时需要再次生成图像预览。",
				"continue": "清除"
			},
			"cancelSubscription": {
				"title": "取消订阅",
				"description": "您确定要取消订阅吗？",
				"continue": "取消订阅"
			},
			"nickName": {
				"title": "编辑昵称",
				"placeholder": "新昵称",
				"continue": "保存"
			},
			"twoFactorAuthenticationRecoveryKey": {
				"title": "恢复密钥",
				"description": "请将您的双重身份验证恢复密钥存储在一个最安全的地方。如果您丢失了双重身份验证设备，这是重新获得账户访问权限的唯一方法！",
				"continue": "完成"
			}
		},
		"general": {
			"storageUsed": "已使用的存储空间",
			"files": "文件 {{size}}",
			"versionedFiles": "版本文件 {{size}}",
			"free": " {{size}} 空闲",
			"used": "{{used}} / {{max}} 已使用",
			"dark": "深色",
			"light": "浅色",
			"system": "系统",
			"noteType": {
				"md": "Markdown",
				"rich": "富文本",
				"text": "文本",
				"checklist": "清单",
				"code": "代码"
			},
			"sections": {
				"defaultNoteType": {
					"name": "默认笔记类型",
					"info": "更改默认笔记类型"
				},
				"chatNotifications": {
					"name": "聊天通知",
					"info": "启用或禁用聊天通知"
				},
				"contactNotifications": {
					"name": "联系人通知",
					"info": "启用或禁用联系人通知"
				},
				"theme": {
					"name": "主题",
					"info": "更改应用程序外观"
				},
				"language": {
					"name": "语言",
					"info": "更改应用语言"
				},
				"clearThumbnailCache": {
					"name": "缩略图缓存",
					"info": "清除缩略图缓存",
					"action": "清除"
				},
				"logout": {
					"name": "退出登录",
					"info": "退出登录",
					"action": "退出登录"
				}
			}
		},
		"invite": {
			"copy": "复制",
			"title": "邀请其他人即可获得最多 30 GB 的存储空间",
			"description": "您每邀请一位朋友，您都会收到 {{yourEarnings}} - 而您的朋友也会收到 {{otherEarnings}} 。就是这么简单。",
			"earned": "{{earned}} / {{max}}"
		},
		"events": {
			"empty": "暂无事件",
			"fileUploaded": "{{name}} 已上传",
			"fileVersioned": "{{name}} 已计入版本",
			"versionedFileRestored": "{{name}} 已从版本文件中恢复",
			"fileMoved": "{{name}} 已移动",
			"fileRenamed": "{{name}} 已重命名为 {{newName}}",
			"fileTrash": "{{name}} 已移到回收站",
			"fileRm": "{{name}} 已删除",
			"fileRestored": "{{name}} 已从回收站中恢复",
			"fileShared": "{{name}} 已与 {{email}} 共享",
			"fileLinkEdited": "{{name}} 的公开链接已编辑",
			"folderTrash": "{{name}} 已移动到回收站",
			"folderShared": "{{name}} 已与 {{email}} 共享",
			"folderMoved": "{{name}} 已移动",
			"folderRenamed": "{{name}} 已重命名为 {{newName}}",
			"subFolderCreated": "{{name}} 已创建",
			"baseFolderCreated": "{{name}} 已创建",
			"folderRestored": "{{name}} 已从回收站中恢复",
			"folderColorChanged": "{{name}} 的颜色已更改",
			"login": "已登录",
			"deleteVersioned": "版本文件已删除",
			"deleteAll": "所有文件和目录均已删除",
			"deleteUnfinished": "未完成的上传已删除",
			"trashEmptied": "回收站已清空",
			"requestAccountDeletion": "已请求删除账户",
			"2faEnabled": "双重认证已启用",
			"2faDisabled": "双重认证已禁用",
			"codeRedeemed": "代码 {{code}} 已兑换",
			"emailChanged": "邮件地址已更改为 {{email}}",
			"passwordChanged": "密码已更改",
			"removedSharedInItems": "已移除来自 {{email}} 的 {{count}} 个共享项目",
			"removedSharedOutItems": "已移除 {{count}} 个与 {{email}} 共享的项目",
			"folderLinkEdited": "目录链接已编辑",
			"itemFavoriteAdded": "{{name}} 已被添加到收藏",
			"itemFavoriteRemoved": "{{name}} 已从收藏中移除",
			"failedLogin": "登录失败",
			"deleteFolderPermanently": "{{name}} 文件夹已永久删除",
			"deleteFilePermanently": "{{name}} 文件已永久删除",
			"emailChangeAttempt": "记录了一次尝试更改邮件的操作"
		},
		"invoices": {
			"plan": "计划",
			"method": "方式",
			"date": "日期",
			"download": "下载",
			"amount": "数量",
			"paid": "已支付",
			"noInvoices": "暂无发票",
			"paymentMethod": "付款方式"
		},
		"subscriptions": {
			"plan": "计划",
			"method": "方式",
			"date": "日期",
			"download": "下载",
			"amount": "数量",
			"status": "状态",
			"noSubscriptions": "尚未订阅",
			"cancel": "取消",
			"storage": "存储",
			"moreInfo": "有关您的订阅的更多信息",
			"paymentMethod": "付款方式",
			"info": "{{storage}} 存储空间，无限上传、下载、笔记和聊天。释放 Filen 的全部潜力。",
			"statuses": {
				"cancelled": "已取消",
				"active": "激活",
				"waiting": "等待中"
			}
		},
		"plans": {
			"starter": "初级",
			"monthly": "月度",
			"annually": "年度",
			"lifetime": "终身",
			"buyNow": "立即购买",
			"payInvoice": "支付发票"
		},
		"security": {
			"sections": {
				"password": {
					"name": "密码",
					"info": "更改您的密码",
					"action": "更改"
				},
				"twoFactorAuthentication": {
					"name": "双重认证",
					"info": "启用或禁用双重身份认证"
				},
				"exportMasterKeys": {
					"name": "导出主密钥",
					"info": "导出主密钥，以便在需要重置密码时可以恢复账户。每次更改密码时都需要导出主密钥。",
					"action": "导出",
					"subInfo": "请导出您的主密钥并将其存储在单独的安全位置。重置密码时需要使用主密钥以避免数据丢失。每次更改密码时都需要导出主密钥。"
				}
			}
		},
		"account": {
			"sections": {
				"avatar": {
					"name": "头像",
					"info": "您的头像将公开显示",
					"action": "编辑"
				},
				"versionedFiles": {
					"name": "版本文件",
					"info": "删除所有版本文件",
					"action": "删除"
				},
				"all": {
					"name": "所有文件和目录",
					"info": "删除所有文件和目录",
					"action": "删除"
				},
				"email": {
					"name": "邮件地址",
					"info": "更改您的邮件地址",
					"action": "更改"
				},
				"nickName": {
					"name": "昵称",
					"info": "更改您的昵称",
					"action": "更改"
				},
				"personalInformation": {
					"name": "个人信息",
					"info": "编辑您的个人信息。这将用于开具发票，不对外公开",
					"action": "编辑"
				},
				"fileVersioning": {
					"name": "文件正在计入版本",
					"info": "启用或禁用文件版本"
				},
				"loginAlerts": {
					"name": "登录警报",
					"info": "启用或禁用登录警报"
				},
				"appearOffline": {
					"name": "显示为离线",
					"info": "在聊天中显示为离线"
				},
				"requestAccountData": {
					"name": "请求账户数据",
					"info": "根据 GDPR 请求我们存储的所有个人数据",
					"action": "请求"
				},
				"requestAccountDeletion": {
					"name": "请求删除账户",
					"info": "请求删除您的账户。我们将向您发送确认邮件",
					"action": "请求"
				}
			}
		}
	},
	"drive": {
		"header": {
			"name": "名称",
			"size": "大小",
			"modified": "修改日期"
		},
		"list": {
			"item": {
				"sharedWith": "已共享给 {{count}} 人"
			}
		},
		"dialogs": {
			"createTextFile": {
				"title": "创建文本文件",
				"placeholder": "名称",
				"continue": "创建"
			},
			"createDirectory": {
				"title": "创建目录",
				"placeholder": "名称",
				"continue": "创建"
			},
			"rename": {
				"title": "重命名",
				"placeholder": "新名称",
				"continue": "重命名"
			},
			"share": {
				"title": "共享",
				"placeholder": "Filen 用户的邮件地址",
				"continue": "共享"
			}
		},
		"emptyPlaceholder": {
			"uploadFiles": "上传文件",
			"search": {
				"title": "搜索",
				"info": "未找到与 \"{{search}}\" 相符的内容"
			},
			"publicLink": {
				"title": "空目录",
				"info": "此目录的所有者尚未上传任何文件"
			},
			"drive": {
				"title": "尚未上传任何文件或目录",
				"info": "将文件或目录拖放到此处或点击下方按钮"
			},
			"trash": {
				"title": "回收站里空空如也",
				"info": "发送到回收站的文件和目录将显示在此处"
			},
			"recents": {
				"title": "尚未上传任何文件",
				"info": "最近上传的文件将显示在这里"
			},
			"links": {
				"title": "尚未创建公开链接",
				"info": "文件和目录的公开链接将显示在这里"
			},
			"favorites": {
				"title": "暂无收藏",
				"info": "收藏的文件和目录将显示在这里"
			},
			"sharedIn": {
				"title": "尚未与您共享任何内容",
				"info": "共享文件和目录将显示在这里"
			},
			"sharedOut": {
				"title": "尚未与他人共享任何内容",
				"info": "共享文件和目录将显示在这里"
			}
		}
	},
	"publicLink": {
		"invalid": "无效的公开链接",
		"invalidInfo": "此公开链接已过期或不存在",
		"back": "返回",
		"directory": {
			"downloadWholeDirectory": "下载整个目录",
			"downloadDirectory": "下载目录"
		},
		"sideBar": {
			"ad": {
				"header": "我们是 Filen",
				"title": "私密且安全的云储存",
				"info1": "隐私设计",
				"info2": "端到端加密",
				"info3": "零知识技术",
				"cta": "10 GB 免费存储空间"
			},
			"reportAbuse": "报告滥用"
		},
		"auth": {
			"wrongPassword": "密码错误",
			"title": "此链接受密码保护",
			"subTitle": "请输入发送人提供的密码以获取访问权限。",
			"password": "密码",
			"passwordPlaceholder": "密码",
			"access": "访问"
		}
	},
	"notes": {
		"contentPlaceholder": "笔记内容...",
		"maxSizeReached": "最大笔记大小限制为 {{chars}} 个字符",
		"empty": {
			"title": "暂无笔记",
			"description": "您创建的笔记或已添加的笔记将显示在此处",
			"create": "创建"
		},
		"dialogs": {
			"removeParticipant": {
				"title": "移除参与者",
				"description": "您确定要从此笔记中移除 {{name}} 吗？",
				"continue": "移除"
			},
			"deleteNote": {
				"title": "删除笔记",
				"description": "您确定要删除 {{name}} 吗？此操作无法撤消！",
				"continue": "删除"
			},
			"deleteTag": {
				"title": "删除标签",
				"description": "您确定要删除 {{name}} 吗？此操作无法撤消！",
				"continue": "删除"
			},
			"renameTag": {
				"title": "重命名",
				"placeholder": "新名称",
				"continue": "重命名"
			},
			"createTag": {
				"title": "创建标签",
				"placeholder": "名称",
				"continue": "创建"
			},
			"renameNote": {
				"title": "重命名",
				"placeholder": "新名称",
				"continue": "重命名"
			},
			"leaveNote": {
				"title": "离开笔记",
				"description": "您确定要离开 {{name}} 吗？您将无法再访问该笔记。",
				"continue": "离开"
			}
		}
	},
	"previewDialog": {
		"unsavedChanges": {
			"title": "未保存的更改",
			"description": "您确定要退出而不保存吗？所有更改都将丢失。",
			"continue": "关闭"
		}
	},
	"sharedIn": {
		"dialogs": {
			"remove": {
				"title": "移除",
				"description": "您确定要从您的共享中删除 {{item}} 吗？您将无法再访问它！",
				"continue": "移除"
			}
		}
	},
	"desktop": {
		"dialogs": {
			"close": {
				"title": "关闭",
				"description": "您确定要退出 Filen 吗？",
				"continue": "退出"
			}
		}
	},
	"trash": {
		"dialogs": {
			"empty": {
				"title": "清空回收站",
				"description": "您确定要清空回收站吗？此操作无法撤消！",
				"continue": "清空"
			}
		}
	},
	"notifications": {
		"chat": "聊天",
		"contactRequest": "联系人请求",
		"contactRequestInfo": "{{name}} 已向您发送联系人请求"
	},
	"cookieConsent": {
		"description": "本网站使用 cookie 来衡量和改善您的体验。",
		"optOut": "选择退出",
		"onlyNeeded": "仅需的",
		"accept": "接受"
	}
}
