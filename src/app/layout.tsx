import React, { type PropsWithChildren } from 'react';
import { type Metadata, type Viewport } from 'next';
import { Navbar } from '@/components/shared/Navbar';
import { Analytics } from '@vercel/analytics/react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Connor Stevens',
  applicationName: 'Connor Stevens',
  description: 'My personal website.',
  keywords: ['connor stevens', 'connor', 'stevens'],
  openGraph: {
    title: 'Connor Stevens - My personal website.',
    siteName: 'Connor Stevens',
    description: 'My personal website.',
    images: ['/images/me.webp'],
  },
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL('https://cnrstvns.dev')
      : new URL('http://localhost:3000'),
};

export const viewport: Viewport = {
  themeColor: '#171717',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      {/* Main content */}
      <body>
        {/* Navigation */}
        <Navbar />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
