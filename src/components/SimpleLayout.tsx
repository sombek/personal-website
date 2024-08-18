import { Container } from '@/components/Container'
import { ReactNode } from 'react'
import Image from 'next/image'
import coinsLightMode from '@/images/wired-outline-298-coins.gif'
export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string | React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <div className="flex items-center space-x-4">
          <Image src={coinsLightMode} alt="" className="size-16" />
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
