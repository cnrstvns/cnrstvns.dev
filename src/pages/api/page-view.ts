import { NextResponse } from 'next/server';
import kv from '@vercel/kv';
import type { NextApiRequest } from 'next';
import { allPosts } from 'contentlayer/generated';

export const config = {
  runtime: 'edge',
};

function isString(str: unknown): str is string {
  return typeof str === 'string';
}

export default async function pageView(req: NextApiRequest) {
  if (!req.url)
    return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const page = new URL(req.url).searchParams.get('page');

  if (!isString(page)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  if (!page)
    return NextResponse.json({
      error: 'Invalid page parameter',
      type: 'invalid_parameter',
    });

  if (!allPosts.find((p) => p.path === page))
    return NextResponse.json({
      error: 'Invalid page parameter',
      type: 'invalid_parameter',
    });

  kv.incr(page);

  return NextResponse.json({ success: true });
}
