// import motion
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

// import components
import { fadeIn } from "../utils/motion.js";
import { SectionWrapper } from "../hoc";
import { projects2 } from "../constants/index.js";
import { transitionGeneral } from "../utils/motion.js";

import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      {/* card */}
      <div className="relative h-60 overflow-hidden dark:shadow-[0px_5px_15px_rgba(255,255,255,0.2)] shadow-[0px_5px_15px_rgba(0,0,0,0.2)] flex justify-center items-center group ">
        {/* box img */}
        <div>
          <img src={image} alt="" className="h-28" />
        </div>
        {/* content */}
        <div className="text-primary dark:text-white absolute -bottom-96 w-full h-full flex justify-center items-center z-10 flex-col backdrop-blur-lg shadow-[0_-10px_10px_rgba(0,0,0,0.1)] border border-solid border-[rgba(255,255,255,0.2)]  group-hover:bottom-0 transition-all duration-[.5s]">
          {/* box content */}
          <div className=" flex justify-center items-center flex-col">
            <h3 className="uppercase tracking-[0.2px] font-medium text-sm text-center my-4 leading-4 duration-[1.5s] opacity-0 -translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-300">
              {name}
            </h3>
            <p className=" uppercase text-xs px-4-3 font-medium text-center duration-[1.5s] opacity-0 translate-y-10 delay-300 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
              {description}
            </p>
          </div>
          {/* icons */}
          <div className="flex gap-4 mt-5 duration-[1.5s] opacity-0 translate-y-10 delay-300 group-hover:opacity-100 text-lg group-hover:translate-y-0 transition-all">
            <Link target={"_blank"} to={`${source_code_link}`}>
              <AiFillGithub />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transitionGeneral}
    >
      <div>
        <h2 className="h2 text-center lg:text-left">Mi Portafolio</h2>
      </div>
      <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left ">
        {/* text */}
        <div className="flex-1 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
          <p className="lg:max-w-3xl max-w-full leading-[1.8rem] text-center lg:text-left">
            Desde que comencé en este maravilloso mundo de la programación, he
            trabajado con personas grandiosas de las cuales aprendí mucho y con
            ello desarrollé muchos proyectos que están reflejadas en esta
            sección, las cuales son una representación digital de mi experiencia
            y de mis habilidades como programador.
            <br />
            <br />
            Esta sección busca mostrar de manera clara y concisa los proyectos
            más destacados en los que he trabajado, así como las habilidades
            técnicas que poseo,¡asi que con ello, disfrútenlos!.
          </p>
        </div>
      </div>
      <div className="mt-10 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
        {projects2.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-12">
        <h2 className="p font-secondary font-normal lg:text-[1.2rem] text-[1rem] text-center">
          ¿Quieres hablar conmigo?
        </h2>
        <div className="flex justify-center">
          <Link
            to={"/contact"}
            className="inline-block mt-6 z-[2] leading-4 ease-in-out duration-[0.5s] btn mb-[1.5rem] btn2"
          >
            <i />
            <span className="z-[2] ease-in-out duration-[0.5s]">
              Haz clic aquí
            </span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
