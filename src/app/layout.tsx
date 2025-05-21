import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import PageTransition from './PageTransition'
import { baseUrl, createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: {
    template: '%s | Niko`s Stuff',
    default: 'Docs - Niko`s Stuff',
  },
  description: 'Random docs for random stuff',
});

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
        >
        <PageTransition>
         {children}
        </PageTransition>
        </RootProvider>
      </body>
    </html>
  );
}

