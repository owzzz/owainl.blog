import { formatDate } from '../../lib/date';
import { beVietnamPro, roboto } from '../../lib/fonts';
import { Post } from '../../lib/posts';
import CopyLink from '../copy-link';
import ShareLinkedin from '../share-linkedin';
import ShareTwitter from '../share-twitter';

type Props = {
  post: Post
}

export default function PostMeta({ post }: Props) {
    const {title, createdAt, content} = post;

    return (
        <header className="w-full space-y-6 border-b border-gray-200 mb-6">
            <span className='inline-block text-gray-400 font-semibold uppercase text-xs mb-4 md:mb-8'>Writing_</span>
            <h1 className={`${beVietnamPro.variable} font-title text-3xl md:text-4xl`}>{title}</h1>
            <div className={`flex items-center justify-between pt-4 pb-4 mt-6 ${roboto.variable} font-body`}>
                <div className="space-x-4">
                    <span className={`${roboto.variable} font-body text-sm text-gray-500`}><span className='hidden md:inline-block'>Last updated:</span> {formatDate(createdAt)}</span>
                    <span className="text-gray-200">|</span>
                    <span className="text-sm text-gray-500">{readingTime(content)} min read</span>
                </div>
                <div className="flex items-center">
                    <CopyLink />
                    <ShareTwitter post={post} />
                    <ShareLinkedin post={post} />
                </div>
            </div>
        </header>
    );
}

export function readingTime(text: string, wpm = 225): number {
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wpm);
    
    return readingTime;
}