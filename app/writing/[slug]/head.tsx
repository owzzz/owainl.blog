import Meta from '../../../components/document/meta';
import { findUniquePostBySlug } from '../../../lib/posts';

type Params = {
  params: {
    slug: string;
  }
}

export default async function Head({ params }: Params) {
    const post = await findUniquePostBySlug(params.slug);

    return (
    <>
        <Meta />
        {post ? (
            <title>{`${post?.slug} - ${post?.title}`}</title>
        ) : null }
    </>
    );
}