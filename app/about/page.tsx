import markdownToHtml from '../../lib/markdown-to-html';
import Markdown from '../../components/markdown';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import PageMeta from '../../components/page-meta';


export type Page = {
  body: string;
  [key: string]: any;
}

const currentDirectory = path.join(process.cwd(), 'app/about');

export default async function About() {
  const page = getPage('about');

  const htmlFromMarkdown = await markdownToHtml(page.body);

  return (
    <section className='w-full max-w-[640px]'>
      <PageMeta title={page.title} date={page.date} />
      <Markdown html={htmlFromMarkdown} />
    </section>
  );
}

function getPage(fileName: string) {
  const fullPath = path.join(currentDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    body: matterResult.content,
    ...matterResult.data,
  } as Page;
}
