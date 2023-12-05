import React from 'react';

export default function Hype() {
  return (
    <div className="flex flex-col pt-32 items-center px-6 lg:px-32 text-white m-auto">
      <div className="text-base text-neutral-500 max-w-md pb-8">
        If you&apos;ve made it here, you&apos;ve found something I&apos;ve
        hidden on this site. Enjoy.
      </div>
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
  );
}
