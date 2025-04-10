import {useState} from "react";
import {getRefreshToken} from "../../services/dummy-api/utils/refresh-token-storage.ts";
import {AuthContext} from "../context/auth-context.tsx";

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!getRefreshToken())

    return (<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>{children}</AuthContext.Provider>);
}