import {
  frontend,
  backend,
  creator,
  fullstack,
  teacher,
  turismo,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  java,
  tailwind,
  nodejs,
  expressjs,
  github2,
  git,
  figma,
  docker,
  larnu,
  novotel,
  zulema,
  condor,
  latam,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Inicio",
  },
  {
    id: "about",
    title: "Acerca de mi",
  },
  {
    id: "portfolio",
    title: "Portafolio",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: fullstack,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Profesor Digital",
    icon: teacher,
  },
  {
    title: "Licenciado en Turismo",
    icon: turismo,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "ExpressJS",
    icon: expressjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: github2,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Programador full stack",
    company_name: "LarnU Bootcamp",
    icon: larnu,
    iconBg: "#383E56",
    date: "Jul 2022 - Feb 2023",
    points: [
      "Comencé mi carrera en LarnU como Desarrollador de Contenido Web y Docente, y gracias a mi habilidad para adaptarme rápidamente a nuevos desafíos, fui promovido a Desarrollador Full Stack en dos meses.",
      "A lo largo de mi trayectoria, he colaborado en proyectos de desarrollo web de gran envergadura y he impartido habilidades técnicas a una amplia gama de estudiantes, lo que me ha permitido desarrollar habilidades interpersonales y una capacidad demostrada para comunicar ideas técnicas de manera efectiva.",
    ],
  },
  {
    title: "Docente",
    company_name: "LarnU Bootcamp",
    icon: larnu,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Feb 2023",
    points: [
      "Como docente en LarnU, lideré cursos de desarrollo de contenido web y enseñé a los estudiantes cómo crear y desarrollar sitios web de manera eficiente y atractiva.",
      "Además, brindé asistencia técnica a los estudiantes para resolver problemas y fomenté un ambiente de aprendizaje positivo y colaborativo, lo que me permitió cultivar habilidades interpersonales y demostrar una capacidad probada para trabajar en equipo.",
    ],
  },
  {
    title: "Administrador",
    company_name: "Zulema Lovón Salón Spa",
    icon: zulema,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Recepcionista",
    company_name: "Novotel",
    icon: novotel,
    iconBg: "#E6DEDD",
    date: "Dic 2019 - Abr 2020",
    points: [
      "Trabajé como Recepcionista en Novotel, donde desempeñé un papel clave en la atención al cliente y la gestión de reservas, asegurando que los clientes recibieran un servicio excepcional y que sus estancias fueran cómodas y satisfactorias.",
      "Coordiné con otros departamentos para resolver cualquier problema que pudiera surgir y garantizar una experiencia positiva para el cliente.",
      "Mi habilidad para trabajar bajo presión y mi capacidad para mantener la calma en situaciones estresantes fueron fundamentales para proporcionar un servicio excepcional y satisfacer las necesidades de los clientes.",
    ],
  },
  {
    title: "Supervisor de Operaciones",
    company_name: "Condor Travel",
    icon: condor,
    iconBg: "#383E56",
    date: "Feb 2018 - Set 2019",
    points: [
      "Desempeñé un papel clave en la supervisión de las operaciones diarias de la agencia, coordinando con proveedores y resolviendo problemas para asegurar la satisfacción del cliente y un alto nivel de eficiencia en las operaciones.",
      "Durante mi tiempo como Supervisor de Operaciones, implementé un nuevo sistema de operaciones que aumentó la eficiencia en un 30%, reduje los tiempos de respuesta a los clientes en un 25% y aumenté la velocidad de respuesta a problemas en un 15%.",
      "Además, supervisé a un equipo de 4 personas y les brindé capacitación constante para mejorar sus habilidades y conocimientos en la industria.",
    ],
  },
  {
    title: "Agente de Servicio al Pasajero",
    company_name: "Latam Airlines",
    icon: latam,
    iconBg: "#E6DEDD",
    date: "Jul 2016 - Ene 2018",
    points: [
      "Como Agente de Servicio al Pasajero, mi enfoque principal fue brindar un servicio al cliente excepcional a los pasajeros durante sus viajes, atendiendo sus necesidades y preocupaciones y asegurando una experiencia de viaje cómoda y segura.",
      "No solo eso, sino que también colaboré estrechamente con la tripulación y manejé una variedad de tareas relacionadas con el embarque, la seguridad y las situaciones de emergencia.",
      "Durante mi tiempo en este papel, fui capaz de desarrollar mis habilidades de resolución de problemas y de toma de decisiones bajo presión, lo que me permitió manejar situaciones complejas de manera efectiva y asegurar la satisfacción del cliente en todo momento.",
      "Además, demostré una gran capacidad de colaboración y trabajo en equipo al interactuar con los pasajeros y con la tripulación para garantizar que todos los aspectos del viaje se llevaran a cabo de manera fluida y sin problemas.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "...Tuve el privilegio de ser su estudiante en LarnU, donde me formé como desarrollador Full Stack. Jhoswe es un excelente profesional y docente, con una habilidad innata para explicar los conceptos complejos de manera clara y concisa. ...",
    name: "Alex Elgueta Rivas",
    designation: "Desarrollador Full Stack",
    company: "LarnU",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7LKGs1beHKmTpJo82648DLyvk6S1PLkv2yNMJLJyBdg2YwVmFy0qS1PG93pT_Poy5Ow",
  },
  {
    testimonial:
      "Jhoswe es un programador Full-Stack y profesor destacado. En su paso por LarnU, desempeñó un papel clave en el desarrollo de nuestra app y también como profesor de nuestro Bootcamp Full-Stack intensivo. Jhoswe es un desarrollador de software talentoso y altamente capacitado que tiene una sólida experiencia en el diseño y desarrollo de aplicaciones complejas...",
    name: "Jorge Alonso",
    designation: "CEO",
    company: "LarnU",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwCTe__-Kbp8YmniNljYC3kbG5T1KmVGRwCzq-MfZ1ur0ovcKqIuhblvTQAk8aG9t5I8",
  },
  {
    testimonial:
      "Con Jhoswe, dimos clases en LarnU. Tiene gran capacidad para comunicar conceptos complejos de manera clara y concisa. Es proactivo, comprometido y con buena disposición para ayudar a sus alumnos. Además, ayuda a sus compañeros y busca mejorar día a día.",
    name: "Emiliano Rotta",
    designation: "Instructor",
    company: "Ada ITW",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzFpXe7WSXKC8VGltjf3ItYWVbOiaXyig78-b-c8pIRnX_O_HtWXtx64N_SeUbJo7bHg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description: "Web-based platform ",
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description: "Web-based platform ",
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description: "Web-based platform ",
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description: "Web-based platform ",
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description: "Web application that .",
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking ",
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const projects2 = [
  {
    name: "Car Rent",
    description: "Web-based platform ",
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description: "Web-based platform ",
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description: "Web-based platform ",
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description: "Web-based platform ",
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description: "Web application that .",
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking ",
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking ",
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking ",
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking ",
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking ",
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  projects2,
};
