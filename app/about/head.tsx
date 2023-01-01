import Meta from '../../components/document/meta';
import { Page } from '../../lib/pages';
import prisma from '../../lib/prisma';

export default async function Head() {
    const page = await prisma.page.findUnique({
      where: {
        id: 1, // TODO: Make this Dynamic
      }
    }) as Page | null;

    return (
    <>
        <Meta />
        <title>{`${page?.slug} - ${page?.title}`}</title>
    </>
    );
}