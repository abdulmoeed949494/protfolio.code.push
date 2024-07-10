import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className='contactmain'>
      <div className='contactdiv'>

        <h1 className='contacttext'>Contact</h1>

        <div className='contactinput'>
          <div className='phoneicon'><RiContactsFill /></div>
          Name: Abdul Moeed
        </div>


        <div className='contactinput'>
          <div className='phoneicon'><FaPhone /></div>
          Phone: 03340557294
        </div>


        <div className='contactinput'>
          <div className='phoneicon'><IoMdMail /></div>
          Mail: huzaifa009428@gmail.com
        </div>


        <div className='contactinput'>
          <div className='phoneicon'><FaCity /></div>
          City: Karachi
        </div>

      </div>
    </div>
  )
}

export default Contact;
