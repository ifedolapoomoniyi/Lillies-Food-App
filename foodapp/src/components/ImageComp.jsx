import React from "react";
import "../styles/ImageComp.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice"

export const cartStore = []

const storeToLocalStorage = () => {
localStorage.setItem("cart", JSON.stringify(cartStore))
}

const ImageComp = (props) => {
	const body = props.body;
	const head = props.head;
	const [openModal, setopenModal] = useState(false);
	const [number, setnumber] = useState(1);
	const obj = {
		name: props.name,
		price: props.price,
		amount: number,
		total: props.price * number,
	}

	const dispatch = useDispatch();

	function handleAddToCart() {
		dispatch(addItem(obj));
	}

	const handleCartStore = ()=>{
		cartStore.push(obj)
		storeToLocalStorage()
		toast.success("Added to Cart")
		handleAddToCart()
	}

	const handleOpen = () => {
		setopenModal(true);
	};
	const handleClose = () => {
		setopenModal(false);
	};
	const handleAdd = () => {
		setnumber(number + 1);
	};
	const handleSubstract = () => {
		if (number <= 0) {
			setnumber(0);
			return;
		}
		setnumber(number - 1);
	};

	return (
		<div className="ImageComp">
			<ToastContainer/>
			<img src={props.image} alt="" />
			<h3 style={{ color: head }}>{props.name}</h3>
			<p style={{ color: body }}>{props.text}</p>
			<div className="price-and-cart">
				{props.price ? (
					<div className="price">#{props.price}</div>
				) : (
					<></>
				)}
				{props.cart ? (
					<div className="add-to-cart">
						<button onClick={handleOpen}>Add to cart</button>
					</div>
				) : (
					<></>
				)}
			</div>
			{props.children}

			{/* Modal section */}

			{openModal ? (
				<div className="modalflexer">
					<div className="blur" onClick={handleClose}></div>
					<div className="modal-prop ImageComp">
						<img src={props.image} alt="" />
						<h3>{props.name}</h3>
						<p>{props.text}</p>
						<p>{props.about}</p>
						<div className="price">NGN {props.price}</div>

						<div className="increment">
							<button onClick={handleSubstract}>-</button>
							{number}
							<button onClick={handleAdd}>+</button>
						</div>
						<button onClick={handleCartStore} className="add-to-cart-btn">Add to Cart</button>

						<div className="close-btn">
							<button onClick={handleClose}>X</button>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
			
		</div>
	);
};

export default ImageComp;
