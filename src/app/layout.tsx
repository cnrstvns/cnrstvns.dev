import React, { ReactNode } from 'react';
import Head from 'next/head';
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
      <Head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta content="My personal website." name="description" />
        <meta content="connor stevens, connor, stevens" name="keywords" />
        <meta content="#90D4FC" name="theme-color" />
        <meta
          content="Connor Stevens - My personal website."
          property="og:title"
        />
        <meta content="Connor Stevens" property="og:site_name" />
        <meta content="My personal website." property="og:description" />
        <meta content="/images/me.webp" property="og:image" />
        <meta name="msapplication-TileColor" content="#90D4FC" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <body className="bg-neutral-900">{children}</body>

      {/* Footer */}
      <Footer />
    </html>
  );
}
