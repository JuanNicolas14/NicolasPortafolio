import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import {BsGithub, BsLinkedin} from 'react-icons/bs'

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  const redirectionIconClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Acerca de mi</h2>
      </motion.div>

      <motion.p
        variants={textVariant()}
        className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
      >
        Soy un apasionado de la programación en constante aprendizaje. Tengo habilidades en Front-end y Back-end, al igual que un deseo fuerte de contribuir en proyectos desafiantes. Soy autodidacta, creativo y estoy siempre buscando oportunidades para desarrollar soluciones innovadoras. Mi objetivo es crecer como programador y enfrentar nuevos desafíos para mejorar mis habilidades técnicas.
      </motion.p>
      <motion.div variants={textVariant()}>
        <p className="flex gap-3 mt-3 text-azul-100 text-[25px]">
          <BsGithub className="transition-colors hover:text-blue-700 cursor-pointer" onClick={() => redirectionIconClick("https://github.com/JuanNicolas14")}/>
          <BsLinkedin className="transition-colors hover:text-blue-700 cursor-pointer" onClick={() => redirectionIconClick("https://www.linkedin.com/in/nicolascardenas14/")}/>
        </p>
        <button onClick={() => redirectionIconClick("https://juannicolas14.github.io/cv/")} className="w-[200px] p-4 mt-4 rounded-lg bg-primary text-white-100 transition-colors hover:bg-gray-800 cursor-pointer">Descargar CV</button>

      </motion.div>


      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
