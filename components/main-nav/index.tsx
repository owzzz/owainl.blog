import Link from 'next/link';
import { roboto } from '../../lib/fonts';
import { usePathname } from 'next/navigation';

export default function MainNav() {
    return (
        <header className={`${roboto.variable} font-title flex items-center justify-center bg-white px-6 md:px-4 h-[60px] flex-none`}>
            <div className="flex items-center justify-between max-w-6xl w-full">
                <Link className="text-sm text-black tracking-wide" href="/">OWAINL.co</Link>
                <ul className='flex space-x-8'>
                    <li><Link className={`text-xs hover:underline ${usePathname()?.includes('about') ? 'underline font-bold' : ''}`} href="/about">About</Link></li>
                    {/* <li><Link className={`text-xs hover:underline ${usePathname()?.includes('writing') ? 'underline font-bold' : ''}`} href="/writing/hello-world">Writing</Link></li> */}
                    <li><Link className="text-xs hover:underline" href="mailto:owain@owainl.co?subject=Website%20enquiry">Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}