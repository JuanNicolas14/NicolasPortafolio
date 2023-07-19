import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  sena,
  ctd,
  colombo,
  platzi,
  criptosProject,
  seguroAuto,
  citasVet,
  simonDice,
  portfolioJr
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca",
  },
  {
    id: "work",
    title: "Mis proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollo Front end",
    icon: web,
  },
  {
    title: "Desarrollo Back end",
    icon: mobile,
  },
  {
    title: "Trabajo en equipo",
    icon: backend,
  },
  {
    title: "Metodologías Ágiles",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const education = [
  {
    title:"Análisis y Desarrollo de Software",
    place:"SENA",
    icon: sena,
    iconBg: "#E6DEDD",
    date: "Noviembre 2022 - En curso",
    points:[
      "El SENA es un centro de formación en el cual he adquirido conocimientos en lenguajes de programación, arquitectura de computadores, programacion web, entre otros.",
      "Habilidades como el análisis de requerimientos, diseño de sistemas, pruebas de software tambien han sido enseñadas durante la formación."
    ]
  },
  {
    title:"Certified tech developer",
    place:"Digital House, Mercado Libre y Globant",
    icon: ctd,
    iconBg: "#383e56",
    date: "Junio 2022 - Julio 2023",
    points:[
      "Es una iniciativa educativa co-creada por Digital House, Mercado Libre y Globant para formar desarrolladores siguiendo los más altos estándares de la industria.",
      "Adquirí Conocimientos en infraestructura, bases de datos, desarrollo Front end y Back end, testing, entre otros.",
      "Desarrollé habilidades como colaboración y trabajo en equipo bajo metodologias agiles(Scrum), Desing thinking, gestión del tiempo y comunicación efectiva."
    ]
  },
  {
    title:"Cursos Udemy y Platzi",
    place:"Udemy y Platzi",
    icon: platzi,
    iconBg: "#E6DEDD",
    date: "Enero 2021 - Junio 2022",
    points:[
      "Desarrollé Cursos sobre HTML, CSS, JavaScript, React, Angular, Java, Spring, entre otros.",
    ]
  },
  {
    title:"Ingles B2",
    place:"Colombo Americano",
    icon: colombo,
    iconBg: "#383e56",
    date: "Enero 2020 - Marzo 2021",
    points:[
      "Alcancé el nivel B2 de ingles segun el Marco común europeo de referencia para las lenguas.",
    ]
  }
]

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Proyecto final CTD",
    icon: ctd,
    iconBg: "#383E56",
    date: "Marzo 2023 - Julio 2023",
    points: [
      "Desarrollamos una aplicación web para la reserva de almuerzos de acuerdo a unos planes establecidos.",
      "En el Front estuve encargado de traducir diseños a componentes web con react, el manejo de interacciones y animaciones, adaptar la web a diferentes dispositivos, manejo de conexiones asíncronas, manejo de rutas, validar campos de entrada y consumir APIs para integración del Front con Back.",
      "En el Back ayude creando servicios y exponiendolos a través de las APIs rest, utilice excepciones para manejar errores, se mapearon las clases con las tablas en la DB a través de hibernate con Spring Data y usamos Autenticación y manejo de sesiones de usuario con Spring Security, entre otras cosas.",
    ],
  },
  
];

/* const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]; */

const projects = [
  {
    name: "Mi primer portafolio",
    description:
      "Portafolio hecho con HTML, CSS y JavaScript con funcionalidades como cambio de color, slider, envio email, descargar cv, adaptabilidad, entre otras.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: portfolioJr,
    source_code_link: "https://github.com/JuanNicolas14/myPortfolio",
    project_link: "https://juannicolas14.github.io/myPortfolio/"
  },
  {
    name: "Cotizador Criptomonedas",
    description:
      "Cotizador hecho con react y aplicando conceptos como styled components, custom hooks, consultar una API, entre otros.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: criptosProject,
    source_code_link: "https://github.com/JuanNicolas14/cotizadorCriptos",
    project_link: "https://kind-kalam-6b2e0f.netlify.app/"
  },
  {
    name: "Cotizador seguro de auto",
    description:
      "Hecho con react, Styled Components y PropTypes para verificar nuestros datos.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: seguroAuto,
    source_code_link: "https://github.com/JuanNicolas14/cotizadorAutos",
    project_link: "https://naughty-torvalds-2db88e.netlify.app/"
  },
  {
    name: "Control de citas Veterinaria",
    description:
      "Administrador de pacientes hecho en react, con herramientas como vite, tailwind CSS y LocalStorage.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: citasVet,
    source_code_link: "https://github.com/JuanNicolas14/citas-react",
    project_link: "https://eager-liskov-971c7a.netlify.app/"
  },
  {
    name: "Simon Dice",
    description:
      "Juego de simon dice hecho con html, css y javascript.",
    tags: [
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: simonDice,
    source_code_link: "https://github.com/JuanNicolas14/Simon",
    project_link: "https://juannicolas14.github.io/Simon/"
  },
  
];

export { services, technologies, education, experiences, projects };
