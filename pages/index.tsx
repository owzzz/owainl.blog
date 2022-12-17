import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Roboto, Almarai } from '@next/font/google';

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-roboto',
});

const almarai = Almarai({
  weight: '800',
  subsets: ['arabic'],
  variable: '--font-almarai',
});


export default function Home() {
  return (
    <div>
      <Head>
        <title>Owain Llewellyn - Software Engineer / Designer, Passionate About Digital Technologies, Great Design & Clever Entrepreneurial Ideas. Austin TX.</title>
        <meta name="description" content="Owain Llewellyn - Software Engineer / Designer, Passionate About Digital Technologies, Great Design & Clever Entrepreneurial Ideas. Austin TX." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-screen">
        <header className={`${almarai.variable} bg-white px-6 md:px-4 flex items-center justify-between h-[60px] flex-none`}>
          <Link className="text-sm text-black tracking-wide" href="/">OWAINL.co</Link>
          <Link className="text-xs hover:underline" href="mailto:owain.llew@gmail.com?subject=Website%20enquiry">Contact</Link>
        </header>
        <section className="flex justify-center items-center w-full flex-1">
          <div className="px-6 md:px-4">
            <h1 className={`${almarai.variable} text-2xl md:text-3xl tracking-wide leading-normal`}>Owain Llewellyn<br /><span className="text-3xl md:text-5xl mt-2 block">Software Engineer &amp; Designer_</span></h1>
            <p className={`${roboto.variable} text-gray-500 mt-4 leading-relaxed`}>Passionate About Digital Technologies, Great Design & Clever Entrepreneurial Ideas.</p>
            <div className={`flex mt-2 items-center text-gray-500`}>
              <p className={`${roboto.variable}`}>Building Things At</p> 
              <Image src="/apple.svg" className="ml-2 relative bottom-0.5" alt="Apple Logo" width={20} height={20} />
            </div>

            <p className={`${roboto.variable} text-xs text-black mt-6`}>Website development in progress...</p>
          </div>
        </section>
        <footer className="flex-none flex px-6 md:px-4 justify-end items-center h-[50px] bg-gray-100">
          <span className="text-xs text-gray-600">V0.1</span>
        </footer>
      </main>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E7YNXMSZ51"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E7YNXMSZ51');
        `}
      </Script>
    </div>
  );
}
