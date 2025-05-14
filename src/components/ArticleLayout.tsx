'use client'

import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { FaArrowRight } from 'react-icons/fa6'
import Tags from '@/components/Tags'
import { BlogPosting } from 'schema-dts'
import { WithContext } from 'schema-dts'

const convertChilderIntoText = (children: React.ReactNode): string => {
  const escapeHtml = (text: string): string => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  }

  if (children == null) {
    return ''
  }

  if (typeof children === 'string') {
    return escapeHtml(children)
  }

  if (typeof children === 'number') {
    return escapeHtml(children.toString())
  }

  if (Array.isArray(children)) {
    return children.map(convertChilderIntoText).join(' ')
  }

  if (typeof children === 'object' && 'props' in children) {
    return convertChilderIntoText(children.props.children)
  }

  return ''
}

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://abdullah-h.com/articles/${article.slug}`,
    },
    headline: article.title,
    name: article.title,
    inLanguage: 'ar',
    description: article.description,
    articleBody: convertChilderIntoText(children),
    datePublished: article.date,
    keywords: article.tags.join(','),
    image: `https://abdullah-h.com/cards/${article.slug}.png`,
    author: {
      '@type': 'Person',
      name: 'Abdullah Hashim',
      email: 'abdullah-hashim@outlook.com',
    },
  }

  return (
    <Container className="mt-16 lg:mt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-right-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:right-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <FaArrowRight className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-teal-800 sm:text-5xl dark:text-zinc-100">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="mr-3">{formatDate(article.date)}</span>
              </time>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
            <Tags tags={article.tags} />
          </article>
        </div>
      </div>
    </Container>
  )
}
