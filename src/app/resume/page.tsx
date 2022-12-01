import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col pt-32 pb-10 min-h-screen px-6 lg:px-32 text-white">
      <div className="max-w-4xl mx-auto space-y-5">
        <div>
          <div className="text-2xl font-bold mb-2 underline underline-offset-8 decoration-blue-300">
            Skills
          </div>
          <div className="text-base mb-2">
            <span className="font-semibold">Hands-on:</span>{' '}
            <span className="opacity-80">Repair, Organization</span>
          </div>
          <div className="text-base mb-2">
            <span className="font-semibold">Software:</span>{' '}
            <span className="opacity-80">
              SketchUp, Microsoft Office, Java, Node.JS, React, Next.JS,
              MongoDB, Tailwind CSS, Microsoft Hyper-V, VMWare ESXi
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
              Windows, Windows Server, MacOS, Linux, Linux Server
            </span>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold mb-2 underline underline-offset-8 decoration-blue-300">
            Experience
          </div>
          <div className="space-y-3">
            <div>
              <div className="font-semibold text-xl text-blue-300">
                Lead Engineer
              </div>
              <div className="text-base">Hyper - Palo Alto, CA</div>
              <div className="text-base text-neutral-300">
                May 2021 - Jul. 2022
              </div>
              <div className="text-base mt-2">
                <a
                  className="hover:text-blue-300 hover:underline"
                  href="https://hyper.co"
                >
                  Hyper
                </a>{' '}
                is a platform that helps turn Discord servers into multi-million
                dollar businesses. As Hyper's first employee, I was responsible
                for designing features, managing customer support, overseeing
                marketing operations, and managing most engineering tasks.
                During my time at Hyper, our customer count more than tripled
                and our monthly GMV (gross payments volume processed) grew by
                over 5x.
              </div>
            </div>
            <div>
              <div className="font-semibold text-xl text-blue-300">Founder</div>
              <div className="text-base">Sole Tech, LLC - Ridgewood, NJ</div>
              <div className="text-base text-neutral-300">
                Apr. 2020 - Current
              </div>
              <div className="text-base mt-2">
                Responsible for consulting with Discord-based communities in the
                sneaker aftermarket space for their custom software needs.
                Creating custom APIs and applications for customers in Node.JS
                and Python. Managing 20+ subscriptions with Stripe.
              </div>
            </div>
            <div>
              <div className="font-semibold text-xl text-blue-300">
                Sole Proprietor
              </div>
              <div className="text-base">
                Information Technology Consultant - Ridgewood, NJ
              </div>
              <div className="text-base text-neutral-300">
                Jan. 2019 - Jun. 2021
              </div>
              <div className="text-base mt-2">
                Installation and Configuration of Home Networking Equipment,
                including but not limited to: Routers, Switches, Patch Panels,
                Cable Drops, Network Jacks.
              </div>
            </div>
            <div>
              <div className="font-semibold text-xl text-blue-300">
                Assistant IT Technician
              </div>
              <div className="text-base">
                Ridgewood High School - Ridgewood, NJ
              </div>
              <div className="text-base text-neutral-300">
                Jul. 2017 - Aug. 2019
              </div>
              <div className="text-base mt-2">
                Responsible for management of repairs for Student/Teacher
                devices, maintenance and installation of classroom equipment.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold mb-2 underline underline-offset-8 decoration-blue-300">
            Education
          </div>
          <div className="space-y-3">
            <div>
              <div className="font-semibold text-xl text-blue-300">
                B.S. Computing and Information Technologies
              </div>
              <div className="text-base">Rochester Institute of Technology</div>
              <div className="text-base text-neutral-300">
                Aug. 2019 - Dec. 2024 (expected)
              </div>
              <div className="text-base mt-2">
                <span className="font-semibold">GPA:</span> 3.32
              </div>
              <div className="text-base">
                <span className="font-semibold">Honors:</span> Dean&apos;s List
              </div>
              <div className="text-base">
                <span className="font-semibold">Relevant Coursework:</span>{' '}
                Computational Problem Solving in the Information Domain I/II,
                Introduction to Routing and Switching, Introduction to Database
                and Data Modeling, Task Automation Using Interpretive Languages,
                Information Assurance and Security, Systems Administration I,
                Web and Mobile I/II
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
          <div className="text-2xl font-bold mb-2 underline underline-offset-8 decoration-blue-300">
            Interests
          </div>
          <div className="text-base">- Software Engineering</div>
          <div className="text-base">- Entrepreneurship</div>
          <div className="text-base">- Skiing</div>
          <div className="text-base">- Hiking</div>
          <div className="text-base">- Travel</div>
        </div>
      </div>
    </div>
  );
}
