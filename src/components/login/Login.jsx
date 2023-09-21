import React, { useState } from "react";
import "./login.css"
// import LoginCard from "./LoginCard"
// import LoginBack from "../common/back/LoginBack"
import Head from "../common/header/Head"
import Footer from "../common/footer/Footer";
import { useHistory } from "react-router-dom";


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }

  const history = useHistory(); // Create a history object

  const handleLoginClick = () => {
    // Define a function to handle the click event
    history.push("/register"); // Use the history object to navigate to the "/login" route
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Head />
      {/* <LoginBack/>
      <LoginCard /> */}
      <section className='login'>
        
            
        <form className="login-form" onSubmit={handleSubmit}>
              <h2>Welcome to EduLink</h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Your email address" id="email" name="email" />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">LOG IN</button>
        </form>
        <button className="link-btn" onClick={handleLoginClick}>Don't have an account? Register here.</button>
        
      </section>
      <Footer/>
    </>
  )
}

export default Login
