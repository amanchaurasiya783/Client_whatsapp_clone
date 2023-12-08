import React, { useState } from 'react'
import { Box } from '@mui/material'
import MenuBox from './MenuBox';
import styled from '@emotion/styled'
import { defaultProfilePicture } from './Constants';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
// import ProfileDrawer from './ProfileDrawer';

const Component = styled(Box)`
    background-color: #F0F2F5;
    padding: 6px 12px;
    width: 100%;
    display: flex;
    align-items: center;
`

const IconSection = styled(Box)`
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    & > *{
        cursor: pointer;
        color: #000;
    }
`

const DPImage = styled('img')({
    width: "35px",
    height: "35px",
    borderRadius: "50%"
})

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <Component>
            <DPImage src={defaultProfilePicture} alt="dp" onClick={toggleDrawer} />
            <IconSection>
                <GroupsIcon />
                <HistoryToggleOffIcon />
                <ChatIcon />
                <MenuBox />
            </IconSection>
            {/* <ProfileDrawer open={openDrawer} setOpen={setOpenDrawer} /> */}
        </Component>
    )
}

export default Header;