import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import img5 from "../imgs/img5.png";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);

  const handleClick = () => {
    setshowPassword(!showPassword);
  };

  return (
    <div className="Login-page">
      <div className="login-image">
        <img src={img5} alt="Delicious food" />
      </div>
      <div className="login">
        <h2>Welcome Back!</h2>
        <input
          type="email"
          className="email"
          placeholder="Your Email address"
        />
        <div className="password-container">
          <input
            className="password-input"
            placeholder="Your Password"
            type={showPassword ? "text" : "password"}
          />
          <button className="show-password" onClick={handleClick}>
            show
          </button>
        </div>
        <button type="button" className="login-btn">LOGIN</button>
        <div className="create-acc">
          <div className="forgot">
            <Link className="forgot" to={"/signup"}>
                Create an account
             </Link>
          </div>
          <div className="forgot">
            <Link to={""} className="forgot">
            Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
