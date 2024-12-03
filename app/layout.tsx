import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import PageTransition from './PageTransition'

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider><PageTransition>{children}</PageTransition></RootProvider>
      </body>
    </html>
  );
}
