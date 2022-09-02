import React from 'react';
import Head from '../components/Head';
import Link from '../components/Link';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Head title="About — Connor Stevens" />
      <Navbar />
      <div className="flex flex-col p-10 lg:flex-row min-h-screen bg-black items-start md:items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10">
        <img className="max-h-[14rem] rounded-lg" src="/images/me.webp" alt="me" />
        <div className="flex flex-col">
          <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">Connor Stevens</div>
          <div className="text-gray-400 mt-1">
            Software Engineer / Student at RIT
          </div>
          <div className="text-gray-100 max-w-xl mt-4">
            Third year Computing and Information Technologies student at RIT with a passion for building software.
          </div>
          <div className="mt-4 space-x-2 lg:space-x-3 flex flex-wrap">
            <Link size="sm" href="https://github.com/cnrstvns" external>
              git
            </Link>
            <Link size="sm" href="https://linkedin.com/in/cnrstvns" external>
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
