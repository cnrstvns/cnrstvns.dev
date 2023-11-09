/* eslint-disable consistent-return,react/no-danger,@typescript-eslint/no-non-null-assertion */
import { Link } from '@/components/shared/Link';
import NextLink from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import { MDX } from './mdx';

type Params = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.path,
  }));
}

export function generateMetadata({
  params: { slug },
}: Params): Metadata | undefined {
  const post = allPosts.find((p) => p.path === slug);

  if (!post) {
    return;
  }

  const { title, description } = post;

  return {
    title: `${title} - Connor Stevens`,
    description,
    openGraph: {
      title: `${title} - Connor Stevens`,
      description,
      type: 'article',
      url: `https://cnrstvns.dev/posts/${slug}`,
      images: [`https://cnrstvns.dev/api/og-image?slug=${slug}`],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@cnrstvns',
      images: [`https://cnrstvns.dev/api/og-image?slug=${slug}`],
    },
    metadataBase:
      process.env.NODE_ENV === 'production'
        ? new URL('https://cnrstvns.dev')
        : new URL('http://localhost:3000'),
  };
}

export default function Post({ params: { slug } }: Params) {
  const post = allPosts.find((p) => p.path === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex flex-col max-w-4xl mx-auto pt-32 pb-10 min-h-screen px-6 lg:px-32 text-white">
      <div className="flex flex-col items-start space-y-5">
        <div>
          <NextLink
            href="/posts"
            className="text-center text-neutral-400 hover:text-neutral-300 transition text-sm font-medium uppercase"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            go back
          </NextLink>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="text-neutral-400">{post.description}</div>
          <time dateTime={post.date} className="text-sm text-neutral-500">
            {dayjs(post.createdAt).format('MMMM D, YYYY')}
            {' • '}
            {post.readingTime}
          </time>
        </div>

        <article className="text-white space-y-4 w-full md:w-[unset] prose prose-invert">
          <MDX code={post.body.code} />
        </article>

        <div className="w-full border-t border-neutral-500 py-4 text-neutral-500">
          Thanks for reading. If you enjoyed this post, check back at a later
          date for more new content. If you&apos;re interested in how I built
          this blog, check out the post about it{' '}
          <Link href="/posts/05-01-23-hello-world" color>
            here.
          </Link>
        </div>
      </div>
    </div>
  );
}
