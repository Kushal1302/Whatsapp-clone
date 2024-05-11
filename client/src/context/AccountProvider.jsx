import React, { useContext, useState, createContext } from 'react';

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState(null); // initialize with null or appropriate initial value
    const [person , setPerson] = useState({})

    return (
        <AccountContext.Provider value={{ account, setAccount , person , setPerson }}>
            {children}
        </AccountContext.Provider>
    );
};

export const useAccountContext = () => useContext(AccountContext);

export default AccountProvider;
