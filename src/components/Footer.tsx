import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import Link from './Link';

export default function Footer() {
  return (
    <div className="border-t border-neutral-700 text-2xl py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 mb-6 md:mb-0">
            <div className="text-white font-medium mb-2">Connor Stevens</div>
            <div className="text-base text-neutral-400 mb-2">
              <FontAwesomeIcon
                size="lg"
                style={{ marginRight: '13px' }}
                icon={faDiscord}
              />
              cnrstvns#0001
            </div>
            <div className="text-base text-neutral-400 mb-2">
              <a href="mailto:conmail1224@gmail.com">
                <FontAwesomeIcon
                  size="lg"
                  style={{ marginRight: '13px' }}
                  icon={faEnvelope}
                />
                conmail1224@gmail.com
              </a>
            </div>
            <div className="text-base text-neutral-500">
              © {new Date().getFullYear()} — All rights reserved.
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
              <Link href="https://github.com/cnrstvns" external>
                Github
              </Link>
              <Link href="https://twitter.com/cnrstvns" external>
                Twitter
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
