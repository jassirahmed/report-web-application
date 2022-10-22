import React from 'react';
import { Box, Typography } from '@mui/material'
import "./Header.css";

export default function Header() {
    return (
        <Box className='Header'>
            <Box className='header-flex'>
                <Box className='left-header'>
                    <Box component={'h1'} className='hero-text'>
                        CANDIDATE
                    </Box>
                    <Box component={'p'} className='hero-small-text'>
                        INTERVIEW REPORT
                        <Box className='border-bottom'></Box>
                    </Box>
                </Box>
                <Box className='right-header'>
                    <Box></Box>
                </Box>
            </Box>
        </Box>
    )
}
