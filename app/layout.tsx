import './globals.css';
import { Analytics } from '@vercel/analytics/react';
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
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}