import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import {link  } from "../assets";

const educationData = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Institute of Technology & Science, Ghaziabad",
    icon: "/path/to/its-logo.png", // replace with your actual logo path
    iconBg: "#383E56",
    date: "June 2023 - June 2026",
    points: [
      "Currently pursuing BCA at Institute of Technology & Science, Ghaziabad.",
      "Focusing on full-stack web development and modern technologies.",
      "Maintained a CGPA of 7.0 + throughout the semesters.",
    ],
  },
  {
    title: "Bachelor of Arts (BA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    icon: "/path/to/ignou-logo.png", // replace with your actual logo path
    iconBg: "#E6DEDD",
    date: "June 2021 - June 2024",
    points: [
      "Completed Bachelor of Arts from IGNOU.",
      "Developed strong analytical and communication skills.",
      "Secured an overall CGPA of 6.5.",
    ],
  },
];

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={link}
            alt={education.institution}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.institution}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Academic Background
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educationData.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
