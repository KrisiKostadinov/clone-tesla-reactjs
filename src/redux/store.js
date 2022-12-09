import { configureStore } from '@reduxjs/toolkit';
import carReducer from './reducers/car';

export const store = configureStore({
    reducer: {
        car: carReducer
    },
});