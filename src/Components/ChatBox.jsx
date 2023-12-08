import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import MessageBox from './MessageBox'
import ChatFooter from './ChatFooter'
import styled from '@emotion/styled'
import { chatBackground } from './Constants'
import { AccountContext } from '../Context/AccountProvider'
import { getConversation, newMessage } from '../service/api'



const Component = styled(Box)`
    width: 100%;
    background-image: url(${chatBackground});
    background-size: 50%;
    background-repear: no-repeat;
    height: 100%;
    position:relative;
`

const ChatBox = () => {

    const { selectedUser, account, socket } = useContext(AccountContext)
    const [text, setText] = useState('');
    const [conversation, setConversation] = useState({});
    const [flag, setFlag] = useState(false);
    const [file, setFile] = useState();

    useEffect(() => {
        const getConversationDetails = async () => {
            if (!selectedUser.sub) return;
            let data = await getConversation({ senderId: account.sub, recieverId: selectedUser.sub });
            setConversation(data);
        }

        getConversationDetails();
    }, [selectedUser.sub, account.sub]);

    const onFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const sendText = async (e) => {
        const key = e.keyCode || e.which;
        if (key === 13) {
            if (text && text.trim()) {
                let message = {
                    senderId: account.sub,
                    recieverId: selectedUser.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    value: text.trim()
                }
                socket.current.emit('sendMessage', message);
                await newMessage(message);
            }
            setText('')
            setFlag(!flag)
        }
    }

    return (
        <Component>
            <ChatHeader selectedUser={selectedUser} />
            <MessageBox selectedUser={selectedUser} flag={flag} socket={socket} conversation={conversation} />
            <ChatFooter selectedUser={selectedUser} onFileChange={onFileChange} text={text} file={file} setFile={setFile} setText={setText} sendText={sendText} />
        </Component>
    )
}

export default ChatBox
