import {UserContext} from '../context/user-context.ts'
import {useEffect, useState} from "react";
import dummyApi from '../../services/dummy-api'

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        dummyApi.getMe().then((r) => setUser(r))
    }, [])

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}