import Image from 'next/image'
import Link from 'next/link'

interface ArticleImageProps {
  src: string
  alt: string
  label?: string
  labelLink?: string
  width?: number
  height?: number
  children?: React.ReactNode
}

export function ArticleImage({
  src,
  alt,
  label,
  labelLink,
  width = 300,
  height = 300,
  children,
}: ArticleImageProps) {
  const imageId = alt.toLowerCase().replace(/\s+/g, '-')
  const imageElement = (
    <Image
      src={src}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'contain',
        borderRadius: '10px',
      }}
      width={width}
      height={height}
      id={imageId}
      alt={alt}
    />
  )

  const labelElement = label && (
    <label
      htmlFor={imageId}
      style={{
        cursor: labelLink ? 'pointer' : 'default',
      }}
    >
      {label}
    </label>
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.8rem',
        margin: '0',
      }}
    >
      {labelLink ? (
        <Link href={labelLink} target="_blank" style={{ textAlign: 'center' }}>
          {imageElement}
          {labelElement}
        </Link>
      ) : (
        <>
          {imageElement}
          {labelElement}
        </>
      )}
      {children && children}
    </div>
  )
}
