import Meta from '../../../components/document/meta';
import { getPost } from '../../../lib/posts';

type Props = {
  params: { id: string }
}


export default async function Head({ params }: Props) {
    const { id } = params;
    const { metaTitle } = await getPost(id);

    return (
    <>
        <Meta />
        <title>{metaTitle}</title>
    </>
    );
}