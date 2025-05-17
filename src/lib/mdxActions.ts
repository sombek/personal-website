import fs from 'fs';
import path from 'path';

// Server action to fetch .mdx file content
export async function getMdxContent(slug: string) {
  'use server';
  const mdxPath = `src/app/articles/${slug}/page.mdx`;
  const absPath = path.join(process.cwd(), mdxPath);
  try {
    const content = fs.readFileSync(absPath, 'utf8');
    return content;
  } catch (err: any) {
    throw new Error(`Failed to fetch article: ${err.message}`);
  }
}

// Server action to update .mdx file content
export async function updateMdxContent(slug: string, content: string) {
  'use server';
  const mdxPath = `src/app/articles/${slug}/page.mdx`;
  const absPath = path.join(process.cwd(), mdxPath);
  try {
    fs.writeFileSync(absPath, content, 'utf8');
    return { ok: true };
  } catch (err: any) {
    throw new Error(`Failed to save article: ${err.message}`);
  }
} 