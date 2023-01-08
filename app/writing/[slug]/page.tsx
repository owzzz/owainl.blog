import markdownToHtml from '../../../lib/markdown-to-html';
import { findUniquePostBySlug } from '../../../lib/posts';
import PostMeta from '../../../components/post-meta';
import Markdown from '../../../components/markdown';
import { beVietnamPro } from '../../../lib/fonts';
import Link from 'next/link';

type Params = {
  params: {
    slug: string;
  }
}

export default async function _Post({ params }: Params) {
  const post = await findUniquePostBySlug(params.slug);

  if (!post) {
    return (
      <section className='w-full max-w-[640px] justify-center flex-col items-center flex'>
        <h1 className={`${beVietnamPro.variable} font-title text-3xl md:text-3xl mb-4`}>Sorry, page not found...</h1>
        <Link className="text-sm text-gray-400 uppercase" href="/">Back</Link>
      </section>
    );
  }

  return (
    <section className='w-full max-w-[640px]'>
        <PostMeta post={post} />
        { post.content ? (
           <Markdown html={await markdownToHtml(post.content)} />
        ) : null}
    </section>
  );
}