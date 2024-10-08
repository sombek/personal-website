import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import articleLogo from '@/images/wired-outline-245-edit-document.gif'
import { CldImage } from 'next-cloudinary'
import HostedImage from '@/components/HostedImage'
import Tags from '@/components/Tags'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>قراءة المقالة</Card.Cta>
      </Card>

      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
        <Tags tags={article.tags} />
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'مقالات و تجارب و أفكار',
  description:
    'في هذه الصفحة أشارك بعض المقالات والتجارب والأفكار في مجال التربية او التقنية او البرمجة',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="مقالات و تجارب و أفكار"
      intro="في هذه الصفحة أشارك بعض المقالات والتجارب والأفكار في مجال التربية او التقنية او البرمجة"
    >
      <div className="md:border-r md:border-zinc-100 md:pr-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
