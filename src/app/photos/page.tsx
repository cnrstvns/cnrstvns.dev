/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Row({ images }: { images: string[] }) {
  return (
    <div className="flex w-full rounded overflow-hidden">
      <img
        className="w-1/3"
        src={`/images/photos/IMG_${images[0]}.jpeg`}
        alt=""
      />
      <img
        className="w-1/3"
        src={`/images/photos/IMG_${images[1]}.jpeg`}
        alt=""
      />
      <img
        className="w-1/3"
        src={`/images/photos/IMG_${images[2]}.jpeg`}
        alt=""
      />
    </div>
  );
}

export default function Photos() {
  return (
    <div className="flex flex-col pt-40 pb-20 min-h-screen px-6 lg:px-32 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          I have one favorite place on earth. And I take a lot of photos there.
          Enjoy.
        </div>

        <div className="flex-col space-y-4">
          <img
            className="rounded overflow-hidden"
            src="/images/photos/IMG_2732.jpeg"
            alt=""
          />
          <img
            className="rounded overflow-hidden"
            src="/images/photos/IMG_2425.jpeg"
            alt=""
          />
          <Row images={['2431', '2203', '2190']} />
          <Row images={['2552', '2197', '2131']} />
          <Row images={['3086', '2731', '2412']} />
          <Row images={['3080', '2148', '2806']} />
        </div>
      </div>
    </div>
  );
}
