import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

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

interface LoginCredentials {
    username: string;
    password: string;
}

const initialState: AuthState = {
    user: null,
    token: null,
    status: 'idle',
    error: null,
};

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials: LoginCredentials, { rejectWithValue }) => {
        try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            username: credentials.username,
            password: credentials.password,
        });
        return response.data;
        } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
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
    extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.token = action.payload.token;
        })
        .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload;
        });
    },
});

export const { logout, clearError } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;