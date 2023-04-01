// import Router
import { HashRouter as Router } from "react-router-dom";

// import components
import { Navbar, AnimRoutes } from "./components";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AnimRoutes />
      </Router>
    </>
  );
}

export default App;
