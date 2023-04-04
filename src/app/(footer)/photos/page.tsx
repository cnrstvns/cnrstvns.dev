import React from 'react';
import Image from 'next/image';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Row({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col md:flex-row w-full md:rounded-sm overflow-hidden space-y-4 md:space-y-0">
      <Image
        className="md:w-1/3 rounded-sm md:rounded-none"
        src={`/images/photos/IMG_${images[0]}.jpeg`}
        width={1152}
        height={150}
        alt=""
      />
      <Image
        className="md:w-1/3 rounded-sm md:rounded-none"
        src={`/images/photos/IMG_${images[1]}.jpeg`}
        width={1152}
        height={150}
        alt=""
      />
      <Image
        className="md:w-1/3 rounded-sm md:rounded-none"
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
        <div className="flex-col space-y-4">
          <Image
            className="rounded-sm overflow-hidden"
            src="/images/photos/IMG_2732.jpeg"
            width={1152}
            height={150}
            alt=""
          />
          <Image
            className="rounded-sm overflow-hidden"
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

        <div className="mt-16 text-center w-full text-neutral-300">
          Shot on iPhone
          <FontAwesomeIcon icon={faApple} />
        </div>
      </div>
    </div>
  );
}
