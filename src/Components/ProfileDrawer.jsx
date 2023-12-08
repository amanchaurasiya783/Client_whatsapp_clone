import React from 'react'
import { Drawer } from '@mui/material'

const ProfileDrawer = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    const drawerStyle = {
        boxShadow: 'none',
        zIndex: 1500,
        left: '50px'
    }

    return (
        <Drawer
            sx={drawerStyle}
            open={open}
            onClose={handleClose}
        // hideBackdrop={true}
        >
            Hello
        </Drawer>
    )
}

export default ProfileDrawer