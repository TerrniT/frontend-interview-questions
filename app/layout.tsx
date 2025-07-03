import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Roboto } from 'next/font/google';
import type { ReactNode } from 'react';

const font = Roboto({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
