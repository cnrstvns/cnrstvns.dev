'use client';

import { useLanyard } from 'use-lanyard';
import React from 'react';
import Link from 'next/link';
import { DISCORD_ID } from '@/constants/lanyard';

export default function Listening() {
  const { state, data } = useLanyard(DISCORD_ID);

  if (state !== 'loaded' || !data.spotify) return null;

  return (
    <div className="fixed bottom-0 text-white left-0 w-full bg-neutral-800 items-center flex px-6 py-4 md:py-3 space-x-2">
      <div className="bg-green-400 rounded-full h-2 w-2 inline-flex animate-pulse flex-shrink-0" />
      <div>
        <span className="font-light">Listening to: </span>
        <Link
          href={`https://open.spotify.com/track/${data.spotify.track_id}`}
          className="font-medium hover:underline"
        >
          {data.spotify.song}
        </Link>{' '}
        <span className="font-light">by </span>
        <span className="font-medium">{data.spotify.artist}</span>
      </div>
    </div>
  );
}
