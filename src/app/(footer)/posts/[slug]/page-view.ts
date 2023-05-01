'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function PageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') return;

    fetch(`/api/page-view?page=${pathname}`);
  }, [pathname]);

  return null;
}
