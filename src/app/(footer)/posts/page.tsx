/* eslint-disable no-underscore-dangle */
import React from 'react';
import { allPosts, type Post } from 'contentlayer/generated';
import Link from 'next/link';
import dayjs from 'dayjs';

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={post.url}
      className="mb-6 w-full flex flex-col space-y-2 pb-4 border-b border-neutral-500"
    >
      <time dateTime={post.date} className="text-sm text-neutral-500">
        {dayjs(post.createdAt).format('MMMM D, YYYY')}
        {' • '}
        {post.readingTime}
      </time>
      <div className="text-blue-300 text-xl font-medium">{post.title}</div>
      <div className="text-neutral-200">{post.description}</div>
    </Link>
  );
}

export default function Posts() {
  const posts = allPosts.sort((a, b) => {
    return new Date(a.date) > new Date(b.date) ? 1 : -1;
  });

  return (
    <div className="flex flex-col pt-32 pb-10 min-h-screen px-6 lg:px-32 text-white">
      <div className="w-[36rem] mx-auto space-y-5">
        <div className="text-3xl font-semibold">Posts</div>
        {posts.map((p) => (
          <PostCard key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
