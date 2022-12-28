import { beVietnamPro, roboto } from '../../lib/fonts';
import { Post } from '../../lib/posts';
import CopyLink from '../copy-link';
import ShareLinkedin from '../share-linkedin';
import ShareTwitter from '../share-twitter';

type Props = {
  post: Post
}

export default function Markdown({ post }: Props) {
    const {title, date, body} = post;
    return (
        <header className="space-y-6">
            <div>
                <h1 className={`${beVietnamPro.variable} font-title text-4xl`}>{title}</h1>
                <div className={`flex items-center justify-between py-2 px-4 bg-gray-100 rounded-md mt-6 ${roboto.variable} font-body`}>
                    <div className="space-x-4">
                        <span className="text-sm text-gray-800">{formatDate(date)}</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-sm text-gray-800">{readingTime(body)} min read</span>
                    </div>
                    <div className="flex items-center">
                        <CopyLink />
                        <ShareTwitter post={post} />
                        <ShareLinkedin post={post} />
                    </div>
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

export function formatDate(date: string): string {
  const options = { month: 'short', day: 'numeric' } as Intl.DateTimeFormatOptions;
  const dateToFormat = new Date(date);

  return new Intl.DateTimeFormat('en-US', options).format(dateToFormat);
}