import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
};

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        checkout: (state, action) => {
            state.cart.push(action.payload);
        }        
    }
})


export const { checkout } = checkoutSlice.actions;

export default checkoutSlice.reducer;