import React, { useState } from "react";
import img6 from "../imgs/img6.png";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [showPassword, setshowPassword] = useState(false);
	const handleClick = () => {
		setshowPassword(!showPassword);
	};

	const [password, setPassWord] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [submitStatus, setSubmitStatus] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault();

		localStorage.setItem("email", email);
		localStorage.setItem("password", password);
		localStorage.setItem("name", name);

		setSubmitStatus(true);
		alert("Signup successful")
		
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassWord(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};



	
	const navigate = useNavigate();
	const redirect = () => {
		navigate("/login");
	};

	if(submitStatus == true){
		redirect()
	}


	return (
		<div className="Signup">
			<div className="signup-image">
				<img src={img6} alt="" />
			</div>

			<form>
				<div className="signup-page">
					<h3>Welcome to Lilies!</h3>
					<input
						type="text"
						name="Name"
						className="email"
						placeholder="Your First Name"
						id="first-name"
						onChange={handleNameChange}
						required
					/>
					<input
						type="text"
						className="email"
						placeholder="Your Email address"
						id="email"
						name="email"
						onChange={handleEmailChange}
						required
					/>
					<div className="signup-flex">
						<input
							type={showPassword ? "text" : "password"}
							className="password-input"
							placeholder="Your Password"
							id="password"
							onChange={handlePasswordChange}
							required
						/>
						<button
							type="button"
							className="show-password"
							onClick={handleClick}
						>
							{showPassword ? "hide" : "show"}
						</button>
					</div>
					
					<button
						type="submit"
						className="signup-btn login-btn"
						onClick= {handleSubmit}
						onSubmit={redirect}
					>
						SIGN UP
					</button>
					<p>
						Already have an account.{" "}
						<Link to="/login" className="route-to-login">
							LOGIN.
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Signup;
