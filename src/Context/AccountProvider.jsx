import { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState();
    const [activeUsers, setActiveUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const socket = useRef();
    const dotenv = require('dotenv').config();

    // const URL = 'ws://localhost:9000';
    const URL = 'https://socket-whatsapp-clone.onrender.com/';
    useEffect(() => {
        socket.current = io(URL)
    }, [])

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            selectedUser,
            setSelectedUser,
            socket,
            activeUsers,
            setActiveUsers
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;