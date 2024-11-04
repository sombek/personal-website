'use client'

import SampleApp from './images/sample-app.png'
import CompileTime from './images/compile-time.svg'
import RunTime from './images/run-time.svg'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function ArticleImage({
  image,
  height,
}: {
  image: string
  height?: number
}) {
  let { resolvedTheme } = useTheme()
  let ImageEle = null
  let alt = null
  switch (image) {
    case 'sample-app':
      ImageEle = SampleApp
      alt = 'Image showing the sample app running in the browser'
      break
    case 'compile-time':
      ImageEle = CompileTime
      alt = 'diagram showing the compile time of a .NET app and React app'
      break
    case 'run-time':
      ImageEle = RunTime
      alt = 'diagram showing the run time of a .NET app and React app'
      break
    default:
      throw new Error('Invalid image')
  }

  return (
    <Image
      src={ImageEle}
      alt={alt}
      height={height ? height : 500}
      className={'dark:bg-zinc-200'}
    />
  )
}

export default ArticleImage
