import Meta from '../../../components/document/meta';
import { Post } from '../../../lib/posts';
import prisma from '../../../lib/prisma';


export default async function Head() {
    const post = await prisma.post.findUnique({
      where: {
        id: 1, // TODO: Make this Dynamic
      }
    }) as Post | null;

    return (
    <>
        <Meta />
        <title>{`${post?.slug} - ${post?.title}`}</title>
    </>
    );
}