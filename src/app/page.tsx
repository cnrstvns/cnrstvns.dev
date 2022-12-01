import React from 'react';

export default function Index() {
  return (
    <div className="flex flex-col pt-56 items-center min-h-screen px-6 lg:px-32 text-white m-auto">
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
