import Meta from '../../components/document/meta';
import { getPage } from '../../lib/pages';

export default async function Head() {
    const page = getPage();

    return (
    <>
        <Meta />
        <title>{page.metaTitle}</title>
    </>
    );
}