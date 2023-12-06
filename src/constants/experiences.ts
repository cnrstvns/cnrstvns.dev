export type Experience = {
  title: string;
  company: string;
  location: string;
  timespan: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    title: 'Lead Engineer',
    company: 'Hyper',
    location: 'Palo Alto, CA',
    timespan: 'May 2021 - Jul. 2022',
    description: `Hyper was a platform that helped turn Discord servers into multi-million 
    dollar businesses. As Hyper's first employee, I was responsible for designing features, 
    managing customer support, overseeing marketing & sales operations, and managing most 
    engineering tasks. During my time at Hyper, our customer count more than tripled and our 
    monthly gross transaction volume grew by over 5x. Hyper was acquired in 2023.`,
  },
  {
    title: 'Founder',
    company: 'Sole Tech LLC',
    location: 'Ridgewood, NJ',
    timespan: 'Apr. 2020 - Dec. 2022',
    description: `Responsible for consulting with Discord-based communities in the
    sneaker aftermarket space for their custom software needs.
    Creating custom APIs and applications for customers in Node.JS
    and Python. Managed 20+ subscriptions with Stripe.`,
  },
  {
    title: 'Sole Proprietor',
    company: 'Information Technology Consultant',
    location: 'Ridgewood, NJ',
    timespan: 'Jan. 2019 - Jun. 2021',
    description: `Installation and configuration of enterprise-grade networking equipment,
    including but not limited to: routers, switches, access points and other network appliances.`,
  },
  {
    title: 'Co-Founder',
    company: 'Profit Prophets',
    location: 'Ridgewood, NJ',
    timespan: 'Aug 2019 - May 2021',
    description: `Responsible for managing a subscription based online community on Discord. 
    Focused on the administration and software development side of the business, writing custom software
    to improve members' experiences, overseeing $15k in monthly revenue in Stripe, and communicating goals
    with community moderators.`,
  },
  {
    title: 'Assistant IT Technician',
    company: 'Ridgewood High School',
    location: 'Ridgewood, NJ',
    timespan: 'Jul. 2017 - Aug. 2019',
    description: `Responsible for repairs of student and faculty
    devices as well as maintenance and installation of classroom equipment.`,
  },
];
