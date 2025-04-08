import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type TypeItem = {
    id: number,
    title_card: string,
    price: number,
    image: string
}
interface CartState {
    subtotal: number,
    items: TypeItem[]
}

const initialState: CartState = {
    subtotal: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    addItem(state, action: PayloadAction<{id: number, title_card: string, price: number, image: string}>) {
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

export default cartSlice.reducer;