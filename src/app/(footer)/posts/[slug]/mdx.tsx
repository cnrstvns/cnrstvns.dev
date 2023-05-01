'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { mdxComponents } from '@/app/(footer)/posts/[slug]/components';

type MDXProps = {
  code: string;
};

export function MDX({ code }: MDXProps) {
  const Component = useMDXComponent(code);

  return <Component components={{ ...mdxComponents }} />;
}
