import markdownToHtml from '../../../lib/markdown-to-html';
import { getPost } from '../../../lib/posts';
import PageMeta from '../../../components/page-meta';
import Markdown from '../../../components/markdown';

type Props = {
  params: { id: string }
}

export default async function Post({ params }: Props) {
  const { id } = params;
  const post = await getPost(id);

  const htmlFromMarkdown = await markdownToHtml(post.body);

  return (
    <section className='w-full max-w-[640px]'>
        <PageMeta post={post} />
        <Markdown html={htmlFromMarkdown} />
    </section>
  );
}