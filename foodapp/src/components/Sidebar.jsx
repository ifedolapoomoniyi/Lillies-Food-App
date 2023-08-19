import React, { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import { UilHome } from "@iconscout/react-unicons";
import { Badge } from "@mui/material";
import {
	ShoppingCart,
	AccountBox,
	LocalShipping,
	Logout,
} from "@mui/icons-material";
import logo from "../imgs/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const Sidebar = (props) => {
	const dispatch = useDispatch();
	const [showCart, setShowCart] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [showCheckout, setShowCheckout] = useState(false);
	const handleNavOpen = () => {
		setIsNavOpen(!isNavOpen);
	};
	const handleShowCart = () => {
		setShowCart(!showCart);
	};
	const cartItems = useSelector((state) => state.theme.items);
	
	function handleClearCart() {
		dispatch(clearCart());
		toast.success("Cart cleared")
	}

	useEffect(() => {
		const hamburger = document.querySelector(".hamburger");

		hamburger.addEventListener("click", handleNavOpen);

		return () => {
			hamburger.removeEventListener("click", handleNavOpen);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isNavOpen]);

	return (
		<>
			<ToastContainer/>
			<div className={isNavOpen ? "Sidebar active" : "Sidebar"}>
				<div className="sidebar-logo">
					<img src={logo} alt="" />
					<span>Lilies</span>
				</div>
				<div className="sidebar-flexer">
					<div className="dashboard-link">
						<Link
							className="sidebar-links"
							to={""}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "8px",
							}}
						>
							<UilHome />
							Dashboard
						</Link>
					</div>
					<div className="profile-link">
						<Link
							className="sidebar-links"
							to={""}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "8px",
							}}
						>
							<AccountBox />
							Your Profile
						</Link>
					</div>
					<div className="orders-link">
						<Link
							className="sidebar-links"
							to={""}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "8px",
							}}
						>
							{" "}
							<LocalShipping />
							Orders
						</Link>
					</div>
					<div className="cart-link" onClick={handleShowCart}>
						<Link
							className="sidebar-links"
							to={""}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "8px",
							}}
						>
							<Badge badgeContent={cartItems?.length} color="secondary">
								<ShoppingCart />
							</Badge>
							Your Cart
						</Link>
					</div>
					<div className="logout">
						<Link
							className="sidebar-links"
							to={"/"}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "8px",
							}}
						>
							<Logout />
							Logout
						</Link>
					</div>
				</div>
			</div>

			{showCart ? (
				<div className="cart-container">
					<div className="cart-blur" onClick={handleShowCart}></div>
					<div className="cart-main-container">
						<div className="cart-header">
							<div className="cart-header-first">Item</div>
							<div>Qty</div>
							<div>Price</div>
							<div>Sub-total</div>
						</div>

						{cartItems?.map((item) => {
							return (
								<div className="cartStore-item">
									<div className="cartStore-item-name">
										{item.name}
									</div>
									<div>{item.amount}</div>
									<h4>{item.price}</h4>
									<h4>{item.total}</h4>
								</div>
							);
						})}
						<div className="cart-total">
							Total:{" "}
							<b>
								NGN{" "}
								{cartItems?.reduce(
									(acc, item) => acc + item.total,
									0
								)}
							</b>
						</div>
						<button className="checkout-btn">Checkout</button>
						<button type="button" className="clear-btn" onClick={handleClearCart}>Clear Cart</button>
					</div>
				</div>
			) : null}


			{/* Show checkout */}

			{showCheckout? 
			<div className="checkout-container">
				<div className="blur"></div>

				<div className="checkout-modal">
					<div className="checkout-modal-header">
						<div className="checkout-modal-header-first">
							Item
						</div>
						<div>Qty</div>
						<div>Price</div>
						<div>Status</div>
					</div>
				</div>

			</div>
			: null}


			<div className={isNavOpen ? "hamburger active" : "hamburger"}>
				<span className="bar side"></span>
				<span className="bar side"></span>
				<span className="bar side"></span>
			</div>
		</>
	);
};

export default Sidebar;
