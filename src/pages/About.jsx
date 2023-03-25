// import motion
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

// import components
import { SectionWrapper } from "../hoc";
import { services } from "../constants/index.js";
import Tech from "./main/Tech";
import Experience from "./main/Experience.jsx";
import Jhoswe from "../assets/jhoswe.png";
import { transitionGeneral } from "../utils/motion.js";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <div className="relative flex justify-center items-center flex-wrap py-2">
      <div className="gota hover:rounded-full transition-all duration-300 ease-in-out flex justify-center flex-col items-center">
        <h3 className="font-semibold relative w-10 h-10 b-[#000] rounded-full shadow-[inset_2px_5px_10px_rgba(0,0,0,0.1),inset_-2px_-5px_10px_rgba(255,255,255,1),15px_15px_10px_rgba(0,0,0,0.05),15px_10px_15px_rgba(0,0,0,0.025)] flex justify-center items-center">{`0${
          index + 1
        }`}</h3>
        <h2 className="font-semibold text-sm p-2 m-1 text-center">{title}</h2>
        <img src={icon} alt={title} className="w-12" />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transitionGeneral}
    >
      <div>
        <h2 className="h2 text-center lg:text-left">Acerca de Mi</h2>
      </div>
      <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left ">
        {/* img */}
        <div className="flex-1 max-h-[35rem] lg:max-h-max order-2 lg:order-none overflow-hidden mt-8 lg:mt-0">
          <img src={Jhoswe} alt="" />
        </div>
        {/* text */}
        <div className="flex-1 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
          <p className="lg:max-w-3xl max-w-full leading-[1.8rem] text-center lg:text-left">
            Desde mi niñez, siempre sentí una gran pasión por el mundo de la
            tecnología, dedicando largas horas a explorar diferentes programas y
            juegos en mi computadora. Pero por motivos personales, decidí
            estudiar turismo en la universidad, aunque siempre tuve en mente mi
            verdadera pasión en el campo de la tecnología.
            <br />
            <br />
            Si bien disfruté de mi trabajo en el sector turístico la pandemia de
            COVID-19 trajo consigo una profunda crisis en este sector, lo que me
            dejó sin trabajo, pero a pesar de lo perjudicial que esto pudo haber
            sido, vi esta situación como una gran oportunidad para explorar mi
            verdadera pasión y decidí aprovechar este tiempo para estudiar
            cursos en línea de programación.
            <br />
            <br />
            Ahora ya son más de 3 años donde tuve la suerte de trabajar en un
            amplio espectro de tecnologías web, lo que me permitió acumular una
            gran cantidad de experiencia, trabajando y conociendo a empresas y
            personas increíbles y maravillosas de todo el mundo.
          </p>
          <div className="flex justify-center lg:justify-end">
            <Link
              to={"/portfolio"}
              className="inline-block mt-12 z-[2] leading-4 ease-in-out duration-[0.5s] btn mb-[1.5rem] btn2"
            >
              <i />
              <span className="z-[2] ease-in-out duration-[0.5s]">
                Portafolio
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-16 flex flex-wrap gap-5 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <Experience />
      <Tech />
      <div>
        <h2 className="font-secondary font-normal lg:text-[1.5rem] text-[1.5rem] text-center">
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

export default SectionWrapper(About, "about");
