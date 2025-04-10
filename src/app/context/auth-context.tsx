import {createContext} from 'react';

type ContextProps = {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const AuthContext = createContext<ContextProps>({
    isAuthenticated: false,
    setIsAuthenticated: () => {}
});

