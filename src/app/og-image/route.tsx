/* eslint-disable react/no-unknown-property */
import { ImageResponse } from 'next/og';
import { allPosts } from '@/../.contentlayer/generated';
import dayjs from 'dayjs';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  runtime: 'edge',
};

function isString(str: unknown): str is string {
  return typeof str === 'string';
}

const openSansRegular = fetch(
  new URL('../../styles/fonts/OpenSans-Regular.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

const openSansMedium = fetch(
  new URL('../../styles/fonts/OpenSans-SemiBold.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

export default async function generateOGImage(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const [openSansRegularData, openSansMediumData] = await Promise.all([
    openSansRegular,
    openSansMedium,
  ]);

  if (!req.url) return res.status(404).end();

  const slug = new URL(req.url).searchParams.get('slug');

  if (!isString(slug)) {
    return res.status(404).end();
  }

  const post = allPosts.find((p) => p.path === slug);

  if (!post) return new Response('Not found', { status: 404 });

  return new ImageResponse(
    (
      <div
        tw="flex w-[1200px] h-[600px] overflow-hidden"
        style={{ fontFamily: 'Open Sans Regular' }}
      >
        <div tw="flex flex-col text-white w-full h-full px-24 justify-center bg-neutral-900">
          <div
            tw="flex text-8xl font-bold mb-4"
            style={{ fontFamily: 'Open Sans Medium' }}
          >
            {post.title}
          </div>
          <div tw="flex text-4xl text-neutral-300 mb-4">{post.description}</div>
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
      fonts: [
        {
          name: 'Open Sans Regular',
          data: openSansRegularData,
        },
        {
          name: 'Open Sans Medium',
          data: openSansMediumData,
        },
      ],
    },
  );
}
