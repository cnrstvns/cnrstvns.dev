/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const linkClassName =
  'text-blue-500 hover:text-blue-500 transition no-underline';

export const mdxComponents: MDXComponents = {
  a: function Anchor({ href, children, ref, ...props }) {
    const pathname = usePathname();

    if (href?.startsWith('/')) {
      return (
        <Link className={linkClassName} href={href as string} {...props}>
          {children}
        </Link>
      );
    }

    if (href?.startsWith('#')) {
      return (
        <a
          onClick={() =>
            navigator.clipboard.writeText(
              `https://cnrstvns.dev${pathname}${href}`,
            )
          }
          className={linkClassName}
          href={href}
          {...props}
        />
      );
    }

    return (
      <a
        href={href}
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
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
