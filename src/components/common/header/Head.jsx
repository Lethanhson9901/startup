// import React from "react"
// import "./head.css"
// const Head = () => {
//   return (
//     <>
//       <section className='head'>
//         <div className='container flexSB'>
//           <div className='logo'>
//             <h1>EDULINK</h1>
//             <span>BRIDING THE WORLD OF EDUCATION</span>
//           </div>

//           <div className='social'>
//             <i className='fab fa-facebook-f icon'></i>
//             <i className='fab fa-instagram icon'></i>
//             <i className='fab fa-twitter icon'></i>
//             <i className='fab fa-youtube icon'></i>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Head
import React from "react";
import "./head.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            {/* Wrap the text in a Link component */}
            <Link to="/"> 
              <h1>EDULINK</h1>
              <span>BRIDING THE WORLD OF EDUCATION</span>
            </Link>
            
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;

