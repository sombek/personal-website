'use client'
import IntroImageLight from './intro.png'
import IntroImageDark from './intro-dark.png'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function IntroImageComponent() {
  let { resolvedTheme } = useTheme()

  return (
    <Image
      src={resolvedTheme === 'dark' ? IntroImageDark : IntroImageLight}
      alt="Intro"
      width={500}
    />
  )
}
export default IntroImageComponent
