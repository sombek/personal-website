import { Container } from '@/components/Container'
import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
export function SimpleLayout({
  title,
  intro,
  icon,
  children,
}: {
  title: string
  intro: string | React.ReactNode
  icon?: StaticImageData
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <div className="flex items-center space-x-4">
          {icon && <Image src={icon} alt="" className="size-16 p-1" />}
          <h1 className="text-4xl font-bold tracking-tight text-teal-800 sm:text-5xl dark:text-zinc-100">
            {title}
          </h1>
        </div>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">{intro}</p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}

const intro = ({ children }: { children: ReactNode }) => {
  return <div className="mt-4 text-teal-900">{children}</div>
}
SimpleLayout.Intro = intro
