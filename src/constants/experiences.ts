export interface Experience {
  title: string;
  location: string;
  timespan: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Lead Engineer',
    location: 'Hyper — Palo Alto, CA',
    timespan: 'May 2021 - Jul. 2022',
    description: `Hyper is a platform that helps turn Discord servers into multi-million
  dollar businesses. As Hyper's first employee, I was responsible
  for designing features, managing customer support, overseeing
  marketing operations, and managing most engineering tasks.
  During my time at Hyper, our customer count more than tripled
  and our monthly payments volume grew by over 5 times.`,
  },
  {
    title: 'Founder',
    location: 'Sole Tech LLC — Ridgewood, NJ',
    timespan: 'Apr. 2020 - Dec. 2022',
    description: `Responsible for consulting with Discord-based communities in the
    sneaker aftermarket space for their custom software needs.
    Creating custom APIs and applications for customers in Node.JS
    and Python. Managed 20+ subscriptions with Stripe.`,
  },
  {
    title: 'Sole Proprietor',
    location: 'Information Technology Consultant - Ridgewood, NJ',
    timespan: 'Jan. 2019 - Jun. 2021',
    description: `Installation and configuration of enterprise-grade networking equipment,
    including but not limited to: routers, switches, access points and other network appliances.`,
  },
  {
    title: 'Assistant IT Technician',
    location: 'Ridgewood High School - Ridgewood, NJ',
    timespan: 'Jul. 2017 - Aug. 2019',
    description: `Responsible for repairs of student and faculty
    devices as well as maintenance and installation of classroom equipment.`,
  },
];

export default experiences;
