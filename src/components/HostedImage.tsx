'use client'
import { CldImage } from 'next-cloudinary'

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function HostedImage({
  src,
  width,
  height,
}: {
  src: string
  width?: number
  height?: number
}) {
  return (
    <CldImage
      alt={'image'}
      src={src} // Use this sample image or upload your own via the Media Explorer
      width={width || 500}
      height={height || 500}
      crop={'fill'}
      gravity={'center'}
    />
  )
}
