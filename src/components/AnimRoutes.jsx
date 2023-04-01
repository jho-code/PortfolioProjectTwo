import { Suspense, lazy } from "react";

// import routes route & useLocation hook
import { Routes, Route, useLocation } from "react-router-dom";

// import AnimatePresence
import { AnimatePresence } from "framer-motion";

// import pages
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Home = lazy(() => import("../pages/Home"));
const Portfolio = lazy(() => import("../pages/Portfolio"));

const AnimRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={true} mode="wait">
      <Suspense fallback={<div className="w-full h-screen"></div>}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimRoutes;
