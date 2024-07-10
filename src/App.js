import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Skills from "./Skills";
import Contact from "./Contact";

const App = () => {
  return (
    <Router>
      <nav>
        <div className="btnmain">
          <Link className="homebtn" to="/"><button>Home</button></Link>
          <Link className="aboutbtn" to="/about"><button>About</button></Link>
          <Link className="skillsbtn" to="/skills"><button>Skills</button></Link>
          <Link className="contactbtn" to="/contact"><button>Contact</button></Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

