// import motion
import { motion } from "framer-motion";

// import components
import { styles } from "../styles.js";
import { ComputersCanvas } from "./canvas";

// import Link
import { Link } from "react-router-dom";

// import typeAnimation
import { TypeAnimation } from "react-type-animation";

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
          <h1 className="h1 text-center lg:text-left">
            Hola, soy <span className="text-tertiary">Jhoswe Genner &</span>
          </h1>
          <div className="text-[1.1rem] lg:text-[1.3rem] font-secondary mb-12 lg:mb-10">
            <span> Soy un </span>
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
          <p className="text-center mb-12 lg:text-left w-[70%]">
            Soy desarrollador full stack con más de 3 años en programación y 9
            años de experiencia en la industria del turismo.
            <span className="hidden lg:inline-block">
              Me he destacado en el desarrollo de aplicaciones web escalables,
              seguras y de alta calidad utilizando tecnologías como HTML, CSS,
              JavaScript, React y NodeJS.
            </span>
          </p>
          <Link
            to={"/contact"}
            className="inline-block z-[2] leading-4 ease-in-out duration-[0.5s] btn mb-[1.5rem]"
          >
            <i />
            <span className="z-[2] ease-in-out duration-[0.5s]">
              Contáctame
            </span>
          </Link>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-3 lg:bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-9 h-16 rounded-3xl border-[3px] border-secondary flex justify-center items-start p-2">
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
        </a>
      </div>
    </section>
  );
};

export default Hero;
