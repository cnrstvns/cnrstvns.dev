/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';

import Head from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head title="Connor Stevens" />
      <Nav />
      <main className="flex flex-col pt-20 items-center min-h-screen px-6 lg:px-32 bg-white text-black dark:bg-black dark:text-white">
        <div className="m-auto">
          <video
            muted
            autoPlay
            controls
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nofullscreen nodownload"
            src="/videos/connor.mp4"
            style={{ maxHeight: 500 }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
