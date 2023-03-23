// import motion
import { motion } from "framer-motion";

// import components
import { textVariant, slideIn } from "../../utils/motion.js";
import { SectionWrapper } from "../../hoc";
import Tech from "./Tech";

const About = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
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
      <Tech />
    </section>
  );
};

export default SectionWrapper(About, "about");
