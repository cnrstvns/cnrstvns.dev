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
      <div className="text-black text-xl font-semibold">{collection.title}</div>
      <div className="text-neutral-500">{collection.description}</div>
    </Link>
  );
}

export default function Collections() {
  return (
    <div className="flex flex-col py-10 px-6 md:px-0 max-w-lg mx-auto">
      <div className="space-y-5">
        <div className="text-2xl font-semibold">Collections</div>
        {collections.map((c) => (
          <CollectionCard key={c.slug} collection={c} />
        ))}
      </div>
    </div>
  );
}
