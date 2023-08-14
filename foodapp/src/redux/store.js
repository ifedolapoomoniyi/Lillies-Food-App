import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const store = configureStore({
    reducer: {
        theme: cartSlice,
    },
});

export default store;