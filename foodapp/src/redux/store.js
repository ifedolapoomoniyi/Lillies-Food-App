import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutSlice';
import isLoggedInReducer from './LoggedIn';

const rootReducer = combineReducers({
    cart: cartReducer,
    checkout: checkoutReducer,
    isLoggedIn: isLoggedInReducer
})

const store = configureStore({
    reducer: rootReducer
});

export default store;