import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education, experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState } from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "gray",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Experience = () => {
  const [conocimiento, setConocimiento] = useState(true)

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Conocimiento
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Educación y Experiencia
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${ conocimiento == false ? 'text-[#fff]':'text-white-100 bg-gray-800'} w-1/3 xxs:w-1/2 text-white-100 bg-black rounded-lg p-2 m-10 mb-0 ml-0`}
          onClick={() => setConocimiento(true)}
        >
          Estudios
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${ conocimiento == true ? 'text-[#fff]':'text-white-100 bg-gray-800'} w-1/3 xxs:w-1/2 text-white-100 bg-black rounded-lg p-2 m-10 mb-0 ml-0 mr-0`}
          onClick={() => setConocimiento(false)}
        >
          Experiencia
        </motion.button>
      </div>

      {conocimiento == true
        ? (
          <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
              {education.map((education, index) => (
                <ExperienceCard
                  key={`education-${index}`}
                  experience={education}
                />
              ))}
            </VerticalTimeline>
          </div>
        )
        :
        (
          <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                />
              ))}
            </VerticalTimeline>
          </div>
        )
      }


    </>
  );
};

export default SectionWrapper(Experience, "experience");
