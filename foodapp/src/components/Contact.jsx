import React from "react";
import "../styles/Contact.css";
import { useState } from "react";

const Contact = () => {

    const [email, setEmail] = useState("");
    
    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        console.log(email);
    };

    const options = {
		method: "POST",
		body: JSON.stringify({
            my_email: "ifedolapo0001@gmail.com",
            message: "Hello, welcome to Lillies, thank you for subscribing!",
            first_name: "Dear",
            last_name: "Customer",
            title: "Welcome to Lillies!",
            user_email: "ifedolapo0001@gmail.com"
        }),
	};

    const handleSubmit = (e) => {
		e.preventDefault();
		fetch("https://email-backend.cyclic.app/message/send", options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	};


	return (
		<div className="Contact">
			<div className="contact-text">
				<h3>Get notified when we update!</h3>
				<div>
					Get notified when we add new items to our specials menu,
					update our price list when we have promos!
				</div>
			</div>
			<div className="contact-input">
				<input
					type="email"
					className="contact-input-box"
					placeholder="randomuser@gmail.com"
                    onChange={handleEmailChange}
				/>
				<button className="contact-submit-btn" onClick={handleSubmit}>
					Get notified
				</button>
			</div>
		</div>
	);
};

export default Contact;
