'use client'
import { Container } from '@/components/Container';
import { Prose } from '@/components/Prose';
import { type ArticleWithSlug } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';
import Tags from '@/components/Tags';
import { BlogPosting } from 'schema-dts';
import { WithContext } from 'schema-dts';
import { ReactElement, useEffect, useRef } from 'react';
import EditArticle from './EditArticle';
import { MDXEditorMethods } from '@mdxeditor/editor';

function isReactElement(child: unknown): child is ReactElement {
  return (
    typeof child === 'object' &&
    child !== null &&
    'props' in child &&
    typeof (child as any).props === 'object' &&
    (child as any).props !== null
  );
}

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
      .trim();
  };

  if (children == null) {
    return '';
  }

  if (typeof children === 'string') {
    return escapeHtml(children);
  }

  if (typeof children === 'number') {
    return escapeHtml(children.toString());
  }

  if (Array.isArray(children)) {
    return children.map(convertChilderIntoText).join(' ');
  }

  if (isReactElement(children)) {
    return convertChilderIntoText(
      (children as React.ReactElement<any, any>).props.children,
    );
  }

  return '';
};

export function ArticleLayout({
  article,
  articleContent,
  children,
}: {
  article: ArticleWithSlug;
  articleContent: string;
  children: React.ReactNode;
}) {
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
  };
  const editorRef = useRef<MDXEditorMethods>(null)

  useEffect( ()=>{
    // trimmed content delete the first 60 lines of code
    // const trimmedContent = articleContent.split('\n').slice(60).join('\n')
    editorRef.current?.setMarkdown(articleContent)
    console.log('editorRef',editorRef.current?.getMarkdown())
  },[editorRef.current])
  
  return (
    <Container className="mt-16 lg:mt-32">
      {/* Only show in dev mode */}
      {process.env.NODE_ENV === 'development' && (
        <EditArticle editorRef={editorRef} markdown="## Test Content"/>
      )}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
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
      </div> */}
    </Container>
  );
}
