import React, { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { getMessages } from '../service/api'
import Message from './Message'

const Component = styled(Box)`
    width: 100%;
    height: 80vh;
    overflow-y: scroll;
    padding: 10px 25px;
`

const MessageBox = ({ selectedUser, conversation, flag, socket }) => {

    const [messages, setMessages] = useState([]);
    const [incomingMessages, setIncomingMessages] = useState({});

    const scrollRef = useRef();


    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessages({
                ...data,
                createdAt: Date.now()
            })
        })
    })

    useEffect(() => {
        const getMessageDetails = async () => {
            if (!conversation._id) return;
            let message = await getMessages(conversation._id)
            setMessages(message);
        }
        getMessageDetails();
    }, [conversation._id, selectedUser._id, flag])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth' })
    }, [messages])

    useEffect(() => {
        incomingMessages && conversation?.members?.includes(incomingMessages.senderId) && setMessages(prev => [...prev, incomingMessages])
    }, [incomingMessages, conversation])

    return (
        <Component>
            {
                messages.map((message, index) => (
                    <Box ref={scrollRef}>
                        <Message value={message.value} key={index} createdAt={message.createdAt} senderId={message.senderId} />
                    </Box>
                ))
            }
        </Component>
    )
}

export default MessageBox
