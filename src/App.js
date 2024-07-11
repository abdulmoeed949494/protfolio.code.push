import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Skills from "./Skills";
import Contact from "./Contact";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function App() {

  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black"
  })

  const [btntext, setBtnText] = useState(<MdDarkMode />)

  const toggleStyle = () => {
    if(myStyle.color === "white"){
      setMyStyle({
          color: "black",
          backgroundColor: "white"
      })
      setBtnText(<MdLightMode />)
    }
    else {
      setMyStyle({
        color: "white",
        backgroundColor: "black"
    })
    setBtnText(<MdDarkMode />);
    }
  }

  return (
    <Router>
      <nav>
        <div className="btnmain" style={myStyle}>
          <Link className="homebtn" to="/"><button>Home</button></Link>
          <Link className="aboutbtn" to="/about"><button>About</button></Link>
          <Link className="skillsbtn" to="/skills"><button>Skills</button></Link>
          <Link className="contactbtn" to="/contact"><button>Contact</button></Link>
          <div className=''>
            <button onClick={toggleStyle} type='button' className='btnmode'>{btntext}</button>
          </div>
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