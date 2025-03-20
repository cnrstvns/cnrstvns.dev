export type Experience = {
  title: string;
  company: string;
  location: string;
  timespan: string;
  description?: string;
};

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Whop',
    location: 'Brooklyn, NY',
    timespan: 'December 2023 - Current',
    description:
      'I work with extremely talented people to build product that helps people earn money on the internet.',
  },
  {
    title: 'Lead Engineer',
    company: 'Hyper',
    location: 'Palo Alto, CA',
    timespan: 'May 2021 - Jul. 2022',
    description: `Hyper was a platform that helped you turn a paid community into a business. 
    As the first employee, I built product features, ran customer support, and closed new customers.
    The company's processing volume grew 5x during my tenure. Hyper was acquired in 2023.`,
  },
  {
    title: 'Founder',
    company: 'Sole Tech LLC',
    location: 'Ridgewood, NJ',
    timespan: 'Apr. 2020 - Dec. 2022',
    description:
      'I built custom software to help Discord community owners grow their communities and increase engagement.',
  },
  {
    title: 'Co-Founder',
    company: 'Profit Prophets',
    location: 'Ridgewood, NJ',
    timespan: 'Aug. 2019 - May 2021',
    description: `My close friend and I built a Discord community to teach people how to buy and resell sneakers at scale.
      I ran the backend of the business, writing custom software to improve members' experiences and oversaw $15k in monthly revenue.`,
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
    title: 'Assistant IT Technician',
    company: 'Ridgewood High School',
    location: 'Ridgewood, NJ',
    timespan: 'Jul. 2017 - Aug. 2019',
    description: `Responsible for repairs of student and faculty
    devices as well as maintenance and installation of classroom equipment.`,
  },
];
