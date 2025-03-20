import React from 'react';
import { experiences } from '@/constants/experiences';
import { Experience } from '@/components/resume/experience';
import { SectionTitle } from '@/components/resume/section-title';

export default function About() {
  return (
    <div className="flex flex-col py-10 min-h-screen px-6 md:px-0 text-black">
      <div className="max-w-lg mx-auto space-y-8">
        <div>
          <SectionTitle title="Experience" />

          <div className="space-y-5">
            {experiences.map((experience) => (
              <Experience key={experience.title} experience={experience} />
            ))}
          </div>
        </div>
        <div>
          <SectionTitle title="Education" />

          <div className="space-y-5">
            <div>
              <div className="font-semibold text-xl text-black">
                B.S. Computing and Information Technologies
              </div>
              <div className="text-base">Rochester Institute of Technology</div>
              <div className="text-base text-neutral-500">
                Aug. 2019 - Dec. 2024
              </div>

              <div className="mt-2">
                <div className="text-base">
                  <span className="font-semibold">Concentrations: </span>
                  <span className="text-neutral-600">
                    Database Applications, Enterprise Administration
                  </span>
                </div>
                <div className="text-base">
                  <span className="font-semibold">Honors:</span>
                  <span className="text-neutral-600"> Dean&apos;s List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
