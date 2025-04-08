import { configureStore } from '@reduxjs/toolkit';
import cart from '../../features/cart/cartSlice.ts';
import {authReducer} from "../../features/auth/authSlice.ts";
import {dummyApi} from "../../services/dummy.ts";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;