import React from "react";
import "../styles/Dashboard.css";
import ImageComp from "./ImageComp";
import { Food } from "../data/data";
import Avatar from "../imgs/Avatar.jpg"



const Dashboard = () => {

	return (
		<div className="Dashboard">
			<div className="dashboard-header">
				<div className="dashboard-header-welcome">
					<h3>Good morning, {localStorage.getItem("name")}!</h3>
					<div>What delicious meal are you craving today?</div>

				</div>
				<img src={Avatar} alt="Profile" />
			</div>
			<div className="dashboard-body">
					{Food.map((item) => {
						return (
				<div className="dashboard-image" key={item.name}>
							<ImageComp
								name={item.name}
								text={item.description}
								image={require("../imgs/" + item.img + ".png")}
                                price={item.price}
                                cart={item.cart}
                                about={item.about}
							>
                            </ImageComp>
				</div>
                
						);
					})}
			</div>
		</div>
	);
};

export default Dashboard;
