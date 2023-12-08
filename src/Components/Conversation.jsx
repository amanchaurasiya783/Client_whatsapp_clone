import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../Context/AccountProvider'
import { setConversation } from '../service/api'

const Component = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;
    height: 60px;
    width: 100%;
    padding: 0 14px;
    cursor: pointer;
`

const Image = styled('img')({
    width: 40,
    height: 40,
    borderRadius: "50%"
})

const Conversation = ({ user }) => {
    const { setSelectedUser, account } = useContext(AccountContext);

    const getSelectedUser = async () => {
        setSelectedUser(user);
        await setConversation({ senderId: account.sub, recieverId: user.sub })
    }
    return (
        <Component onClick={getSelectedUser}>
            <Box>
                <Image src={user.picture} alt="user dp" />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
                <Typography sx={{ fontSize: '0.9rem' }}>{user.message ? user.message : ``}</Typography>
            </Box>
        </Component>
    )
}

export default Conversation
