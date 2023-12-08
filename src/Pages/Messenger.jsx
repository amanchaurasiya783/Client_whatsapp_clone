import React, { useContext } from 'react';
import { AppBar, Box, Toolbar, styled } from '@mui/material';
import Login from './Login';
import { AccountContext } from '../Context/AccountProvider';
import ChatDialog from './ChatDialog';

const Header = styled(AppBar)`
    height: 220px;
    background-color: #00A884;
    box-shadow: none;
`

const Component = styled(Box)`
    height: 100vh;
    width: 100vw;
    background-color: #DCDCDC;
`

const Messenger = () => {

    const { account } = useContext(AccountContext);
    return (
        <Component>
            <Header>
                <Toolbar>
                </Toolbar>
            </Header>
            {account ? <ChatDialog /> : <Login />}
        </Component>
    )
}

export default Messenger
