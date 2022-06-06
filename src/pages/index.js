import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head title="Connor Stevens" />
      <Navbar />
      <main className="flex flex-col pt-20 items-center min-h-screen px-6 lg:px-32 bg-white text-black dark:bg-black dark:text-white">
        <div className="m-auto">
          <video
            muted
            autoPlay
            controls
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nofullscreen nodownload"
            src="/videos/index.mp4"
            style={{ maxHeight: 500 }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
