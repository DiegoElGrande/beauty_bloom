import {createSlice} from '@reduxjs/toolkit'
import {User} from "./types.ts";
import {dummyApi} from "../../services/dummy.ts";

export interface AuthState {
    user: User | null;
    accessToken: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            dummyApi.endpoints.login.matchFulfilled,
            (state, { payload: { accessToken, refreshToken, ...user } }) => {
                state.accessToken = accessToken
                state.user = user
                localStorage.setItem("refreshToken", refreshToken);
            },
        )
    },
})

export const authReducer = authSlice.reducer