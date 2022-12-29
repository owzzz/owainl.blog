import markdownToHtml from '../../../lib/markdown-to-html';
import { getPost } from '../../../lib/posts';
import PostMeta from '../../../components/post-meta';
import Markdown from '../../../components/markdown';

type Props = {
  params: { id: string }
}

export default async function Post({ params }: Props) {
  const { id } = params;
  const post = await getPost(id);

  const htmlFromMarkdown = await markdownToHtml(post.body);

  return (
    <>
        <PostMeta post={post} />
        <Markdown html={htmlFromMarkdown} />
    </>
  );
}