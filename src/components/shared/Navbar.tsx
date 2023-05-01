'use client';

import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Link } from './Link';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => setOpen(false), []);

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap border-b border-neutral-700 p-6 bg-neutral-900">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/hype">
          <span className="text-white font-medium text-xl tracking-tight cursor-pointer">
            Connor Stevens
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {open && (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            )}
            {!open && (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={clsx(
          'w-full block flex-grow lg:flex lg:items-center lg:w-auto',
          { hidden: !open },
        )}
      >
        <div className="text-sm flex flex-col lg:flex-row lg:flex-grow text-white mt-4 lg:mt-0 space-y-1 lg:space-y-0 space-x-0 lg:space-x-3">
          <Link onClick={handleClick} href="/" active={pathname === '/'}>
            Home
          </Link>
          <Link
            onClick={handleClick}
            href="/resume"
            active={pathname === '/resume'}
          >
            Resume
          </Link>
          <Link
            onClick={handleClick}
            href="/photos"
            active={pathname === '/photos'}
          >
            Photos
          </Link>
          <Link
            onClick={handleClick}
            href="/posts"
            active={pathname.includes('/posts')}
          >
            Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
