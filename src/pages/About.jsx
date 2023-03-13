// import Tilt
import Tilt from "react-tilt";

// import motion
import { motion } from "framer-motion";

// import components
import { styles } from "../styles.js";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../hoc";
import Experience from "../components/Experience";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[250px] ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-[#52907f] rounded-[20px] py-8 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-center font-medium">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className="p mt-10 text-center lg:text-left">Introducción</p>
        <h2 className="h2 text-center lg:text-left">Un poco de mi</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-[1rem] max-w-full leading-[1.8rem] text-center lg:text-left"
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
      <div className="mt-20 flex flex-wrap gap-10 justify-center lg:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <Experience />
    </section>
  );
};

export default SectionWrapper(About, "about");
