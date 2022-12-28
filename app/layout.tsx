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
      <body className="flex flex-col h-screen">
        <MainNav />
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