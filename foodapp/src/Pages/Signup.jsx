import React, { useState } from "react";
import img6 from "../imgs/img6.png";
import "../styles/Signup.css";
import { Link } from 'react-router-dom'

const Signup = () => {
  const [showPassword, setshowPassword] = useState(false);

  const handleClick = () => {
    setshowPassword(!showPassword);
  };
  return (
    <div className="Signup">
      <div className="signup-image">
        <img src={img6} alt="" />
      </div>
      <div className="signup-page">
        <h3>Welcome to Lilies!</h3>
        <input 
        type="text" 
        name="" 
        className="email" 
        placeholder="Your First Name"
        />
        <input 
        type="text" 
        className="email" 
        placeholder="Your Email address"
        />
        <div className="signup-flex">
          <input
            type={showPassword ? "text" : "password"}
            className="password-input"
            placeholder="Your Password"
          />
          <button className="show-password" onClick={handleClick}>show</button>
        </div>
        <button className="signup-btn login-btn">SIGN UP</button>
        <p>Already have an account. <Link to="/login" className="route-to-login">LOGIN.</Link></p>
      </div>
    </div>
  );
};

export default Signup;
