'use client'

import IntroImage from './images/img.png'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function IntroImageComponent({
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
    case 'intro':
      ImageEle = IntroImage
      alt =
        'Article header image with a square says "Integration between systems"'
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

export default IntroImageComponent
