import React, { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";
import { checkout } from "../redux/checkoutSlice";
import { logOut } from "../redux/LoggedIn";

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
	const handleshowCheckout = () => {
		setShowCheckout(!showCheckout);
	};
	const handleLogout = () => {
		dispatch(logOut());
	};
	const cartItems = useSelector((state) => state.cart.items);
	const checkoutItems = useSelector((state) => state.checkout.cart);
	const redirect = useNavigate();

	function handleClearCart() {
		dispatch(clearCart());
		localStorage.removeItem("cart");
		if (cartItems.length === 0) {
			toast.warning("Cart is already empty", { autoClose: 2000 });
			return;
		}
		toast.success("Cart cleared");
	}

	function handleCheckout() {
		if (cartItems.length === 0) {
			toast.warning("Cart is empty");
			return;
		}
		dispatch(checkout(cartItems));
		dispatch(clearCart());
		toast.success("Checkout successful");
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
			<ToastContainer autoClose={3000} />
			<div className={isNavOpen ? "Sidebar active" : "Sidebar"}>
				<Link to={"/"} className="sidebar-logo">
					<img
						src={logo}
						alt=""
						onClick={() => {
							redirect("/");
						}}
						style={{ cursor: "pointer" }}
					/>
					<span>Lilies</span>
				</Link>
				<div className="sidebar-flexer">
					<div className="dashboard-link" onClick={handleNavOpen}>
						<Link
							className="sidebar-links"
							to={"/dashboard"}
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
					<div className="profile-link" onClick={handleNavOpen}>
						<Link
							className="sidebar-links"
							to={"/profile"}
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
					<div className="orders-link" onClick={handleshowCheckout}>
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
							<Badge
								badgeContent={checkoutItems.length}
								color="secondary"
							>
								<LocalShipping />
							</Badge>
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
							<Badge
								badgeContent={cartItems?.length}
								color="secondary"
							>
								<ShoppingCart />
							</Badge>
							Your Cart
						</Link>
					</div>
					<div className="logout">
						<Link
							className="sidebar-links"
							to={"/"}
							onClick={handleLogout}
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
						<button
							className="checkout-btn"
							onClick={handleCheckout}
						>
							Checkout
						</button>
						<button
							type="button"
							className="clear-btn"
							onClick={handleClearCart}
						>
							Clear Cart
						</button>
					</div>
				</div>
			) : null}

			{/* Show checkout modal*/}

			{showCheckout ? (
				<div className="checkout-container">
					<div
						className="checkout-blur"
						onClick={handleshowCheckout}
					></div>

					<div className="checkout-modal">
						<div className="checkout-modal-header">
							<div className="checkout-modal-header-first">
								Item
							</div>
							<div>Qty</div>
							<div>Status</div>
						</div>

						{checkoutItems.length === 0 ? (
							<div>
								<h2 style={{ textAlign: "center" }}>
									No orders
								</h2>
							</div>
						) : (
							<div>
								{" "}
								{checkoutItems?.map((item, index) => {
									return (
										<div>
											<h3
												style={{
													margin: "10px 0",
													paddding: 0,
												}}
											>
												Batch {index + 1}
											</h3>
											{item.map((item) => {
												return (
													<div className="checkout-item">
														<div className="checkout-item-name">
															{item.name}
														</div>
														<div>{item.amount}</div>
														<h4 className="checkout-status">
															Cooking
														</h4>
													</div>
												);
											})}
										</div>
									);
								})}
							</div>
						)}
					</div>
				</div>
			) : null}

			<div className={isNavOpen ? "hamburger active" : "hamburger"}>
				<span className="bar side"></span>
				<span className="bar side"></span>
				<span className="bar side"></span>
			</div>
		</>
	);
};

export default Sidebar;
