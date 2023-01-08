import markdownToHtml from '../../lib/markdown-to-html';
import Markdown from '../../components/markdown';
import PageMeta from '../../components/page-meta';
import Link from 'next/link';
import { beVietnamPro } from '../../lib/fonts';
import prisma from '../../lib/prisma';
import { Page } from '../../lib/pages';

export default async function About() {
  const page = await prisma.page.findUnique({
    where: {
      slug: 'about'
    }
  }) as Page | null;

  if (!page) {
    return (
      <section className='w-full max-w-[640px] justify-center flex-col items-center flex'>
        <h1 className={`${beVietnamPro.variable} font-title text-3xl md:text-3xl mb-4`}>Sorry, page not found...</h1>
        <Link className="text-sm text-gray-400 uppercase" href="/">Back</Link>
      </section>
    );
  }

  const htmlFromMarkdown = await markdownToHtml(page.content);

  return (
    <section className='w-full max-w-[640px]'>
      <PageMeta page={page} />
      <Markdown html={htmlFromMarkdown} />
    </section>
  );
}