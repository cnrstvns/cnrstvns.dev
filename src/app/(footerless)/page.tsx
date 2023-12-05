import React from 'react';
import { Link } from '@/components/shared/Link';

export default function Index() {
  return (
    <div className="flex max-w-lg mx-auto items-center flex-col py-10">
      <div className="flex flex-col justify-start">
        <div className="text-2xl font-serif">Connor Stevens</div>
        <div className="mt-4">
          Hi. I&apos;m Connor, a fourth-year Computing and Information
          Technologies student at Rochester Institute of Technology.
        </div>
        <p className="mt-4">
          For as long as I can remember, technology has been a passion of mine.
          Growing up, I was always taking things apart to learn how they worked
          and, most of the time, putting them back together.
        </p>
        <p className="mt-4">
          In my free time, you might find me writing code, teaching my friends
          how to write code, or spending time in X-Plane. If you&apos;re looking
          to get in touch with me, my contact details are below.
        </p>
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
  );
}
