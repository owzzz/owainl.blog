import { getAllPostIds, getPost, Path } from '../../lib/posts';

export async function getStaticProps({ params }: { params: { id: string }}): Promise< { props: { post: Post } }> {
  const post = getPost(params.id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths(): Promise<{ paths: Path[], fallback: boolean }> {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export type Post = {
    id: string,
    date: string,
    title?: string,
}

export default function Post({ post }: { post: Post }) {
  return <main>
    <h1>{post.title}</h1>
  </main>;
}