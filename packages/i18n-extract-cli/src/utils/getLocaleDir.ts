import slash from 'slash'
import StateManager from './stateManager'

export function getLocaleDir(): string {
  const { localeFileType, localePath } = StateManager.getToolConfig()
  // 将 Windows 路径转换为正斜杠格式，确保正则匹配和路径替换在 Windows 上正常工作
  const normalizedLocalePath = slash(localePath)
  // 转义 localeFileType 中的特殊字符，匹配文件名模式如 /zh.json
  const escapedFileType = localeFileType.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const reg = new RegExp(`/[A-Za-z-]+\\.${escapedFileType}`, 'g')
  const localeDirPath = normalizedLocalePath.replace(reg, '')
  return localeDirPath
}
