import React, { useContext, useState, createContext , useRef, useEffect } from 'react';
import {io} from 'socket.io-client'

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    const socket = useRef()
    const [account, setAccount] = useState(null); // initialize with null or appropriate initial value
    const [person , setPerson] = useState({})
    const [activeUsers , setActiveUsers] = useState({})
    const [change , setChange] = useState(false)

    useEffect(() => {
        socket.current = io("https://chat-server-knbc.onrender.com")
    },[])

    return (
        <AccountContext.Provider value={{ account, setAccount , person , setPerson , socket , activeUsers , setActiveUsers  ,change , setChange}}>
            {children}
        </AccountContext.Provider>
    );
};

export const useAccountContext = () => useContext(AccountContext);

export default AccountProvider;
