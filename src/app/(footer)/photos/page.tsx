/* eslint-disable no-underscore-dangle */
import React from 'react';
import Link from 'next/link';

type Collection = {
  title: string;
  description: string;
  slug: string;
  url: string;
  timestamp: string;
};

const collections: Collection[] = [
  {
    title: 'Japan',
    description: 'Photos I took on my trip to Japan in 2023',
    slug: 'japan',
    url: '/photos/japan',
    timestamp: 'June 2023',
  },
  {
    title: 'Nature',
    description: 'Photos I took outside in various places',
    slug: 'nature',
    url: '/photos/nature',
    timestamp: '2022-2023',
  },
];

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={collection.url}
      className="mb-6 w-full flex flex-col space-y-2 pb-4 border-b border-neutral-500"
    >
      <div className="text-sm text-neutral-500">{collection.timestamp}</div>
      <div className="text-blue-300 text-xl font-semibold">
        {collection.title}
      </div>
      <div className="text-neutral-200">{collection.description}</div>
    </Link>
  );
}

export default function Collections() {
  return (
    <div className="flex flex-col pt-32 pb-10 min-h-screen px-6 lg:px-32 text-white">
      <div className="w-[36rem] mx-auto space-y-5">
        <div className="text-3xl font-semibold">Collections</div>
        {collections.map((c) => (
          <CollectionCard key={c.slug} collection={c} />
        ))}
      </div>
    </div>
  );
}
