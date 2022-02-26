import React from 'react';
import Head from '../components/Head';
import Link from '../components/Link';

export default function Index() {
  return (
    <>
      <Head title="Connor Stevens" />
      <div className="flex flex-col p-10 lg:flex-row min-h-screen bg-black items-start md:items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10">
        <img className="max-h-[14rem] md:max-h-[18rem] rounded-lg" src="/images/me.png" alt="me" />
        <div className="flex flex-col">
          <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">Connor Stevens</div>
          <div className="text-gray-400 mt-1">
            Founding Engineer at <Link href="https://hyper.co" color>Hyper</Link>
          </div>
          <div className="text-gray-100 max-w-xl mt-4">
            Before Hyper, I was studying Computing and Information Technologies at <Link href="https://rit.edu" color>RIT</Link>.
            I was writing code for 8 hours a day, studying, and managing 2 businesses.
            After 2 years, I put school on pause and moved to Palo Alto to be Hyper's first employee.
          </div>
          <div className="mt-4 space-x-2 lg:space-x-3 flex flex-wrap">
            <Link size="sm" href="https://github.com/connorstevens" external>
              git
            </Link>
            <Link size="sm" href="https://linkedin.com/in/connorstevens26" external>
              lnkd.in
            </Link>
            <Link size="sm" href="https://twitter.com/cnrstvns" external>
              twttr
            </Link>
            <Link size="sm" href="mailto:connor@hyper.co" external>
              mail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
