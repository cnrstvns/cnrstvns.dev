import Image from 'next/image';

export function Row({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col md:flex-row w-full md:rounded-sm overflow-hidden space-y-4 md:space-y-0">
      <Image
        className="md:w-1/3 rounded-sm md:rounded-none"
        src={`/images/photos/nature/IMG_${images[0]}.jpeg`}
        width={1152}
        height={150}
        alt=""
      />
      <Image
        className="md:w-1/3 rounded-sm md:rounded-none"
        src={`/images/photos/nature/IMG_${images[1]}.jpeg`}
        width={1152}
        height={150}
        alt=""
      />
      <Image
        className="md:w-1/3 rounded-sm md:rounded-none"
        src={`/images/photos/nature/IMG_${images[2]}.jpeg`}
        width={1152}
        height={150}
        alt=""
      />
    </div>
  );
}
