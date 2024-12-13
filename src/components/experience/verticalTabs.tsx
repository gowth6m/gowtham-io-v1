"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

export default function VerticalTabs() {
  const [categories] = useState([
    "HIVED",
    "UNIVERSITY OF EXETER",
    "EUROPEAN SPACE AGENCY (ESA)",
    "HATLESS STUDIOS",
    "NOCXA",
  ]);

  const [selectedTab, setSelectedTab] = useState(categories[0]);

  return (
    <Tab.Group
      as="div"
      className="flex sm:flex-row flex-col md:gap-x-12 lg:gap-x-16"
    >
      <Tab.List
        as="nav"
        className="flex flex-col space-y-0 md:space-x-0 md:space-y-1 md:w-72 md:p-1 relative outline-none mb-10 md:mb-0"
      >
        {categories.map((category) => (
          <Tab
            key={category}
            as="button"
            className={({ selected }) =>
              `outline-none py-2 md:px-4 flex items-center justify-between text-left md:w-64 hover:bg-[var(--navy-trans)] ${
                selected ? "text-[var(--green-bright)]" : "text-[var(--slate)]"
              }`
            }
            onClick={() => setSelectedTab(category)}
          >
            {category}
          </Tab>
        ))}
        <motion.div
          className="absolute md:right-0 top-0 md:top-auto md:w-1 w-auto h-1 md:h-10 bg-[var(--green-bright)]"
          animate={{ y: categories.indexOf(selectedTab) * 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </Tab.List>
      {experience.map((experience: TabContent) => (
        <TabContent
          key={experience.company}
          role={experience.role}
          company={experience.company}
          link={experience.link}
          dates={experience.dates}
          descriptions={experience.descriptions}
          technologies={experience.technologies}
        />
      ))}
    </Tab.Group>
  );
}

function TabContent({
  role,
  company,
  link,
  dates,
  descriptions,
  technologies,
}: TabContent) {
  return (
    <Tab.Panel>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col space-y-2"
      >
        <h2 className="text-[var(--lightest-slate)] text-lg font-bold">
          {role}{" "}
          <a
            className="text-[var(--green-bright)] hover2"
            href={link}
            target="_blank"
          >
            @ {company}
          </a>
        </h2>
        <p className="text-[var(--slate)] text-sm">{dates}</p>
        <ul className="verticalTabsDesc py-4">
          {descriptions.map((des: string, index: number) => (
            <li
              key={index}
              className="text-[var(--slate)] text-sm my-1 leading-6"
            >
              {des}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="text-[var(--slate)] text-sm bg-[var(--lightest-navy)] px-2 py-1 rounded-md"
            >
              {technology}
            </span>
          ))}
        </div>
      </motion.div>
    </Tab.Panel>
  );
}

type TabContent = {
  role: string;
  company: string;
  link: string;
  dates: string;
  descriptions: string[];
  technologies: string[];
};

const variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const experience: TabContent[] = [
  {
    role: "Frontend Developer",
    company: "HIVED",
    link: "https://hived.space",
    dates: "Jan 2023 - Present",
    descriptions: [
      "Lead frontend development at HIVED",
      "Create and implement solutions for a variety of microservices used by HIVED",
      "Create applications used by around 20,000 customers daily",
      "Create in-house apps used by our drivers and staff",
    ],
    technologies: [
      "Flutter",
      "React",
      "Node.js",
      "TypeScript",
      "Golang",
      "AWS Services",
    ],
  },
  {
    role: "Software Engineer",
    company: "University of Exeter",
    link: "https://www.exeter.ac.uk/",
    dates: "Jan 2022 - Jan 2023",
    descriptions: [
      "Work on a variety of microservices used within the university. Work with Flutter for mobile apps and React for web apps.",
      "Work on the University of Exeter app that is used by around 22,000 students",
      "Create chatbot API microservice used in various applications",
    ],
    technologies: [
      "React",
      "Flutter",
      "Node.js",
      "TypeScript",
      "AWS Services",
      "DynamoDB",
      "Cognito",
      "CDK",
    ],
  },
    {
    role: "Backend Engineer",
    company: "European Space Agency (ESA)",
    link: "https://www.esa.int/",
    dates: "Jun 2021 - Jan 2022",
    descriptions: [
      "Led backend development for the interactive virtual tour software for ESA's New Norcia Ground Station in Australia to help ESA staff visualise and operate the site remotely from Europe.",
    ],
    technologies: [
      "React",
      "Flutter",
      "Node.js",
      "TypeScript",
      "AWS",
      "Fargate",
      "VPC",
      "Route53",
      "DynamoDB",
      "IAM",
      "TypeScript",
      "CDK",
      "Postgres",
      "Docker",
      "Kubernetes",
      "SQS",
      "SNS",
      "RDS",
    ],
  },
  {
    role: "Software Engineer",
    company: "Hatless Studios",
    link: "https://www.linkedin.com/company/hatless-studios",
    dates: "Oct 2019 - Jun 2021",
    descriptions: [
      "Work on a variety of projects on both frontend and backend in various industries such as education, health and finance. Worked on inventory management system, student app for university and internal tools and analytics dashboards for agencies.",
    ],
    technologies: ["React", "Next", "Framer motion", "TypeScript"],
  },
  {
    role: "Frontend Developer",
    company: "Nocxa",
    link: "https://nocxa.com/",
    dates: "Sep 2019 - Sep 2021",
    descriptions: [
      "Design and develop websites and web apps for clients",
      "Develop apps for clients",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Flutter",
      "Next",
      "Express",
      "MongoDB",
    ],
  },
];
