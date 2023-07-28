import React, { useState } from "react";
import "../styles/Dashboard.css";
import ImageComp from "./ImageComp";
import { Food } from "../data/data";

const Dashboard = () => {

	return (
		<div className="Dashboard">
			<div className="dashboard-header">
				<h3>Good morning, {localStorage.getItem("name")}!</h3>
				<img src="" alt="Profile" />
			</div>
			<div className="dashboard-body">
					{Food.map((item, key) => {
						return (
				<div className="dashboard-image">
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
