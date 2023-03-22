// import Router
import { BrowserRouter as Router } from "react-router-dom";

// import components
import { Navbar, AnimRoutes } from "./components";

// import pages
import { About, Contact, Feedbacks, Hero, Works } from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
