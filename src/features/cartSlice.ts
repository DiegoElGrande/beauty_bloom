import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CartProps = {
    title_card: string;
    price: number;
    id: number;
    image: string,
    new?: boolean,
    bestseller?: boolean,
    description?: string
}
interface CartState {
    subtotal: number,
    items: CartProps[]
}

const initialState: CartState = {
    subtotal: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    addItem(state, action: PayloadAction<CartProps>) {
        state.items.push(action.payload);
    },
    removeItem(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
        state.items = [];
    },
}
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export type { CartProps }

export default cartSlice.reducer;