import React, { useContext } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { formatDate } from '../utils/common-codes';
import { AccountContext } from '../Context/AccountProvider';

const Wrapper = styled(Box)`
    background-color: #FFFFFF;
    padding: 4px;
    width: fit-content;
    margin-bottom: 4px;
    max-width: 60%;
    word-break: break-word;
    border-radius: 5px;
    display: flex;
    gap: 5px;
`

const Own = styled(Box)`
    background-color: #dcf8c6;
    padding: 4px;
    margin-left: auto;
    margin-bottom: 4px;
    width: fit-content;
    max-width: 60%;
    word-break: break-word;
    border-radius: 5px;
    display: flex;
    gap: 20px;
`

const Text = styled(Typography)`
    font-size: 14px;
`
const Time = styled(Typography)`
    font-size: 10px;
    margin-top: auto;
    word-break: keep-all;
    color: #919191;
`

const Message = ({ value, createdAt, senderId }) => {

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === senderId ?
                    <Own>
                        <Text>{value}</Text>
                        <Time>{formatDate(createdAt)}</Time>
                    </Own>
                    :
                    <Wrapper>
                        <Text>{value}</Text>
                        <Time>{formatDate(createdAt)}</Time>
                    </Wrapper>
            }
        </>
    )
}

export default Message
