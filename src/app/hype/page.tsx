import React from 'react';

export default function Hype() {
  return (
    <div className="flex flex-col pt-32 items-center min-h-screen px-6 lg:px-32 text-white m-auto">
      <div className="text-base text-neutral-400 max-w-md pb-8">
        If you've made it here, you've found something I've hidden on this site.
        It's a video my friend that we call "Bird" made for me. It encapsulates
        some of my favorite movies (like Back to the Future), various clips, and
        a genre of music I used to listen to more often than not. Enjoy.
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
