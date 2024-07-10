import React from 'react'
import image3 from'./assets/image3.png';
const About = () => {


  return (
    <div className="aboutmain">
      <div className='AMdiv'>
      <h1 className="abouth1">About</h1> <h1 className='abouth2'>Me</h1>
      </div>
      <div className='aboutflex'>

      <div className='aboutmaindiv'>
      <p className="aboutp">
        Hey, I'm Abdul Moeed! I'm a passionate Frontend Developer with a knack for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React, and I'm always eager to learn more and take on new challenges.
      </p>
      <p className="aboutptwo">
      When I'm not coding, you can find me cricket game. I'm currently based in Karachi and I'm always open to new opportunities and collaborations.
      </p>
      </div>
      <div>
      <img className='image3' src={image3} alt="image3" />
      </div> 
      </div>
      </div>
  );
};

export default About;
































// import React from 'react';
// import image3 from'./assets/image3.png';

// const About = () => {
//   return (
//     <div className="aboutmain">
//       <div className='AMdiv'>
//       <h1 className="abouth1">About</h1> <h1 className='abouth2'>Me</h1>
//       </div>
//       <div className='aboutflex'>

//       <div className='aboutmaindiv'>
//       <p className="aboutp">
//         Hey, I'm Abdul Moeed! I'm a passionate Frontend Developer with a knack for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React, and I'm always eager to learn more and take on new challenges.
//       </p>
//       <p className="aboutptwo">
//       When I'm not coding, you can find me cricket game. I'm currently based in Karachi and I'm always open to new opportunities and collaborations.
//       </p>
//       </div>

//       <div>
//       <img className='image3' src={image3} alt="image3" />
//       </div>
      
//       </div>

//     </div>
//   );
// };

// export default About;

