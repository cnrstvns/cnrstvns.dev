import React from 'react';

interface Props {
  title: string;
}

export function SectionTitle({ title }: Props) {
  return (
    <div className="text-2xl font-semibold mb-2 underline underline-offset-8 decoration-blue-300 pb-2">
      {title}
    </div>
  );
}
