// import Router
import { HashRouter as Router } from "react-router-dom";

// import components
import { Navbar, AnimRoutes } from "./components";

// import motion
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./context/CursorContext";

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <>
      <Router>
        <Navbar />
        <AnimRoutes />
      </Router>
      {/* cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-1 h-1 bg-black fixed top-0 left-0 pointer-events-none z-20 rounded-full"
      ></motion.div>
    </>
  );
};

export default App;
