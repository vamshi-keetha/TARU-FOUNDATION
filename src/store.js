import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice.js';
import customerReducer from './slices/customerSlice.js';

export const store = configureStore({
    reducer:{
        users : userReducer,
        customer :customerReducer
    }
})