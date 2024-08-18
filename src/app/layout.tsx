import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['arabic'],
})
export const metadata: Metadata = {
  title: {
    template: '%s - مدونة عبدالله هاشم',
    default: 'مدونة عبدالله هاشم - مدونة شخصية تهتم بالتقنية والبرمجة والتصميم',
  },
  description:
    'مدونة شخصية تهتم بالتقنية والبرمجة والتصميم، تحتوي على مقالات ودروس ومشاريع تقنية مفتوحة المصدر.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ar"
      className={'h-full antialiased ' + ibmPlexSansArabic.className}
      suppressHydrationWarning
      style={{
        direction: 'rtl',
      }}
    >
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
