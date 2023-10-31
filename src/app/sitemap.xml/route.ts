import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';

const baseUrl = 'https://cnrstvns.dev';

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
      </url>
      <url>
        <loc>${baseUrl}/resume</loc>
      </url>
      <url>
        <loc>${baseUrl}/photos</loc>
      </url>
      <url>
        <loc>${baseUrl}/posts</loc>
      </url>
      ${posts
        .map(({ path }) => {
          return `
          <url>
              <loc>${`${baseUrl}/posts/${path}`}</loc>
          </url>
        `;
        })
        .join('')}
    </urlset>
  `;
}

export function GET() {
  const body = generateSiteMap(
    allPosts.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1)),
  );

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
