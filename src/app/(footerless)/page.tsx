import React from 'react';
import { Link } from '@/components/shared/link';

export default function Index() {
  return (
    <div className="flex max-w-lg mx-auto items-center flex-col py-10 px-6 md:px-0">
      <div className="flex flex-col justify-start">
        <div className="text-2xl font-serif">Connor Stevens</div>
        <div className="mt-4">
          Hi. I&apos;m Connor, a Software Engineer at{' '}
          <span className="underline">
            <a
              href="https://dash.whop.com/?a=connorwh0p"
              target="_blank"
              rel="noreferrer"
            >
              Whop
            </a>
          </span>
        </div>
        <p className="mt-4">
          I like building cool things. Especially those that help people earn
          money.
        </p>
        <div className="mt-4 space-x-2 lg:space-x-3 flex flex-wrap">
          <Link size="sm" href="https://whop.com/hub/connor" external>
            join my whop
          </Link>
          <Link size="sm" href="https://x.com/cnrstvns" external>
            x
          </Link>
          <Link size="sm" href="https://github.com/cnrstvns" external>
            github
          </Link>
          <Link size="sm" href="https://linkedin.com/in/cnrstvns" external>
            linkedin
          </Link>
          <Link size="sm" href="mailto:conmail1224@gmail.com" external>
            email
          </Link>
        </div>
      </div>
    </div>
  );
}
