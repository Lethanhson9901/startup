import React, { useState } from "react";
import "./register.css"
import Head from "../common/header/Head";
import Footer from "../common/footer/Footer";
import { useHistory } from "react-router-dom";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const [gender, setGender] = useState(''); // Initialize gender state
    const [dob, setDob] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (pass === repeatPass) {
            console.log("Password Match:", email, name, gender);
        } else {
            alert("Passwords do not match");
        }
    }

    const history = useHistory(); // Create a history object

    const handleRegClick = () => {
      // Define a function to handle the click event
      history.push("/login"); // Use the history object to navigate to the "/login" route
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>  
            <Head/>      
            <section className="register">
                
                <form className="register-form" onSubmit={handleSubmit}>
                <h2>ACCOUNT REGISTRATION</h2>
                    <label className="label-left-align" htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Your Full Name" />

                    <label className="label-left-align" htmlFor="dob">Date of Birth</label>
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} id="dob" name="dob"/>

                    {/* Gender dropdown */}
                    <label className="label-left-align" htmlFor="gender">Gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} id="gender" name="gender">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>                   

                    <label className="label-left-align" htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                    {/* Gender dropdown */}
                    <label className="label-left-align" htmlFor="role">You are looking for</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} id="gender" name="gender">
                        <option value="">Select... </option>
                        <option value="azubi">Azubi</option>
                        <option value="betrieb">Betrieb</option>
                        {/* <option value="none">Nothing</option> */}
                    </select>


                    <label className="label-left-align" htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                    <label className="label-left-align" htmlFor="repeat-password">Repeat Password</label>
                    <input value={repeatPass} onChange={(e) => setRepeatPass(e.target.value)} type="password" placeholder="********" id="repeat-password" name="repeat-password" />


                    <button type="submit">SIGN UP</button>
                </form>
                <button className="link-btn" onClick={handleRegClick}>Already have an account? Login here.</button>
            </section>
            <Footer/>
        </>

    )
}