import Image from 'next/image';
import Link from 'next/link';
import { roboto, beVietnamPro } from '../lib/fonts';

export default function Page() {
  return (
    <section className="flex justify-center items-center w-full flex-1">
      <div className="px-6 md:px-4">
        <h1 className={`${beVietnamPro.variable} font-title text-2xl md:text-3xl tracking-wide leading-normal`}>Owain Llewellyn<br />
          <span className="text-3xl md:text-5xl mt-2 block">Software Engineer &amp; Designer<span className="animate-blink">_</span></span>
        </h1>
        
        <p className={`${roboto.variable} font-body text-gray-500 mt-4 leading-relaxed`}>
          Passionate About Digital Technologies, Great Design & Clever Entrepreneurial Ideas.
        </p>
        
        <div className='flex mt-2 items-center text-gray-500'>
          <p className={`${roboto.variable} font-body`}>Building Things At</p> 
          <Image src="/apple.svg" className="ml-2 relative bottom-0.5" alt="Apple Logo" width={20} height={20} />
        </div>

        <div className='mt-24'>
          <ul className='flex items-center space-x-3'>
            <li className='pr-0.5'>
              <Link className="text-xs text-black hover:text-gray-700 tracking-wide" href="https://www.linkedin.com/in/owainllewellyn/" target="_blank">Linkedin</Link>
            </li>
            <li className='pr-0.5'>
              <Link className="text-xs text-black hover:text-gray-700 tracking-wide" href="https://twitter.com/Owzzz" target="_blank">|&nbsp;&nbsp;&nbsp;Twitter</Link>
            </li>
            <li className='pr-0.5'>
              <Link className="text-xs text-black hover:text-gray-700 tracking-wide" href="http://github.com/owzzz" target="_blank">|&nbsp;&nbsp;&nbsp;Github</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}


