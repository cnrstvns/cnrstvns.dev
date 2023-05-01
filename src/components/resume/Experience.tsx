import React from 'react';
import { type Experience as ExperienceType } from '@/constants/experiences';

type Props = {
  experience: ExperienceType;
};

export function Experience({ experience }: Props) {
  return (
    <div>
      <div className="font-semibold text-xl text-blue-300">
        {experience.title}
      </div>
      <div className="text-base">{experience.location}</div>
      <div className="text-base text-neutral-400">{experience.timespan}</div>
      <div className="text-base mt-2">{experience.description}</div>
    </div>
  );
}
