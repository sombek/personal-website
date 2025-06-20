import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './global.css'
import '../styles/prism.css'
import '../styles/tritanopia.css'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['arabic'],
})
export const metadata: Metadata = {
  title: {
    template: '%s - مدونة عبدالله هاشم',
    default: 'مدونة عبدالله هاشم - مدونة شخصية',
  },
  keywords: [
    'عبدالله هاشم',
    'عبدالله هاشم مدونة',
    'عبدالله هاشم مدونة شخصية',
    'عبدالله هاشم مدونة تقنية',
    'عبدالله هاشم مدونة شخصية وتقنية',
    'عبدالله هاشم مدونة شخصية وتقنية',
    'عبدالله هاشم مدونة شخصية وتقنية عربية',
  ],
  publisher: 'عبدالله هاشم',
  description:
    'مدونة شخصية اشارك فيها تجاربي وافكاري في المجال الشخصي و التقني',
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
      {
        // if in production, add the Google Analytics and Speed Insights scripts
        process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )
      }
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-950">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
