import { useContext } from "react";
import { CursorContext } from "../../context/CursorContext.jsx";

// import framer motion
import { motion } from "framer-motion";

// import Hero Slider

// import components
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import {
  fadeIn,
  transitionGeneral,
  textVariant,
  slideIn,
} from "../../utils/motion";
import { Link } from "react-router-dom";

// import icons
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      {/* card */}
      <div className="relative h-60 overflow-hidden shadow-[0px_5px_15px_rgba(0,0,0,0.2)] flex justify-center items-center group bg-black">
        {/* box img */}
        <div>
          <img src={image} alt="" />
        </div>
        {/* content */}
        <div className="absolute -bottom-96 w-full h-full flex justify-center items-center z-10 flex-col backdrop-blur-lg shadow-[0_-10px_10px_rgba(0,0,0,0.1)] border border-solid border-[rgba(255,255,255,0.2)]  group-hover:bottom-0 transition-all duration-[.5s]">
          {/* box content */}
          <div className="flex justify-center items-center flex-col">
            <h3 className="text-white uppercase tracking-[0.2px] font-medium text-sm text-center my-4 leading-4 duration-[1.5s] opacity-0 -translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-300">
              {name}
            </h3>
            <p className="text-white uppercase text-xs px-4-3 font-medium text-center duration-[1.5s] opacity-0 translate-y-10 delay-300 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
              {description}
            </p>
          </div>
          {/* icons */}
          <div className="flex gap-4 mt-5 text-white duration-[1.5s] opacity-0 translate-y-10 delay-300 group-hover:opacity-100 text-lg group-hover:translate-y-0 transition-all">
            <Link target={"_blank"} to={`${source_code_link}`}>
              <AiFillGithub />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <section>
      <motion.div
        variants={textVariant()}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaverHandler}
      >
        <p className="p text-center lg:text-left">Mi Portafolio</p>
        <h2 className="h2 text-center lg:text-left">Mis Últimos proyectos</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "50%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "50%" }}
        transition={transitionGeneral}
      >
        <div className="w-full flex justify-center lg:justify-start">
          <motion.p
            variants={fadeIn("right", "spring", 0.1, 1.5)}
            className="mt-3 max-w-3xl leading-[1.8rem] text-center lg:text-left"
          >
            A continuación les presento una pequeña galería de los últimos
            proyectos que recientemente he realizado, los cuales son una reflejo
            de mi capacidad para poder resolver problemas complejos, trabajar
            con diferentes tecnologías y administrar proyectos de manera
            efectiva. Los he hecho con mucho cariño, alguno de ellos junto a
            personas increíbles. Cada proyecto se describe brevemente con el
            enlace a repositorios de código y demostraciones en vivo.
          </motion.p>
        </div>
      </motion.div>
      <div className="mt-20 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-center lg:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <motion.div
        variants={slideIn("right", "spring", 1.5, 0.75)}
        className=" mt-10 flex lg:items-end lg:justify-end items-center justify-center"
      >
        <Link
          to={"/portfolio"}
          className="inline-block z-[2] leading-4 ease-in-out duration-[0.5s] btn mb-[1.5rem] btn2"
        >
          <i />
          <span className="z-[2] ease-in-out duration-[0.5s]">Ver más</span>
        </Link>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Works, "");
