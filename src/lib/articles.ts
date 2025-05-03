import glob from 'fast-glob'

type ArticleStatus = 'published' | 'pending'

interface Article {
  status: ArticleStatus
  title: string
  description: string
  author: string
  date: string
  tags: string[]
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }
  // if not status is provided, set it to published
  if (!article.status) {
    article.status = 'published'
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))
  // remove articles with pending status
  articles = articles.filter((article) => article.status !== 'pending')

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
