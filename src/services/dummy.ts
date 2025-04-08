import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {GetCartsByUserRequest, GetCartsByUserResponse, LoginRequest, LoginResponse} from "./types.ts";
import {RootState} from "../app/store/store.ts";

export const dummyApi = createApi({
    reducerPath: 'dummyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com', prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.accessToken
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        }, }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        cartsByUser: builder.query<GetCartsByUserResponse, GetCartsByUserRequest>({
            query: (params) => `carts/user/${params.userId}`
        })
    }),
})

export const { useLoginMutation } = dummyApi
