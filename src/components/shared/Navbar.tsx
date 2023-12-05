'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Link } from './Link';

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex mx-auto items-center justify-between max-w-lg py-4 px-6 md:px-0">
      <div className="flex items-center text-white mr-6">
        <Link href="/hype">🛩️</Link>
      </div>
      <div className="flex flex-row text-white mt-4 lg:mt-0 space-x-2 md:space-x-3">
        <Link size="sm" href="/" active={pathname === '/'}>
          Home
        </Link>
        <Link size="sm" href="/resume" active={pathname === '/resume'}>
          Resume
        </Link>
        <Link size="sm" href="/photos" active={pathname?.includes('/photos')}>
          Photos
        </Link>
        <Link size="sm" href="/posts" active={pathname?.includes('/posts')}>
          Posts
        </Link>
      </div>
    </div>
  );
}
