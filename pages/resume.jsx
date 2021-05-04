import * as React from 'react';

import Head from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head title="Resume | Connor Stevens" />
      <Nav />
      <main className="flex flex-col pt-32 min-h-screen px-6 lg:px-32 bg-white text-black dark:bg-black dark:text-white">
        <div className="max-w-5xl mx-auto">
          <div className="font-semibold text-4xl pb-8">Resume</div>
          <div className="mb-4">
            <div className="text-2xl font-bold mb-2">Objective</div>
            <div className="text-base">Obtain a position at a company which strengthens my abilities and challenges me to grow my skillset every day.</div>
          </div>
          <div className="mb-4">
            <div className="text-2xl font-bold mb-2">Skills</div>
            <div className="text-base mb-2">
              <span className="font-bold">Hands-on:</span>
              {' '}
              Repair, Organization
            </div>
            <div className="text-base mb-2">
              <span className="font-bold">Software:</span>
              {' '}
              SketchUp, Microsoft Office, Adobe Premiere Pro, HTML,
              CSS, Java, Node.JS, Bootstrap, Tailwind CSS, JQuery, Microsoft Hyper-V,
              VMWare ESXi
            </div>
            <div className="text-base mb-2">
              <span className="font-bold">Interpersonal:</span>
              {' '}
              Teamwork, Leadership, Communication
            </div>
            <div className="text-base mb-2">
              <span className="font-bold">Operating Systems:</span>
              {' '}
              Windows, Windows Server, MacOS, Linux, Linux Server, Chrome OS, Cisco IOS
            </div>
          </div>
          <div className="mb-4">
            <div className="text-2xl font-bold mb-2">Experience</div>
            <div className="mb-3">
              <div className="font-bold text-xl text-black dark:text-white">Owner</div>
              <div className="text-base">Sole Tech, LLC - Ridgewood, NJ</div>
              <div className="text-base text-gray-600 dark:text-gray-300">Apr. 2020 - Current</div>
              <div className="text-base mt-2">Providing custom Software Development and other technical services related to the Sneaker Reselling market.</div>
            </div>
            <div className="mb-3">
              <div className="font-bold text-xl text-black dark:text-white">Sole Proprietor</div>
              <div className="text-base">Information Technology Consultant - Ridgewood, NJ</div>
              <div className="text-base text-gray-600 dark:text-gray-300">Jan. 2019 - Current</div>
              <div className="text-base mt-2">Installation and Configuration of Home Networking Equipment, including but not limited to: Routers, Switches, Patch Panels, Cable Drops, Network Jacks.</div>
            </div>
            <div className="mb-3">
              <div className="font-bold text-xl text-black dark:text-white">Assistant IT Technician</div>
              <div className="text-base">Ridgewood High School - Ridgewood, NJ</div>
              <div className="text-base text-gray-600 dark:text-gray-300">Jul. 2017 - Aug. 2019</div>
              <div className="text-base mt-2">Responsible for management of repairs for Student/Teacher devices, maintenance and installation of classroom equipment.</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-2xl font-bold mb-2">Education</div>
            <div className="font-bold text-xl text-black dark:text-white">B.S. Computing and Information Technologies</div>
            <div className="text-base">Rochester Institute of Technology</div>
            <div className="text-base text-gray-600 dark:text-gray-300">Aug. 2019 - May 2023 (expected)</div>
            <div className="text-base mt-2">
              <span className="font-bold">GPA:</span>
              {' '}
              3.29
            </div>
            <div className="text-base">
              <span className="font-bold">Honors:</span>
              {' '}
              Dean's List
            </div>
            <div className="text-base">
              <span className="font-bold">Related Coursework:</span>
              {' '}
              Computational Problem Solving in the Information Domain I,
              Computational Problem Solving in the Information Domain II,
              Introduction to Routing and Switching,
              Task Automation Using Interpretive Languages,
              Web and Mobile I
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">Interests</div>
            <div className="text-base">- Programming</div>
            <div className="text-base">- Sneaker Resale</div>
            <div className="text-base">- Software Development</div>
            <div className="text-base">- Entrepreneurship</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
