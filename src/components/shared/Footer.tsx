import React from 'react';
import { Link } from './Link';

export function Footer() {
  return (
    <div className="border-t border-neutral-700 text-2xl py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 mb-6 md:mb-0">
            <div className="text-white font-medium mb-2">Connor Stevens</div>
            <div className="text-base text-neutral-400 mb-2 w-96">
              &quot;When they say it can&apos;t be done, that&apos;s when I get
              started.&quot; - A.P.S.
            </div>
            <div className="text-base text-neutral-500">
              Copyright {new Date().getFullYear()} — All rights reserved.
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">
              Businesses
            </h3>
            <ul className="mt-4 space-y-2 flex flex-col">
              <Link href="https://eqpt-site.vercel.app" external>
                EQPT Tools
              </Link>
              <Link href="https://soletech.io" external>
                Sole Tech
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">
              Links
            </h3>
            <ul className="mt-4 space-y-2 flex flex-col">
              <Link href="mailto:conmail1224@gmail.com" external>
                Email
              </Link>
              <Link href="https://github.com/cnrstvns" external>
                Github
              </Link>
              <Link href="https://linkedin.com/in/cnrstvns" external>
                LinkedIn
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
