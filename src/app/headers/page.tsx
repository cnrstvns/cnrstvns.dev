'use client';

import React, { useState } from 'react';

export default function Headers() {
  const [headers, setHeaders] = useState('');

  function format() {
    try {
      const formattedHeaders: Record<string, string> = {};

      headers
        .trim()
        .split('\n')
        .forEach((header) => {
          const [key, val] = header.split(':');
          const newKey = unescape(key.trim());
          formattedHeaders[newKey] = unescape(val.trim());
        });
      setHeaders(JSON.stringify(formattedHeaders, null, 2));
      // eslint-disable-next-line no-empty
    } catch (err) {}
  }

  return (
    <div className="flex flex-col items-center min-h-screen px-6 lg:px-32 text-white">
      <div className="m-auto">
        <div className="w-full space-y-3">
          <div className="font-semibold text-white text-4xl">Headers</div>
          <div className="text-base text-neutral-400">
            I wrote this to help myself turn chrome request headers into a JSON
            object. Hopefully it can help someone else, too.
          </div>
          <textarea
            value={headers}
            onChange={(e) => setHeaders(e.target.value)}
            className="text-neutral-300 border resize-none border-neutral-500 bg-transparent rounded focus:outline-none h-80 w-full p-2"
          />
        </div>
        <button
          className="mt-2 p-1.5 px-4 text-neutral-400 border border-neutral-500 rounded hover:bg-neutral-400 hover:text-black transition"
          type="button"
          onClick={() => format()}
        >
          Format
        </button>
      </div>
    </div>
  );
}
