import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [Password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleShowPassword = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};
	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleOldPasswordChange = (e) => {
		setOldPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

    if (name === "" || email === "" || Password === "") {
			toast.warning("Please fill all fields");
			return;
    }
		if (oldPassword !== localStorage.getItem("password")) {
			toast.error("Incorrect old password");
			return;
		}
		if (Password === oldPassword) {
			toast.warning("New password cannot be the same as old password");
			return;
		}
		localStorage.setItem("name", name);
		localStorage.setItem("email", email);
		localStorage.setItem("password", Password);
		toast.info("Details changed successfully");
		setTimeout(() => {
			navigate("/dashboard");
		}, 1800);
	};
	return (
		<div className="Profile-page">
			<Sidebar />
			<ToastContainer />

			<div className="profile">
				<h1>Profile</h1>
				<h3>Update your profile details</h3>
				<form action="">
					<label htmlFor="">FirstName</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="first name"
						onChange={handleNameChange}
						required
					/>

					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						required
						onChange={handleEmailChange}
						value={email}
					/>

					<label htmlFor="old-password">Old Password</label>
					<div className="input-button-flexer">
						<input
							type={showPassword ? "text" : "password"}
							name="old-password"
							id="old-password"
							required
							onChange={handleOldPasswordChange}
						/>
						<button className="profile-show-btn" type="button" onClick={handleShowPassword}>
							{showPassword ? "hide" : "show"}
						</button>
					</div>

					<label htmlFor="new-password">New Password</label>
					<input
						type={showPassword ? "text" : "password"}
						name="old-password"
						id="new-password"
						required
						onChange={handlePasswordChange}
					/>

					<button type="submit" className="profile-submit-btn" onClick={handleSubmit}>
						Change Details
					</button>
				</form>
			</div>
		</div>
	);
};

export default Profile;
