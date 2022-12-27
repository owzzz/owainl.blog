import markdownToHtml from '../../lib/markdown-to-html';
import Markdown from '../../components/markdown';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { beVietnamPro, roboto } from '../../lib/fonts';
import { readingTime } from '../../components/post-meta';

type Page = {
  body: string;
  [key: string]: any;
}

const currentDirectory = path.join(process.cwd(), 'app/about');


export default async function Page() {
  const page = getPage('about');

  const htmlFromMarkdown = await markdownToHtml(page.body);

  return <main className='max-w-[680px] w-full px-6 space-y-6 pb-6'>
    <header className="space-y-6">
        <div>
            <h1 className={`${beVietnamPro.variable} font-title text-4xl`}>{page.title}</h1>
            <div className={`flex items-center justify-between py-2 px-4 bg-gray-100 rounded-md mt-6 ${roboto.variable} font-body`}>
                <div className="space-x-4">
                  <span className="text-sm text-gray-800">{readingTime(page.body)} min read</span>
                </div>
            </div>
        </div>
    </header>
    <Markdown html={htmlFromMarkdown} />
  </main>;
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
