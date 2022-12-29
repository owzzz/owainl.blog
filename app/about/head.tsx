import Meta from '../../components/document/meta';
import { getPage } from './page';

export default function Head() {
    const { metaTitle } = getPage();

    if (!metaTitle) {
        throw new Error('About / Head / meta title not defined');
    }

    return (
    <>
        <Meta />
        <title>{metaTitle}</title>
    </>
    );
}