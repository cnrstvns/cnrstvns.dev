import React from 'react';
import Head from '../components/Head';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head title="Connor Stevens" />
      <div className="pt-20 min-h-screen px-6 lg:px-32 bg-white text-black dark:bg-black dark:text-white">
        <div>
          <div className="text-gray-200 text-xl">Hey, I'm</div>
          <div className="font-bold text-8xl">Connor Stevens</div>
          <div>I'm a Software Engineer at <a className="text-blue-400 hover:underline" href="https://hyper.co">Hyper</a></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
