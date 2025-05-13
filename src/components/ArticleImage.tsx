import Image from 'next/image'
import Link from 'next/link'

interface ArticleImageProps {
  src: string
  alt: string
  label?: string
  labelLink?: string
  width?: number
  height?: number
}

export function ArticleImage({
  src,
  alt,
  label,
  labelLink,
  width = 300,
  height = 300,
}: ArticleImageProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.8rem',
      }}
    >
      <Image
        src={src}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          objectFit: 'cover',
          borderRadius: '10px',
        }}
        width={width}
        height={height}
        id={alt.toLowerCase().replace(/\s+/g, '-')}
        alt={alt}
      />
      {label &&
        (labelLink ? (
          <Link href={labelLink}>
            <label htmlFor={alt.toLowerCase().replace(/\s+/g, '-')}>
              {label}
            </label>
          </Link>
        ) : (
          <label htmlFor={alt.toLowerCase().replace(/\s+/g, '-')}>
            {label}
          </label>
        ))}
    </div>
  )
}
