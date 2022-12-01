import React, { ReactNode } from 'react';
import clsx from 'clsx';
import NextLink from 'next/link';

interface Props {
  href: string;
  children: ReactNode;
  external?: boolean;
  color?: boolean;
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}

export default function Link({
  href,
  children,
  color,
  size,
  active,
  external = false,
}: Props) {
  return (
    <NextLink
      href={href}
      target={external ? '_blank' : '_self'}
      rel="noreferrer"
      className={clsx(
        'text-base text-neutral-500 hover:text-neutral-400 transition',
        {
          '!text-blue-400 hover:!text-blue-500': color,
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
          '!text-gray-300': active,
        },
      )}
    >
      {children}
    </NextLink>
  );
}
