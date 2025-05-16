import Image from 'next/image'
import clsx from 'clsx'
interface ArticleLandingImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  quality?: number
}

export function ArticleLandingImage({
  src,
  alt,
  className,
  priority = true,
}: ArticleLandingImageProps) {
  return (
    <div
      className={clsx(
        'relative aspect-video w-full overflow-hidden rounded-lg',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading="eager"
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
