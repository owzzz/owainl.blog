import './globals.css';

import Head from 'next/head';
import Script from 'next/script';
import Footer from './footer';
import Header from './header';

export type ChildNode = {
  children: React.ReactNode
}

export default function Layout({ children }: ChildNode) {
  return (
    <html lang="en">
      <Head>
        <title>Owain Llewellyn - Software Engineer / Designer, Passionate About Digital Technologies, Great Design & Clever Entrepreneurial Ideas. Austin TX.</title>
        <meta name="description" content="Owain Llewellyn - Software Engineer / Designer, Passionate About Digital Technologies, Great Design & Clever Entrepreneurial Ideas. Austin TX." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex flex-col h-screen">

        <Header />
        <main className='flex-1 flex items-center justify-center'>
          {children}
        </main>
        <Footer />

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
      </body>
    </html>
  );
}