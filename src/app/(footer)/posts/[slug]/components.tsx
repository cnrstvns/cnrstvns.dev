/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import clsx from 'clsx';

const linkClassName = 'text-blue-400 hover:text-blue-500 transition';

export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => {
    if (!href?.startsWith('/')) {
      return (
        <a
          className={linkClassName}
          href={href as string}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link className={linkClassName} href={href as string}>
        {children}
      </Link>
    );
  },
  Figure: ({
    src,
    width,
    height,
    caption,
    className,
  }: {
    src: string;
    width: number;
    height: number;
    caption: string;
    className?: string;
  }) => {
    return (
      <figure className="flex flex-col w-full items-center">
        <Image
          src={src}
          width={width}
          height={height}
          alt={caption}
          className={clsx('rounded-sm', className)}
        />
        <figcaption className="mt-1.5 text-sm text-neutral-400">
          {caption}
        </figcaption>
      </figure>
    );
  },
};
