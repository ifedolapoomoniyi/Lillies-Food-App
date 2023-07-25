import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import img5 from "../imgs/img5.png";

const Login = () => {
	const [showPassword, setshowPassword] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setshowPassword(!showPassword);
	};

	const [password, setPassWord] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const dashboard = () => {
		navigate("/dashboard");
	};

	const handleSubmit = (e) => {
		if (
			email == localStorage.getItem("email") &&
			password == localStorage.getItem("password")
		) {
			alert("Login successful");
			dashboard();
		} else {
			alert("Incorrect email or password");
			// window.location.reload();
		}
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassWord(e.target.value);
	};

	return (
		<div className="Login-page">
		  <div className="login-image">
				<img src={img5} alt="Delicious food" />
			</div>

			<form>
				<div className="login">
					<h2>Welcome Back!</h2>
					<input
						type="email"
						className="email"
						placeholder="Your Email address"
						autoFocus
						id="email"
						onChange={handleEmailChange}
						required
					/>
					<div className="password-container">
						<input
							className="password-input"
							placeholder="Your Password"
							type={showPassword ? "text" : "password"}
							id="password"
							onChange={handlePasswordChange}
							required
						/>
						<button className="show-password" onClick={handleClick}>
							{showPassword ? "hide" : "show"}
						</button>
					</div>
					<button
						type="submit"
						className="login-btn"
						onClick={handleSubmit}
            autoFocus
					>
						LOGIN
					</button>
					<div className="create-acc">
						<div className="forgot">
							<Link className="forgot" to={"/signup"}>
								Create an account
							</Link>
						</div>
						<div className="forgot">
							<Link to={"/dashboard"} className="forgot">
								Forgot Password
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
