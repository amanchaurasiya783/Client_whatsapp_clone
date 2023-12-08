import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Box, InputBase } from '@mui/material'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendIcon from '@mui/icons-material/Send';
import { uploadFile } from '../service/api';

const Component = styled(Box)`
    background-color: #F0F2F5;
    display: flex;
    padding: 5px 20px;
    width: 100%;
    position: absolute;
    height: 40px;
    bottom: 0;
    gap: 10px;
    align-items: center;
    color: #000 !important;
    & > * {
        cursor: pointer;
    }
`
const RightSection = styled(Box)`
    margin-left: auto;
    display: flex;
    gap: 20px;
`

const InputField = styled(InputBase)`
    background-color: white;
    border-radius: 20px;
    flex-grow: 1;
    padding: 0 15px;
    font-size: 0.9rem;
    font-weight: 500;
`

const ChatFooter = ({ selectedUser, sendText, setText, text, file, setFile, onFileChange }) => {

    useEffect(() => {
        console.log(file);
        if (!file) return;
        if (file) {
            const getImage = async () => {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                console.log(data);

                await uploadFile(data)
                // setFile([]);
            }
            getImage();
        }
    }, [file])

    return (
        <Component>
            <EmojiEmotionsOutlinedIcon />
            <label htmlFor='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AttachFileOutlinedIcon sx={{ transform: 'rotate(40deg)' }} />
            </label>
            <input
                type='file'
                onChange={(e) => onFileChange(e)}
                id='fileInput'
                style={{ display: 'none' }}
            />
            <InputField
                placeholder='Start Chat Here'
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => sendText(e)}
                value={text}
            />
            <RightSection>
                <SendIcon />
            </RightSection>
        </Component>
    )
}

export default ChatFooter
