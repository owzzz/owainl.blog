import Link from 'next/link';
import { roboto, beVietnamPro } from '../lib/fonts';

export default function Page() {
  return (
    <section className="flex justify-center items-center w-full max-w-[1220px] flex-1">
      <div>
        <h1 className={`${beVietnamPro.variable} font-title text-2xl md:text-3xl tracking-wide leading-normal`}>Owain Llewellyn<br />
          <span className="text-3xl md:text-5xl mt-2 block">Software Engineer &amp; Designer<span className="animate-blink">_</span></span>
        </h1>
        
        <p className={`${roboto.variable} font-body text-gray-500 mt-4 leading-relaxed`}>
          Passionate About Digital Technologies, Great Design & Clever Entrepreneurial Ideas.
        </p>
        
        <div className='mt-2 items-center text-gray-500 space-y-2'>
          <p className={`${roboto.variable} font-body`}>Building Software at Apple.</p> 
          <p className={`${roboto.variable} font-body`}>Austin, Texas.</p>
        </div>

        <div className='mt-24 text-xs text-black hover:text-gray-700 tracking-wide'>
          <ul className='flex items-center space-x-3'>
            <li>
              <Link href="https://www.linkedin.com/in/owainllewellyn/" target="_blank">Linkedin</Link>
            </li>
            <li>
              <Link href="http://github.com/owzzz" target="_blank">|&nbsp;&nbsp;&nbsp;Github</Link>
            </li>
            <li>
              <Link href="https://x.com/owzzz" target="_blank">|&nbsp;&nbsp;&nbsp;X</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}