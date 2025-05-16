import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeStarryNight from 'rehype-starry-night'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
  },
  compiler: {
    styledComponents: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeStarryNight],
  },
})

export default withMDX(nextConfig)
