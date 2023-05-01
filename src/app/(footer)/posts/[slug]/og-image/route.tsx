/* eslint-disable react/no-unknown-property */
import { ImageResponse, NextRequest } from 'next/server';
import { allPosts } from '@/../.contentlayer/generated';
import kv from '@vercel/kv';
import dayjs from 'dayjs';

export async function GET(req: NextRequest) {
  const page = req.nextUrl.pathname.replace('/og-image', '');
  const slug = page.replace('/posts/', '');

  const post = allPosts.find((p) => p.path === slug);
  const viewCount = await kv
    .get(page)
    .then((response) => parseInt(response as string, 10));

  if (!post) return new Response(null, { status: 404 });

  return new ImageResponse(
    (
      <div tw="flex w-[1200px] h-[600px]">
        <div tw="flex flex-col text-white w-full h-full px-24 justify-center bg-neutral-900">
          <div tw="flex text-8xl font-bold mb-4">{post.title}</div>
          <div tw="flex text-4xl text-neutral-300 mb-4">{post.description}</div>
          <div tw="flex text-4xl text-neutral-400 mb-4">{viewCount} views</div>
          <div tw="flex text-3xl text-neutral-200 mb-4">
            {dayjs(post.createdAt).format('MMMM D, YYYY')}
            {' • '}
            {post.readingTime}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
