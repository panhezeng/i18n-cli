import { statSync } from 'node:fs'

export default function isDirectory(filePath: string): boolean {
  try {
    return statSync(filePath).isDirectory()
  } catch (e) {
    return false
  }
}
