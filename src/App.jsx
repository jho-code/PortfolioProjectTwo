// import Router
import { BrowserRouter as Router } from "react-router-dom";

// import components
import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 ">
        <div className="bg-hero-pattern-w bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
};

export default App;
