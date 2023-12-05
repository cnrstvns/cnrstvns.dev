'use client';

import React from 'react';

export function Footer() {
  return (
    <div className="max-w-lg flex flex-col justify-between mx-auto py-4 px-6 md:px-0">
      <div className="text-sm text-neutral-700 mb-4">
        &quot;When they say it can&apos;t be done, that&apos;s when I get
        started.&quot; - A.P.S.
      </div>
      <div className="text-sm text-neutral-500">
        Copyright {new Date().getFullYear()} — All rights reserved.
      </div>
    </div>
  );
}
