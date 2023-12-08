import React, { useContext } from 'react';
import { Box, Dialog, List, ListItem, Typography } from '@mui/material';
import { qrCodeImage } from '../Components/Constants';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import styled from '@emotion/styled';
import { AccountContext } from '../Context/AccountProvider';
import { addUser } from '../service/api';

const dialogStyle = {
    height: "96%",
    maxHeight: "100%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    overflow: 'none',
    boxShadow: 'none'
}

const Component = styled(Box)`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin: 2rem;
    align-items: center;

    @media (max-width: 850px){
        flex-direction: column-reverse;
    }
`
const QrCodeImg = styled('img')({
    maxWidth: 264,
})

export default function Login() {
    const { setAccount } = useContext(AccountContext);

    const OnLoginSuccess = async (res) => {
        const decoded = jwtDecode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }

    const OnLoginFailed = (res) => {
        alert('Login Failed');
        return window.location.reload();
    }

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <Component>
                <Box>
                    <Typography variant='h5'>Use Whatsapp On Your Computer</Typography>
                    <List>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Go to settings by tapping on your profile photo, </ListItem>
                        <ListItem>3. Link a device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                    </List>
                </Box>
                <Box style={{ position: 'relative' }}>
                    <QrCodeImg src={qrCodeImage} alt="qr Code" />
                    <Box style={{ position: 'absolute', top: '40%', left: '2%' }}>
                        <GoogleLogin
                            onSuccess={OnLoginSuccess}
                            onError={OnLoginFailed}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}
