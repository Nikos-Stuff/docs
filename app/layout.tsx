import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children} <SpeedInsights/> </RootProvider>
      </body>
    </html>
  );
}
