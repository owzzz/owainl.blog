import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Owain Llewellyn - Software Engineer / Designer, Passionate About Digital Technologies, Great Design & Clever Entrepreneurial Ideas. Austin TX.</title>
        <meta name="description" content="Owain Llewellyn - Software Engineer / Designer, Passionate About Digital Technologies, Great Design & Clever Entrepreneurial Ideas. Austin TX." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-screen">
        <header className="bg-white px-4 flex items-center justify-between h-[60px] flex-none">
          <Link className="text-sm text-black font-almarai tracking-wide" href="/">OWAINL.co</Link>
        </header>
        <section className="flex justify-center items-center w-full flex-1">
          <div>
            <h1 className="text-4xl font-almarai tracking-wide leading-normal">Owain Llewellyn_<br /><span className="text-5xl">Software Engineer &amp; Designer.</span></h1>
            <p className="font-light text-gray-500 mt-4 leading-relaxed">Passionate About Digital Technologies, Great Design & Clever Entrepreneurial Ideas.</p>
            <div className="flex mt-2 items-center text-gray-500">
              <p>Building Things At</p> 
              <Image src="/apple.svg" className="ml-1.5 relative bottom-0.5" alt="Apple Logo" width={20} height={20} />
            </div>

            <p className="text-xs text-black mt-6">Website development in progress...</p>
          </div>
        </section>
        <footer className="flex-none flex px-4 justify-end items-center h-[50px] bg-gray-100">
          <span className="text-xs text-gray-600">V0.1</span>
        </footer>
      </main>
    </div>
  );
}
