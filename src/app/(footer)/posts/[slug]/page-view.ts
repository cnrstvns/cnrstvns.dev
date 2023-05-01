'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export function PageView() {
  const params = useParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') return;

    fetch(`/api/page-view?page=${params?.slug}`);
  }, [params]);

  return null;
}
