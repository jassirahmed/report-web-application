import React from 'react'
import { Box } from '@mui/material'
import WorldIcon from '../Icons/WorldIcon'
import MessageIcon from '../Icons/MessageIcon'
import MediaIcons from '../Icons/MediaIcons'
import './footer.css'

export default function Footer() {
    return (
        <Box position='relative' className='footer'>
            <Box color='#122562' className='end-report flex' justifyContent='center' >End Of the report</Box>
            <Box className='flex' width='100%' justifyContent='space-between' p='0px 40px' position='absolute' bottom='18px' alignItems='end'>
                <Box color='#FFFFFF' fontSize='16px'>
                    <Box className='flex' mb='16px'>
                        <Box width='18px' height='18px' mr='15px'><WorldIcon /></Box>
                        <Box>www.cliqhr.com</Box>
                    </Box>
                    <Box className='flex'>
                        <Box width='18px' height='18px' mr='15px'><MessageIcon /></Box>
                        <Box>careers@cliqhr.co.in</Box>
                    </Box>
                </Box>
                <Box>
                    <Box height='20px'>
                        <MediaIcons />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
