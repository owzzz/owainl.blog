import Link from 'next/link';
import { beVietnamPro } from '../lib/fonts';

export default function Header() {
  return (
    <header className={`${beVietnamPro.variable} flex items-center justify-center font-body bg-white px-6 md:px-4 h-[60px] flex-none`}>
        <div className="flex items-center justify-between max-w-6xl w-full">
        <Link className="text-sm text-black tracking-wide" href="/">OWAINL.co</Link>
        <ul>
            <li><Link className="text-xs hover:underline" href="mailto:owain@owainl.co?subject=Website%20enquiry">Contact</Link></li>
        </ul>
        </div>
    </header>
  );
}