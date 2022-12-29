import markdownToHtml from '../../lib/markdown-to-html';
import Markdown from '../../components/markdown';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { beVietnamPro, roboto } from '../../lib/fonts';
import { formatDate } from '../../components/post-meta';
import CopyLink from '../../components/copy-link';

type Page = {
  body: string;
  [key: string]: any;
}

const currentDirectory = path.join(process.cwd(), 'app/about');

export default async function About() {
  const page = getPage('about');

  const htmlFromMarkdown = await markdownToHtml(page.body);

  return (
    <main className='max-w-[680px] w-full px-6 space-y-6 pb-6 mt-4 md:mt-8'>
      <header className='border-b border-gray-100'>
        <span className='inline-block text-gray-400 font-semibold uppercase text-xs mb-4 md:mb-8'>About</span>
        <h1 className={`${beVietnamPro.variable} font-title text-3xl md:text-4xl`}>{page.title}</h1>
        <div className='flex items-center justify-between pt-4 pb-4'>
          <p className={`${roboto.variable} font-body text-sm text-gray-500`}>Last updated: {formatDate(page.date)}</p>
          <CopyLink />
        </div>
        
      </header>
      <Markdown html={htmlFromMarkdown} />
    </main>
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
