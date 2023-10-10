import React, {createContext, useContext, useState} from 'react';

export const UserAccountContext = createContext({});

const UserAccountProvider = ({ children }) => {
    const [userAccount, setUserAccount] = useState(UserAccountContext);
    // const userAccount = useContext(UserAccountContext);

    return (
        <UserAccountContext.Provider value={{ userAccount,setUserAccount }}>
            {children}
        </UserAccountContext.Provider>
    );
};

export default UserAccountProvider