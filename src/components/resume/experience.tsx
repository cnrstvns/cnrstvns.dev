import React from 'react';
import { type Experience as ExperienceType } from '@/constants/experiences';

type Props = {
  experience: ExperienceType;
};

export function Experience({ experience }: Props) {
  return (
    <div>
      <div className="text-base">
        <strong>{experience.title}</strong> at {experience.company} —{' '}
        {experience.location}
      </div>
      <div className="text-base text-neutral-500">{experience.timespan}</div>
      <div className="text-base mt-2">{experience.description}</div>
    </div>
  );
}
