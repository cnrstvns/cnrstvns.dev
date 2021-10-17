import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/index.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta content="My personal website." name="description" />
        <meta content="connor stevens, connor, stevens" name="keywords" />
        <meta content="#90D4FC" name="theme-color" />
        <meta content="Connor Stevens - My personal website." property="og:title" />
        <meta content="Connor Stevens" property="og:site_name" />
        <meta content="My personal website." property="og:description" />
        <meta content="/images/logo.jpg" property="og:image" />
        <meta name="msapplication-TileColor" content="#90D4FC" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
