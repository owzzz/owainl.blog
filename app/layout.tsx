import './globals.css';
import Script from 'next/script';
import Footer from './footer';
import MainNav from '../components/main-nav';
import React from 'react';

export type ChildNode = {
  children: React.ReactNode
}

export default function Layout({ children }: ChildNode) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center h-screen">
        <MainNav />
        
        <main className='flex-1 flex flex-col items-center justify-center w-full px-6 space-y-6 pb-6 mt-4 md:mt-8'>
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