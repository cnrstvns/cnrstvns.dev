/* eslint-disable consistent-return,react/no-danger,@typescript-eslint/no-non-null-assertion */
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';

type Params = {
  params: { post: string };
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.path,
  }));
}

export function generateMetadata({
  params: { post: postId },
}: Params): Metadata | undefined {
  const post = allPosts.find((p) => p.path === postId);

  if (!post) {
    return;
  }

  const { title } = post;

  return {
    title: `${title} - Connor Stevens`,
    openGraph: {
      title: `${title} - Connor Stevens`,
      type: 'article',
      url: `https://cnrstvns.dev/posts/${postId}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
    },
  };
}

export default function Post({ params: { post: postId } }: Params) {
  const post = allPosts.find((p) => p.path === postId);

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex flex-col max-w-4xl mx-auto pt-32 pb-10 min-h-screen px-6 lg:px-32 text-white">
      <div className="flex flex-col items-start space-y-5">
        <div>
          <Link
            href="/posts"
            className="text-center text-neutral-400 text-sm font-medium uppercase"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
            go back
          </Link>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-neutral-500">
            {dayjs(post.createdAt).format('MMMM D, YYYY')}
          </time>
        </div>

        <div
          className="text-white space-y-4 prose prose-invert"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />

        <div className="w-full border-t border-neutral-500 py-4 text-neutral-500">
          Thanks for reading. If you enjoyed this post, check back at a later
          date for more new content.
        </div>
      </div>
    </div>
  );
}
