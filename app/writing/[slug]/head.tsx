import Meta from '../../../components/document/meta';
import { findUniquePostBySlug } from '../../../lib/posts';


export default async function Head() {
    const post = await findUniquePostBySlug('about');

    return (
    <>
        <Meta />
        <title>{`${post?.slug} - ${post?.title}`}</title>
    </>
    );
}