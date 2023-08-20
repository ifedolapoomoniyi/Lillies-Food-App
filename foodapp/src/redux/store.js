import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutSlice';

const rootReducer = combineReducers({
    theme: cartReducer,
    checkout: checkoutReducer,
})

const store = configureStore({
    reducer: rootReducer
});

export default store;