import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }: { params: { id: string }}) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export type Post = {
    id: number,
    date: string,
    title: string,
}

export default function Post({ post }: { post: Post }) {
  return <main>
    <h1>{post.id}</h1>
  </main>;
}