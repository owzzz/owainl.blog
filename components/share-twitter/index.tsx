import { Post } from "../../lib/posts";

type Props = {
  post: Post
}

function generateUrl({id, excerpt}: Post): string {
    const CHAR_COUNT = 280;
    
    const twitterUrl = `https://twitter.com/intent/tweet`;
    const text = excerpt.length < CHAR_COUNT ? excerpt : `${excerpt.slice(0, (CHAR_COUNT - 3)) + '...'}`;

    // Query params
    const _url = `https://${process.env['HOST']}/writing/${id}`;
    const _text = encodeURIComponent(text)

    // GA params
    const _source = 'twitter';
    const _medium = 'blog-post';
    const _id = `${id}`;
        
    return `${twitterUrl}?url=${_url}&text=${_text}&utm_source=${_source}&utm_medium=${_medium}&utm_id=${_id}`;
}

export default function ShareTwitter({ post }: Props) {
    return (
        <a href={generateUrl(post)} className="ml-2" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-gray-800 hover:fill-gray-500">
                <path d="M20 5.34c-.67.41-1.4.7-2.18.87a3.45 3.45 0 0 0-5.02-.1 3.49 3.49 0 0 0-1.02 2.47c0 .28.03.54.07.8a9.91 9.91 0 0 1-7.17-3.66 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44V10c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06a3.5 3.5 0 0 0 3.24 2.43 7.34 7.34 0 0 1-4.36 1.49l-.81-.05a9.96 9.96 0 0 0 5.36 1.56c6.4 0 9.91-5.32 9.9-9.9v-.5c.69-.49 1.28-1.1 1.74-1.81-.63.3-1.3.48-2 .56A3.33 3.33 0 0 0 20 5.33"></path>
            </svg>
        </a>
    )
}