import { useContext } from "react";
import { CursorContext } from "../../context/CursorContext.jsx";

// import motion
import { motion } from "framer-motion";

// import components
import { textVariant, slideIn } from "../../utils/motion.js";
import { SectionWrapper } from "../../hoc";
import Tech from "./Tech";

import { services } from "../../constants/index.js";

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
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <section>
      <motion.div
        variants={textVariant()}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaverHandler}
      >
        <p className="p mt-10 text-center lg:text-left">Introducción</p>
        <h2 className="h2 text-center lg:text-left">Un poco de mi</h2>
      </motion.div>
      <motion.p
        variants={slideIn("left", "spring", 0.1, 1.5)}
        className="lg:max-w-3xl max-w-full leading-[1.8rem] text-center lg:text-left"
      >
        Desde mi niñez, siempre sentí una gran pasión por el mundo de la
        tecnología, dedicando largas horas a explorar diferentes programas y
        juegos en mi computadora. Pero por motivos personales, decidí estudiar
        turismo en la universidad, aunque siempre tuve en mente mi verdadera
        pasión en el campo de la tecnología.
        <br />
        <br />
        Si bien disfruté de mi trabajo en el sector turístico la pandemia de
        COVID-19 trajo consigo una profunda crisis en este sector, lo que me
        dejó sin trabajo, pero a pesar de lo perjudicial que esto pudo haber
        sido, vi esta situación como una gran oportunidad para explorar mi
        verdadera pasión y decidí aprovechar este tiempo para estudiar cursos en
        línea de programación.
        <br />
        <br />
        Ahora ya son más de 3 años donde tuve la suerte de trabajar en un amplio
        espectro de tecnologías web, lo que me permitió acumular una gran
        cantidad de experiencia, trabajando y conociendo a empresas y personas
        increíbles y maravillosas de todo el mundo.
      </motion.p>
      <div className="my-16 flex flex-wrap gap-5 justify-center xl:hidden">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <Tech />
    </section>
  );
};

export default SectionWrapper(About, "about");
