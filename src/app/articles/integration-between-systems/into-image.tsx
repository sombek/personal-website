'use client'
import ApiImage from './images/api.svg'
import ApiImageDark from './images/api-dark.svg'
import WebhookImage from './images/webhook.svg'
import WebhookImageDark from './images/webhook-dark.svg'
// db-1.svg
// db-1-dark.svg
// db-2.svg
// db-2-dark.svg
import Db1 from './images/db-1.svg'
import Db1Dark from './images/db-1-dark.svg'
import Db2 from './images/db-2.svg'
import Db2Dark from './images/db-2-dark.svg'
import IntroImage from './intro.png'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function IntroImageComponent({
  image,
  height,
  comment,
}: {
  image: string
  height?: number
  comment?: string
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
    case 'api':
      if (resolvedTheme === 'dark') ImageEle = ApiImageDark
      else ImageEle = ApiImage
      alt = 'Image of an API architecture shows a client, server, and database'
      break
    case 'webhook':
      if (resolvedTheme === 'dark') ImageEle = WebhookImageDark
      else ImageEle = WebhookImage
      alt = 'Image of a webhook architecture between two systems to share data'
      break
    case 'db-1':
      if (resolvedTheme === 'dark') ImageEle = Db1Dark
      else ImageEle = Db1
      alt = 'Image of a database architecture between a client and server'
      break
    case 'db-2':
      if (resolvedTheme === 'dark') ImageEle = Db2Dark
      else ImageEle = Db2
      alt =
        'Image of a database architecture between a client and server with active active replication'
      break
    default:
      throw new Error('Invalid image')
  }

  return (
    <div className="flex w-full justify-center">
      <Image
        src={ImageEle}
        alt={alt}
        height={height ? height : 500}
        className={'dark:bg-zinc-200'}
      />
    </div>
  )
}

export default IntroImageComponent
