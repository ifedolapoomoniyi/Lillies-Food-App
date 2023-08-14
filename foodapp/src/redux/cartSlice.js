import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Add an item to the cart
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Remove an item from the cart
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    clearCart: state => {
      // Clear the entire cart
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Selector to get the cart items
export const selectCartItems = state => state.cart.items;

// Export the cart reducer
export default cartSlice.reducer;
