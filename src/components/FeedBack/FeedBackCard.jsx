import React from 'react'
import { Box } from '@mui/material'
import './FeedBack.css'
export default function FeedBackCard() {
    return (
        <Box className="fb-bgImage">
            <Box className="flex" sx={{ padding: '40px' }}>
                <Box sx={{ width: '40%', fontSize: '28px', fontWeight: '700', textAlign: 'left', color: '#FFFFFF' }}>Feedback</Box>
                <Box className='flex' sx={{ width: '60%' }}>
                    <Box className='flex'
                        sx={{
                            width: '180px',
                            border: '1px solid #FFFFFF',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingY: '10px',
                            borderRadius: '8px',
                            backgroundColor: '#FFFFFF33'
                        }}>
                        <Box>Clarity</Box> :
                        <Box
                            sx={{
                                color: '#FFFFFF'
                            }}>
                            Good
                        </Box>
                    </Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
            </Box>
        </Box>
    )
}
