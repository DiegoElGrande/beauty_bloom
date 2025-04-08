export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string
    refreshToken: string
    email: string;
    firstName: string;
    gender: string;
    id: number;
    image: string;
    lastName: string;
    username: string;
}

export interface GetCartsByUserRequest {
    userId: string;
}

export interface GetCartsByUserResponse {
    carts: { id: number; }[];
    total: number;
    skip: number;
    limit: number;
}