import styled from '@emotion/styled'
import { Box, InputBase } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Component = styled(Box)`
    width: 100%;
    padding: 6px 12px;
`

const SearchBar = styled(Box)`
    background-color: #F0F2F5;
    width: 100%;
    padding: 2px 15px;
    border-radius: 6px;
    display: flex;
    gap: 6px;
    align-items: center;
`

const Search = ({ setText }) => {
    return (
        <Component>
            <SearchBar>
                <SearchIcon sx={{ fontSize: "1.2rem" }} aria-label='search' />
                <InputBase
                    sx={{ ml: 1, flex: 1, fontSize: "0.9rem" }}
                    placeholder="Search or Start New Chat"
                    onChange={(e) => setText(e.target.value)}
                    inputProps={{ 'aria-label': 'Search or Start New Chat' }}
                />
            </SearchBar>
        </Component>
    )
}

export default Search
