import React from 'react';
import experiences from '@/constants/experiences';
import Experience from '@/components/resume/Experience';
import SectionTitle from '@/components/resume/SectionTitle';

export default function About() {
  return (
    <div className="flex flex-col pt-32 pb-10 min-h-screen px-6 lg:px-32 text-white">
      <div className="max-w-4xl mx-auto space-y-5">
        <div>
          <SectionTitle title="Skills" />
          <div className="text-base mb-2">
            <span className="font-semibold">Hands-on:</span>{' '}
            <span className="opacity-80">Repair, Organization</span>
          </div>
          <div className="text-base mb-2">
            <span className="font-semibold">Software:</span>{' '}
            <span className="opacity-80">
              Typescript, React, Tailwind, Postgres/mySQL, MongoDB
            </span>
          </div>
          <div className="text-base mb-2">
            <span className="font-semibold">Interpersonal:</span>{' '}
            <span className="opacity-80">
              Teamwork, Leadership, Communication
            </span>
          </div>
          <div className="text-base mb-2">
            <span className="font-semibold">Operating Systems:</span>{' '}
            <span className="opacity-80">
              macOS, Linux, Windows, Windows Server
            </span>
          </div>
        </div>
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
              <div className="font-semibold text-xl text-blue-300">
                B.S. Computing and Information Technologies
              </div>
              <div className="text-base">Rochester Institute of Technology</div>
              <div className="text-base text-neutral-300">
                Aug. 2019 - Dec. 2024 (expected)
              </div>
              <div className="text-base mt-2">
                <span className="font-semibold">GPA:</span>
                <span className="text-neutral-300"> 3.32</span>
              </div>
              <div className="text-base">
                <span className="font-semibold">Honors:</span>
                <span className="text-neutral-300"> Dean&apos;s List</span>
              </div>
              <div className="text-base">
                <span className="font-semibold">Relevant Coursework:</span>
                <span className="text-neutral-300">
                  {' '}
                  Computational Problem Solving in the Information Domain I/II,
                  Introduction to Routing and Switching, Introduction to
                  Database and Data Modeling, Task Automation Using Interpretive
                  Languages, Information Assurance and Security, Systems
                  Administration I/II, Designing the User Experience, Project
                  Management, Web and Mobile I/II
                </span>
              </div>
              <div className="text-base">
                <span className="font-semibold">Note:</span>
                <span className="text-neutral-300">
                  {' '}
                  Completed an extended cooperative education experience from
                  June 2021 to July 2022.
                </span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-xl text-blue-300">
                High School Diploma
              </div>
              <div className="text-base">Ridgewood High School</div>
              <div className="text-base text-neutral-300">
                Sep. 2015 - Jun. 2019
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionTitle title="Interests" />

          <div className="text-base">- Software Engineering</div>
          <div className="text-base">- Entrepreneurship</div>
          <div className="text-base">- Skiing</div>
          <div className="text-base">- Hiking</div>
        </div>
      </div>
    </div>
  );
}
