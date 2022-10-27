import React from 'react';
import Head from '../components/Head';

export default function Home() {
  return (
    <>
      <Head title="Connor Stevens" />
      <main className="flex flex-col pt-20 items-center min-h-screen px-6 lg:px-32 bg-black text-white">
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
    </>
  );
}
