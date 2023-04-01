import { Suspense, lazy } from "react";

// import transition
import { slideIn } from "../utils/motion.js";

// import motion
import { motion } from "framer-motion";

// import pages
const AboutM = lazy(() => import("../pages/main/About"));
const ContactM = lazy(() => import("../pages/main/Contact"));
const Feedbacks = lazy(() => import("../pages/main/Feedbacks"));
const Hero = lazy(() => import("../pages/main/Hero"));
const Works = lazy(() => import("../pages/main/Works"));

const App = () => {
  return (
    <motion.section variants={slideIn("up", "spring", 0, 1.5)}>
      <div className="relative z-0">
        <Suspense fallback={<div className="w-full h-screen"></div>}>
          <div className="bg-hero-pattern-w bg-cover bg-no-repeat bg-center dark:bg-hero-pattern">
            <Hero />
          </div>
          <div className="relative overflow-hidden">
            <h2 className="h1 absolute right-[0rem] lg:text-[20rem] lg:-top-[4rem] md:text-[15rem] md:-top-[3rem] -top-[2rem] text-[10rem] text-black/5">
              About
            </h2>
            <AboutM />
          </div>
          <div className="relative overflow-hidden">
            <h2 className="h1 absolute left-[0rem] lg:text-[20rem] lg:-top-[4rem] md:text-[15rem] md:-top-[3rem] -top-[2rem] text-[10rem] text-black/5">
              Works
            </h2>
            <Works />
          </div>
          <div className="relative overflow-hidden">
            <h2 className="h1 absolute right-[0rem] lg:text-[20rem] lg:-top-[4rem] md:text-[15rem] md:-top-[3rem] -top-[2rem] text-[10rem] text-black/5">
              Feedb
            </h2>
            <Feedbacks />
          </div>
          <div className="relative z-0">
            <div className="relative overflow-hidden">
              <h2 className="h1 absolute left-[0rem] lg:text-[20rem] lg:-top-[4rem] md:text-[15rem] md:-top-[3rem] -top-[2rem] text-[10rem] text-black/5">
                Contact
              </h2>
              <ContactM />
            </div>
          </div>
        </Suspense>
      </div>
    </motion.section>
  );
};

export default App;
