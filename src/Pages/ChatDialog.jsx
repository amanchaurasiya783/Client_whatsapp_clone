import React, { useContext, useState } from 'react';
import { Box, Dialog } from '@mui/material';
import Header from '../Components/Header';
import styled from '@emotion/styled';
import Search from '../Components/Search';
import { emptyChatImage } from '../Components/Constants';
import ConversationBox from '../Components/ConversationBox';
import ChatBox from '../Components/ChatBox';
import { AccountContext } from '../Context/AccountProvider';

const dialogStyle = {
    flexDirection: 'row',
    height: "94%",
    maxHeight: "100%",
    margin: "20px",
    width: "100vw",
    maxWidth: "100%",
    position: 'relative',
    boxShadow: 'none',
    overflow: 'hidden'
}

const LeftSection = styled(Box)`
    width: 30%;
    min-width: 300px;
    height: 100%;
    border-right: 1px solid rgb(230,230,230);
`

const RightSection = styled(Box)`
    width: 70%;
    min-width: 300px;
    background-color: #F8FAFB;
    height: 100%;
    display: flex;
    flex-direction: row;
`

const EmptyChatImage = styled('img')({
    width: '70%',
    margin: 'auto',
    alignSelf: 'center'
})

const ChatDialog = () => {
    const { selectedUser } = useContext(AccountContext);
    const [text, setText] = useState('');
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <LeftSection>
                <Header />
                <Search setText={setText} />
                <ConversationBox text={text} />
            </LeftSection>
            <RightSection>
                {Object.keys(selectedUser).length ? <ChatBox /> : <EmptyChatImage src={emptyChatImage} alt="empty chat" />}
            </RightSection>
        </Dialog>
    )
}

export default ChatDialog