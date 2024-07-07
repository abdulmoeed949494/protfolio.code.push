import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Skills from "./Skills";
// import Products from "./Products";
// import Contact from "./Contact";
// import Cart from "./Cart";
// import SingleProduct from "./SingleProduct";
// import ErrorPage from "./ErrorPage";
// import { GlobalStyle } from "./GlobalStyle";
// import { ThemeProvider } from "styled-components";
// import Header from "./Header";
// import Footer from "./components/Footer";

const App = () => {
  return (
      <Router>
        {/* <Header /> */}
        <nav>
          <div className="btnmain">
          <Link className="homebtn" to="/"><button>Home</button></Link>
          <Link className="aboutbtn" to="/about"><button>About</button></Link>
          <Link className="skillsbtn" to="/skills"><button>Skills</button></Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
  );
};

export default App;











// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";
// // import Products from "./Products";
// // import Contact from "./Contact";
// // import Cart from "./Cart";
// // import SingleProduct from "./SingleProduct";
// // import ErrorPage from "./ErrorPage";
// // import { GlobalStyle } from "./GlobalStyle";
// // import { ThemeProvider } from "styled-components";
// // import Header from "./Header";
// // import Footer from "./components/Footer";

// const App = () => {
//   return (
//       <Router>
//         {/* <Header /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           {/* <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/singleproduct/:id" element={<SingleProduct />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="*" element={<ErrorPage />} /> */}
//         </Routes>
//       </Router>
//   );
// };

// export default App;