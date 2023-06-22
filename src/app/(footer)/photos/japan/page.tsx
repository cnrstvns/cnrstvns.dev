import React from 'react';
import Image from 'next/image';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Row({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col md:flex-row w-full md:rounded-sm overflow-hidden space-y-4 md:space-y-0">
      <Image
        className="md:w-1/3 rounded-sm md:rounded-none"
        src={`/images/photos/japan/IMG_${images[0]}.jpeg`}
        width={1152}
        height={150}
        alt=""
      />
      <Image
        className="md:w-1/3 rounded-sm md:rounded-none"
        src={`/images/photos/japan/IMG_${images[1]}.jpeg`}
        width={1152}
        height={150}
        alt=""
      />
      <Image
        className="md:w-1/3 rounded-sm md:rounded-none"
        src={`/images/photos/japan/IMG_${images[2]}.jpeg`}
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
            src="/images/photos/japan/IMG_5991.jpeg"
            width={1152}
            height={150}
            alt=""
            priority
          />

          <Row images={['6062', '6163', '6116']} />
          <Row images={['5941', '5946', '6131']} />

          <Row images={['6117', '6081', '6049']} />
          <Row images={['5980', '5993', '6039']} />

          <Row images={['6009', '5931', '5883']} />
          <Row images={['6012', '5985', '5929']} />

          <Row images={['5888', '5959', '4380']} />
          <Row images={['5926', '5933', '5953']} />
        </div>

        <div className="mt-16 text-center w-full text-neutral-300">
          Shot on iPhone <FontAwesomeIcon icon={faApple} />
        </div>
      </div>
    </div>
  );
}
