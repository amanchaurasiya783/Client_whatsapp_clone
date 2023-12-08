import React, { useEffect, useState, useContext } from 'react'
import { getAllUsers } from '../service/api'
import { Box, Divider } from '@mui/material';
import Conversation from './Conversation';
import { AccountContext } from '../Context/AccountProvider';
import styled from '@emotion/styled';

const Component = styled(Box)`
    height: 79vh;
    overflow: overlay;
`

const ConversationBox = ({ text }) => {

    const [users, setUsers] = useState([]);
    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getAllUsers();
            const filterData = response.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUsers', account);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users.map((user, index) => (
                    (user.sub !== account.sub) &&
                    <>
                        <Conversation key={index} user={user} />
                        <Divider />
                    </>
                ))
            }
        </Component>
    )
}

export default ConversationBox
