import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export type Page = {
  title: string;
  body: string;
  date: string;
  metaTitle?: string;
}

const currentDirectory = path.join(process.cwd(), 'app/about');

export function getPage(fileName = 'about') {
  const fullPath = path.join(currentDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    body: matterResult.content,
    ...matterResult.data,
  } as Page;
}
