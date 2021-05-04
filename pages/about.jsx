import * as React from 'react';

import Head from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head title="About | Connor Stevens" />
      <Nav />
      <main className="flex flex-col pt-32 min-h-screen px-6 lg:px-32 bg-white text-black dark:bg-black dark:text-white">
        <div className="max-w-5xl mx-auto">
          <div className="font-semibold text-4xl pb-8">About</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
