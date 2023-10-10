'use client';

import { createContext, useContext, useState } from "react";

const UserAccountContext = createContext({})

export const UserAccountContextProvider = ({children}) => {
    const [userAccount, setUserAccount] = useState({});

    return(
        <UserAccountContext.Provider value={{userAccount, setUserAccount}}>
            {children}
        </UserAccountContext.Provider>
    )
}

export const useUserContext = () => useContext(UserAccountContext);