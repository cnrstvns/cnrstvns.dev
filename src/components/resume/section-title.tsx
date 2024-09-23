import React from 'react';

type Props = {
  title: string;
};

export function SectionTitle({ title }: Props) {
  return <div className="text-2xl font-semibold mb-2">{title}</div>;
}
