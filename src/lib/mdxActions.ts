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
    // Read the current content
    const currentContent = fs.readFileSync(absPath, 'utf8');
    
    // Extract everything up to and including the ArticleLandingImage component
    const headerMatch = currentContent.match(/^[\s\S]*?<ArticleLandingImage[\s\S]*?\/>\n\n/);
    
    if (!headerMatch) {
      throw new Error('Could not find header section with ArticleLandingImage');
    }

    // Remove any imports, import paths, and ArticleLandingImage from the incoming content
    const cleanContent = content
      .replace(/import[\s\S]*?from[\s\S]*?['"][\s\S]*?['"]\n?/g, '') // Remove full import statements
      .replace(/['"][\s\S]*?ArticleLandingImage[\s\S]*?['"]\n?/g, '') // Remove any stray import paths
      .replace(/<ArticleLandingImage[\s\S]*?\/>\n?/g, '') // Remove ArticleLandingImage components
      .trim(); // Remove any extra whitespace
    
    // Combine the preserved header with the cleaned content
    const newContent = `${headerMatch[0]}${cleanContent}`;
    
    fs.writeFileSync(absPath, newContent, 'utf8');
    return { ok: true };
  } catch (err: any) {
    throw new Error(`Failed to save article: ${err.message}`);
  }
} 