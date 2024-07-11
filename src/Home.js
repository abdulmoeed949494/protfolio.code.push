import image from './assets/image.jpg';

export default function Home() {

  return (
    <div className='home'>
      <div className='homemain'>
        <p className='hp'>Hey I am</p>
        <div className='hhdiv'><h1 className='hhone'>Front</h1><h1 className='hhtwo'>end</h1></div>
        <h1 className='hh'>Developer</h1>
        <p className='pp'>I am frontend developer based in Pakistan, i will help you build beautiful websites your users will love</p>
        <div className='homebtnjs'>
          <button className="btnhomeone"><a href='https://www.indeed.com/career-advice/finding-a-job/how-to-get-a-tech-job'>Get In Tech</a></button>
          <button className="btnhometwo"><a href='https://www.khanacademy.org/computing/computer-programming/browse'>Browse Projects</a></button>
        </div>
      </div>

      <div className='rightdiv'>
        <div className='righttwodiv'>
          <div>
            <img className='image' src={image} alt="image" />
          </div>
          <div class="animation2"></div>
        </div>
      </div>

    </div>
  )
}
























// // import React, { useState } from 'react';
// import image from './assets/image.jpg';

// export default function Home() {

//   // const [myStyle, setMyStyle] = useState({
//   //   color: "white",
//   //   backgroundColor: "black"
//   // })

//   // const [btntext, setBtnText] = useState("Enable Dark Mode")

//   // const toggleStyle = () => {
//   //   if(myStyle.color === "white"){
//   //     setMyStyle({
//   //         color: "black",
//   //         backgroundColor: "white"
//   //     })
//   //     setBtnText("Enable Light Mode")
//   //   }
//   //   else {
//   //     setMyStyle({
//   //       color: "white",
//   //       backgroundColor: "black"
//   //   })
//   //   setBtnText("Enable Dark Mode");
//   //   }
//   // }

//   return (
//     <div className='home'>
//       <div className='homemain'>
// {/* <div className='setdesign'> */}
//         <p className='hp'>Hey I am</p>
//         <div className='hhdiv'><h1 className='hhone'>Front</h1><h1 className='hhtwo'>end</h1></div>
//         <h1 className='hh'>Developer</h1>
//         <p className='pp'>I am frontend developer based in Pakistan, i will help you build beautiful websites your users will love</p>
//         <div className='homebtnjs'>
//           <button className="btnhomeone"><a href='https://www.indeed.com/career-advice/finding-a-job/how-to-get-a-tech-job'>Get In Tech</a></button>
//           <button className="btnhometwo"><a href='https://www.khanacademy.org/computing/computer-programming/browse'>Browse Projects</a></button>
//         </div>
// {/* </div> */}
//       </div>

//       <div className='rightdiv'>
//         <div className='righttwodiv'>
//           <div>
//             <img className='image' src={image} alt="image" />
//           </div>
//           <div class="animation2"></div>
//         </div>
//       </div>

// {/* <div className=''>
//     <button onClick={toggleStyle} type='button' className=''>{btntext}</button>
// </div> */}

//     </div>
//   )
// }



