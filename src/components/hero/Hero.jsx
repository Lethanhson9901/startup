import React from "react"
import { useHistory } from "react-router-dom";
// import Heading from "../../common/heading/Heading"
import "./hero.css"

const Hero = () => {

  const history = useHistory(); // Create a history object

  const handleLoginClick = () => {
    // Define a function to handle the click event
    history.push("/login"); // Use the history object to navigate to the "/login" route
  };
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <div id='heading'>
              <h3>WELCOME TO EDULINK</h3>
              <h1>Study Abroad Programs</h1>
            </div>
            {/* <Heading subtitle='WELCOME TO EDULINK' title='Study Abroad Programs' /> */}
            <p>Go EduLink is here to take the guesswork out from finding you the best study abroad programs.</p>
            <div className='button'>
              <button className='primary-btn' onClick={handleLoginClick}>
                LOGIN NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW PROGRAM <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
