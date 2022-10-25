import React from 'react'
import { Box, Typography } from '@mui/material'

export default function DetailCard() {
    return (
        <Box sx={{
            padding: '20px 40px',
            backgroundColor: '#F7F8FF'
        }}>
            <Box className="flex"
                sx={{
                    paddingBottom: '10px'
                }}>
                <Box sx={{ width: '60%', color: '#3782C3' }}>Interview Details</Box>
                <Box sx={{ width: '40%', color: '#3782C3' }}>Interview Details</Box>
            </Box>
            <Box className="flex"
                sx={{
                    alignItems: 'baseline',
                    flexWrap: 'wrap'
                }}>
                <Box sx={{ width: '60%', paddingTop: '5px', borderRight: '1px solid #33333342' }}>
                    <Box className='flex' sx={{ width: '100%', textAlign: 'left', paddingBottom: '10px' }}>
                        <Box className='flex' sx={{ fontSize: '14px', width: '35%' }}>
                            <Box sx={{ marginRight: '5px', color: '#130D3C' }}>Round: </Box>
                            <Typography sx={{ fontSize: '14px', color: '#344CB6' }}>First Level Technical Interview</Typography>
                        </Box>
                        <Box sx={{ width: '21.66%', fontSize: '14px', color: '#130D3C' }}>
                            Date of interview
                        </Box>
                        <Box sx={{ width: '21.66%', fontSize: '14px', color: '#130D3C' }}>
                            Time of interview
                        </Box>
                        <Box sx={{ width: '21.66%', fontSize: '14px', color: '#130D3C' }}>
                            Duration of interview
                        </Box>
                    </Box>
                    <Box className='flex' sx={{ width: '100%', textAlign: 'left', paddingBottom: '10px' }}>
                        <Box className='flex' sx={{ fontSize: '14px', width: '35%' }}>
                            <Box sx={{ marginRight: '5px', color: '#130D3C' }}>Role Maturity: </Box>
                            <Typography sx={{ fontSize: '14px', color: '#344CB6' }}>Experienced</Typography>
                        </Box>
                        <Box sx={{ width: '21.66%', fontSize: '14px', color: '#344CB6' }}>
                            Jun 28 , 2022
                        </Box>
                        <Box sx={{ width: '21.66%', fontSize: '14px', color: '#344CB6' }}>
                            11.00 am
                        </Box>
                        <Box sx={{ width: '21.66%', fontSize: '14px', color: '#344CB6' }}>
                            1 Hour
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '40%', paddingTop: '5px', paddingLeft: '20px' }}>
                    <Box className='flex' sx={{ width: '100%', textAlign: 'left', fontSize: '14px', color: '#130D3C', paddingBottom: '10px' }} >
                        <Box sx={{ width: '33.33%' }}>Interviewer name</Box>
                        <Box sx={{ width: '33.33%' }}>Mode of interview</Box>
                        <Box sx={{ width: '33.33%' }}>Type of interview</Box>
                    </Box>
                    <Box className='flex' sx={{ width: '100%', textAlign: 'left', fontSize: '14px', color: '#344CB6' }} >
                        <Box sx={{ width: '33.33%' }}>Krishnan, HR</Box>
                        <Box sx={{ width: '33.33%' }}>Zoom meeting</Box>
                        <Box sx={{ width: '33.33%' }}>Online test</Box>
                    </Box>
                </Box>
                <Box sx={{ textAlign: 'left', color: '#777FAE', textTransform: 'capitalize', fontSize: '14px' }}>
                    (Fresher, Mid, Experienced)
                </Box>
            </Box>
        </Box>
    )
}
