import { NextRequest, NextResponse } from 'next/server';
import kv from '@vercel/kv';

export async function GET(req: NextRequest) {
  const page = new URL(req.url).searchParams.get('page');

  if (!page)
    return NextResponse.json({
      error: 'Invalid page parameter',
      type: 'invalid_parameter',
    });

  kv.incr(page);

  return NextResponse.json({ success: true });
}
