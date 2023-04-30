import Image from 'next/image';
import React from 'react';
import { Listening } from '@/components/shared/Listening';
import { Link } from '@/components/shared/Link';

export default function Index() {
  return (
    <>
      <div className="flex flex-col p-10 lg:flex-row min-h-screen items-start md:items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10">
        <Image
          className="rounded-md md:rounded"
          src="/images/me.webp"
          alt="me"
          width={224}
          height={224}
        />
        <div className="flex flex-col justify-start">
          <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Connor Stevens
          </div>
          <div className="text-neutral-400 mt-1">
            Student, Software Engineer
          </div>
          <div className="text-neutral-100 max-w-xl mt-4">
            Third year Computing and Information Technologies student at RIT
            with a passion for building software.
          </div>
          <div className="mt-4 space-x-2 lg:space-x-3 flex flex-wrap">
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
      <Listening />
    </>
  );
}
