import React from 'react'
import { Box } from '@mui/material'
import './FeedBack.css'
import AllDetails from '../../JSON/AllDetails'

export default function FeedBackCard() {
    return (
        <Box className="fb-bgImage">
            <Box className="flex" sx={{ padding: '40px' }}>
                <Box sx={{ width: '40%', fontSize: '40px', fontWeight: '700', textAlign: 'left', color: '#FFFFFF' }}>Feedback</Box>
                <Box className='flex' sx={{ width: '60%', justifyContent: 'space-evenly' }}>
                    <Box className='flex'
                        sx={{
                            width: '180px',
                            border: '1px solid #FFFFFF',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingY: '10px',
                            borderRadius: '8px',
                            backgroundColor: '#FFFFFF33',
                            color: '#FFFFFF',
                        }}>
                        <Box
                            sx={{
                                fontWeight: 400,
                                marginRight: '5px'
                            }}
                        >Clarity</Box> :
                        <Box
                            sx={{
                                fontWeight: 600,
                                marginLeft: '5px'
                            }}>
                            {AllDetails.clarity}
                        </Box>
                    </Box>
                    <Box className='flex'
                        sx={{
                            width: '180px',
                            border: '1px solid #FFFFFF',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingY: '10px',
                            borderRadius: '8px',
                            backgroundColor: '#FFFFFF33',
                            color: '#FFFFFF',
                        }}>
                        <Box
                            sx={{
                                fontWeight: 400,
                                marginRight: '5px'
                            }}
                        >
                            Communication</Box> :
                        <Box
                            sx={{
                                fontWeight: 600,
                                marginLeft: '5px'
                            }}>
                            {AllDetails.communication}
                        </Box>
                    </Box>
                    <Box className='flex'
                        sx={{
                            width: '180px',
                            border: '1px solid #FFFFFF',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingY: '10px',
                            borderRadius: '8px',
                            backgroundColor: '#FFFFFF33',
                            color: '#FFFFFF',
                        }}>
                        <Box
                            sx={{
                                fontWeight: 400,
                                marginRight: '5px'
                            }}
                        >Confidence</Box> :
                        <Box
                            sx={{
                                fontWeight: 600,
                                marginLeft: '5px'
                            }}>
                            {AllDetails.confidence}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ textAlign: 'left', padding: '20px 40px', color: '#FFFFFF' }}>
                {AllDetails.feedBack.map((feedback, i) => (
                    <Box sx={{ paddingBottom: '20px' }}>
                        {feedback.feedBacks}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
