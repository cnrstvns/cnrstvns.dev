import React from 'react';
import { experiences } from '@/constants/experiences';
import { Experience } from '@/components/resume/experience';
import { SectionTitle } from '@/components/resume/section-title';

export default function About() {
  return (
    <div className="flex flex-col py-10 min-h-screen px-6 md:px-0 text-black">
      <div className="max-w-lg mx-auto space-y-8">
        <div>
          <SectionTitle title="Skills" />
          <div className="text-base mb-2">
            <span className="font-semibold">Hands-on:</span>{' '}
            <span className="opacity-80">Repair, Organization</span>
          </div>
          <div className="text-base mb-2">
            <span className="font-semibold">Software:</span>{' '}
            <span className="opacity-80">
              Typescript, React, Tailwind, PostgreSQL/mySQL, MongoDB
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
              <div className="font-semibold text-xl text-black">
                B.S. Computing and Information Technologies
              </div>
              <div className="text-base">Rochester Institute of Technology</div>
              <div className="text-base text-neutral-500">
                Aug. 2019 - Dec. 2024
              </div>
              <div className="text-base">
                <span className="font-semibold">Honors:</span>
                <span className="text-neutral-600"> Dean&apos;s List</span>
              </div>
              <div className="text-base">
                <span className="font-semibold">Relevant Coursework:</span>
                <ul className="text-neutral-600">
                  <li>- Computer Systems Concepts</li>
                  <li>- Information Assurance and Security</li>
                  <li>
                    - Computational Problem Solving in the Information Domain
                    I/II
                  </li>
                  <li>- Web and Mobile Computing I/II</li>
                  <li>- Introduction to Routing and Switching</li>
                  <li>- Introduction to Database and Data Modeling</li>
                  <li>- Task Automation Using Interpeted Languages</li>
                  <li>- Systems Administration I/II</li>
                  <li>- Designing the User Experience</li>
                  <li>- Project Management</li>
                  <li>- Information Requirements Modeling</li>
                  <li>- Configuration Management</li>
                  <li>- Database Connectivity and Access</li>
                  <li>- Database Application Development</li>
                </ul>
              </div>
              <div className="text-base">
                <span className="font-semibold">Note:</span>
                <span className="text-neutral-600">
                  {' '}
                  Completed an extended cooperative education experience from
                  June 2021 to July 2022.
                </span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-xl text-black">
                High School Diploma
              </div>
              <div className="text-base">Ridgewood High School</div>
              <div className="text-base text-neutral-500">
                Sep. 2015 - Jun. 2019
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionTitle title="Interests" />

          <div className="text-base">- Software Engineering</div>
          <div className="text-base">- Entrepreneurship</div>
          <div className="text-base">- Fishing</div>
          <div className="text-base">- Aviation</div>
        </div>
      </div>
    </div>
  );
}
