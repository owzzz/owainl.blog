import { formatDate } from '../../lib/date';
import { beVietnamPro, roboto } from '../../lib/fonts';
import CopyLink from '../copy-link';

type Props = {
  title: string;
  date: string;
}

export default function PageMeta({ title, date }: Props) {
    return (
        <header className='border-b border-gray-200 mb-6'>
            <span className='inline-block text-gray-400 font-semibold uppercase text-xs mb-4 md:mb-8'>About</span>
            <h1 className={`${beVietnamPro.variable} font-title text-3xl md:text-4xl`}>{title}</h1>
            <div className='flex items-center justify-between pt-4 pb-4'>
            <p className={`${roboto.variable} font-body text-sm text-gray-500`}>Last updated: {formatDate(date)}</p>
            <CopyLink />
            </div>
        </header>
    );
}
