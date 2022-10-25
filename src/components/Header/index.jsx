import React from 'react';
import { Box } from '@mui/material'
// import img from '../../../public/images/cliqhr-logo.png'
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
                    <Box className='flex'>
                        <Box className='title-img-1'>
                            <img src='/images/cliqhr-logo.png' alt='' />
                        </Box>
                        <Box className='title-img-2'>
                            <img src='/images/GTS-image.png' alt='' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
