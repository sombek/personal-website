import { mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function ensureUploadsDir() {
  const uploadDir = join(process.cwd(), 'public', 'uploads')
  
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true })
  }
  
  return uploadDir
} 