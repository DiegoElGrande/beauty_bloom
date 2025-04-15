export const REFRESH_TOKEN_KEY = 'refresh_token';
export const setRefreshToken = (token: string) => { localStorage.setItem(REFRESH_TOKEN_KEY, token) };
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
export const deleteRefreshToken = () => localStorage.removeItem(REFRESH_TOKEN_KEY);