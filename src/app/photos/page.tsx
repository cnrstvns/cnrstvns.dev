import React from 'react';
import Image from 'next/image';

function Row({ images }: { images: string[] }) {
  return (
    <div className="flex w-full rounded overflow-hidden">
      <Image
        className="w-1/3"
        src={`/images/photos/IMG_${images[0]}.jpeg`}
        width={1152}
        height={150}
        alt=""
      />
      <Image
        className="w-1/3"
        src={`/images/photos/IMG_${images[1]}.jpeg`}
        width={1152}
        height={150}
        alt=""
      />
      <Image
        className="w-1/3"
        src={`/images/photos/IMG_${images[2]}.jpeg`}
        width={1152}
        height={150}
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
          <Image
            className="rounded overflow-hidden"
            src="/images/photos/IMG_2732.jpeg"
            width={1152}
            height={150}
            alt=""
          />
          <Image
            className="rounded overflow-hidden"
            src="/images/photos/IMG_2425.jpeg"
            width={1152}
            height={150}
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
