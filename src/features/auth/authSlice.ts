import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type AuthType = {
    username: string | null,
    token: string | null
}

const initialState: AuthType = {
    username: null,
    token: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<AuthType>) {
            state.username = action.payload.username;
            state.token = action.payload.token;
            }
    },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;