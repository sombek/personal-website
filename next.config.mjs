import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeStarryNight from "rehype-starry-night";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    experimental: {
        outputFileTracingIncludes: {
            '/articles/*': ['./src/app/articles/**/*.mdx'],
        },
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
