import Meta from '../../components/document/meta';
import { findUniquePageBySlug } from '../../lib/pages';

export default async function Head() {
    const page = await findUniquePageBySlug('about');

    return (
    <>
        <Meta />
        {page ? (
            <title>{`${page.title} - (${page.slug})`}</title>
        ) : null }
    </>
    );
}