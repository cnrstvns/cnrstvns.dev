import React from 'react';

export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta content="width=device-width,initial-scale=1;" name="viewport" />
      <meta content="My personal website." name="description" />
      <meta content="connor stevens, connor, stevens" name="keywords" />
      <meta content="#171717" name="theme-color" />
      <meta
        content="Connor Stevens - My personal website."
        property="og:title"
      />
      <meta content="Connor Stevens" property="og:site_name" />
      <meta content="My personal website." property="og:description" />
      <meta content="/images/me.webp" property="og:image" />
      <meta name="msapplication-TileColor" content="#171717" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Connor Stevens</title>
    </>
  );
}
