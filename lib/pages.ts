import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export type Page = {
  title: string,
  excerpt?: string,
  content: string,
  createdAt: string,
  published: boolean;
  slug: string;
}

export function getPage(fileName?: string) {
  if (!fileName) {
    throw new Error('File name must be provided');
  }

  const currentDirectory = path.join(process.cwd(), 'app/about');
  const fullPath = path.join(currentDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const isPublished = Boolean(matterResult.data.published);

  if (!isPublished) {
    return null;
  }

  return {
    content: matterResult.content,
    ...matterResult.data,
  } as Page;
}
