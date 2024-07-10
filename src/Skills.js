import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
// import { RiTailwindCssLine } from "react-icons/ri";

const Skills = () => {
  return (
    <div className='skillsmaindiv'>
      <div className='centerdiv'>
        <div className='skillsdiv'> <h1 className='myh1'>My</h1> <h1 className='skillsh1'>Skills</h1> </div>

        <div className='htmlmaindiv'>
          <div className='htmldiv'> <h1 className='htmlh1'>
            <div className='htmlicon'><FaHtml5 /></div>
            <a href='https://www.w3schools.com/html/html_intro.asp'>HTML</a></h1> </div>
        </div>

        <div className='htmlmaindiv'>
          <div className='htmldiv'>
            <h1 className='htmlh1'>
              <div className='cssicon'><FaCss3Alt /></div>
              <a href='https://www.w3schools.com/css/css_intro.asp'>CSS</a>
            </h1>
          </div>
        </div>

        <div className='htmlmaindiv'>
          <div className='htmldiv'>
            <h1 className='htmlh1'>
              <div className='jsicon'><IoLogoJavascript /></div>
              <a href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript'>JAVASCRIPT</a>
            </h1>
          </div>
        </div>

        <div className='htmlmaindiv'>
          <div className='htmldiv'>
            <h1 className='htmlh1'>
              <div className='reacticon'><FaReact /></div>
              <a href='https://www.w3schools.com/whatis/whatis_react.asp'>REACT JS</a>
            </h1>
          </div>
        </div>

        <div className='htmlmaindiv'>
          <div className='htmldiv'>
            <h1 className='htmlh1'>
              <div className='tailwindicon'><SiTailwindcss /></div>
              <a href='https://tailwindcss.com/'>TAILWIND CSS</a>
            </h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills;
