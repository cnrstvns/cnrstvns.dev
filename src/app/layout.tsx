import React, { ReactNode } from 'react';
import { type Metadata } from 'next';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Connor Stevens',
  applicationName: 'Connor Stevens',
  description: 'My personal website.',
  keywords: ['connor stevens', 'connor', 'stevens'],
  themeColor: '#171717',
  openGraph: {
    title: 'Connor Stevens - My personal website.',
    siteName: 'Connor Stevens',
    description: 'My personal website.',
    images: ['/images/me.webp'],
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <body className="bg-neutral-900">{children}</body>

      {/* Footer */}
      <Footer />
    </html>
  );
}
