import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user: User | null;
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
}

const initialState: AuthState = {
    user: null,
    token: null,
    status: 'idle',
    error: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.token = action.payload.accessToken;
            state.status = 'succeeded';
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.status = 'idle';
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { login, logout, clearError } = authSlice.actions;

export default authSlice.reducer;