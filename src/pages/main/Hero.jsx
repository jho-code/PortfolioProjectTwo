// import motion
import { motion } from "framer-motion";

// import components
import { styles } from "../../styles.js";
import { ComputersCanvas } from "../../components/canvas";
import { transitionGeneral } from "../../utils/motion.js";

// import Link
import { Link } from "react-router-dom";

// import typeAnimation
import { TypeAnimation } from "react-type-animation";
// import "../../utils/hovertree.js";

import computerpng from "../../assets/computerpng.webp";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-tertiary" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div>
            <h1 className="h1 text-center lg:text-left">
              Hola, soy <span className="text-tertiary">Jhoswe Genner &</span>
            </h1>
            <div className="mt-8 lg:mt-0 text-[1.1rem] lg:text-[1.3rem] text-center lg:text-left font-secondary mb-12 lg:mb-10">
              <span> Soy </span>
              <TypeAnimation
                sequence={[
                  "Licenciado en Turismo",
                  2000,
                  "Desarrollador Full Stack",
                  2000,
                  "Diseñador Gráfico",
                  2000,
                  "Creador de Contenido",
                  2000,
                  "Profesor Digital",
                  2000,
                ]}
                speed={50}
                className="font-bold"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="text-center mb-12 lg:text-left w-[100%] lg:w-[70%] hidden sm:block">
              Soy un programador Full Stack altamente motivado, disciplinado y
              orientado a resultados.
              <span className="hidden lg:inline-block">
                Poseo habilidades en HTML, CSS y JavaScript, y he desarrollado
                aplicaciones tanto en el Front-End como en el Back-End
                utilizando tecnologías como React.js, Next.js, Node.js y
                Express.js. Además, tengo experiencia en lenguajes de
                programación como Java, y en bases de datos como MongoDB,
                Postgresql y MySql.
              </span>
            </p>
          </div>
          <Link
            to={"/contact"}
            className="inline-block z-[20] leading-4 ease-in-out duration-[0.5s] btn mb-[1.5rem] btn2"
          >
            <i />
            <span className="z-[2] ease-in-out duration-[0.5s]">
              Contáctame
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:w-96 md:w-80 w-64 xl:hidden m-auto">
        <div className="relative">
          <img
            src={computerpng}
            alt="computadora"
            className="absolute top-[55vh] md:top-[50vh]"
            rel="preload"
            as="image"
          />
        </div>
      </div>
      <ComputersCanvas />
      <div className="flex absolute bottom-3 lg:bottom-5 w-full justify-center items-center">
        <div className="w-9 h-16 rounded-3xl border-[3px] border-primary flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-tertiary mb-1"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
