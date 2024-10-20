'use client'
import ApiImage from './api.png'
import WebhookImage from './webhook.png'
import Db1Image from './db-2-db-1.png'
import Db2Image from './db-2-db-2.png'
import IntroImage from './intro.png'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function IntroImageComponent({ image }: { image: string }) {
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
      ImageEle = ApiImage
      alt = 'Image of an API architecture shows a client, server, and database'
      break
    case 'webhook':
      ImageEle = WebhookImage
      alt = 'Image of a webhook architecture between two systems to share data'
      break
    case 'db-1':
      ImageEle = Db1Image
      alt = 'Image of a database architecture between a client and server'
      break
    case 'db-2':
      ImageEle = Db2Image
      alt =
        'Image of a database architecture between a client and server with active active replication'
      break
    default:
      throw new Error('Invalid image')
  }

  return (
    <Image
      src={ImageEle}
      alt={alt}
      // width={500}
      height={500}
      className={'dark:bg-zinc-200'}
    />
  )
}

export default IntroImageComponent
