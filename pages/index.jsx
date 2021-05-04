import * as React from 'react';

import Head from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head title="Connor Stevens" />
      <Nav />
      <main className="flex flex-col pt-32 items-center min-h-screen px-6 lg:px-32 bg-white text-black dark:bg-black dark:text-white">
        <div className="text">welcome to my site.</div>
        <div className="text">some things will be here eventually.</div>
        <div className="text">check the other pages if you want.</div>
      </main>
      <Footer />
    </>
  );
}
