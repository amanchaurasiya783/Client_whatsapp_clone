import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AccountContext } from '../Context/AccountProvider';

const Component = styled(Box)`
    background-color: #F0F2F5;
    display: flex;
    padding: 5px 20px;
    height: 50px;
    width: 100%;
    gap: 10px;
    align-items: center;
    color: #000 !important;
    & > *{
        cursor: pointer;
    }
`
const Image = styled('img')({
    width: 40,
    height: 40,
    borderRadius: "50%"
})

const RightSection = styled(Box)`
    margin-left: auto;
    display: flex;
    gap: 20px;
`

const ChatHeader = ({ selectedUser }) => {
    const { activeUsers } = useContext(AccountContext);

    return (
        <Component>
            <Image src={selectedUser.picture} alt="user dp" />
            <Box>
                <Typography>{selectedUser.name}</Typography>
                <Typography sx={{ fontSize: '0.8rem' }}>{activeUsers?.find(user => user.sub === selectedUser.sub) ? 'Online' : 'Offline'}</Typography>
            </Box>
            <RightSection>
                <SearchIcon />
                <MoreVertIcon />
            </RightSection>
        </Component>
    )
}

export default ChatHeader
