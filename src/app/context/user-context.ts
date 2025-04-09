import {createContext} from "react";

type UserContextProps = {
    user: Record<string, unknown>;
    setUser: () => void;
}

export const UserContext = createContext<UserContextProps>()