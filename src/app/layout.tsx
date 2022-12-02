import React, { ReactNode } from 'react';
import { Inter } from '@next/font/google';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

const inter = Inter({ weight: ['300', '400', '500'], subsets: ['latin'] });

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html className={inter.className} lang="en">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <body className="bg-neutral-900">{children}</body>

      {/* Footer */}
      <Footer />
    </html>
  );
}
