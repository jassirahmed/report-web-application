import React from 'react'
import { Box } from '@mui/material'
import InputRange from 'react-input-range'
import BetterThanIcon from '../Icons/BetterThanIcon'
import "./SkillsAnalysis.css"

export default function SkillsAnalysis() {
    return (
        <Box sx={{ backgroundColor: '#E9EBF3', padding: '40px 40px' }}>
            <Box className='flex' sx={{ color: '#130D3C', justifyContent: 'space-between' }}>
                <Box sx={{ fontSize: '40px', fontWeight: 500, }}>Skills Analysis</Box>
                <Box>
                    Time taken : 40 min / 00 min
                </Box>
            </Box>
            <Box className='flex' sx={{ mt: "20px", padding: '20px 20px', backgroundColor: '#FFFFFF', borderRadius: '8px' }} >
                <Box sx={{ width: '30%', textAlign: 'left' }}>
                    <Box sx={{ color: '#262F74', fontSize: '20px', fontWeight: 500, paddingBottom: '10px' }}>Technical Skills</Box>
                    <Box sx={{ color: '#777FAE', fontSize: '12px', fontWeight: 400 }}>Total marks of technical skills : 60</Box>
                </Box>
                <Box sx={{ width: '30%' }}>
                    <Box className="flex"
                        sx={{
                            color: '#FF5DA1',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pb: '10px',
                            fontSize: "26px",
                            fontWeight: 600,
                        }}
                    >
                        52/
                        <Box sx={{ color: '#130D3C' }}>
                            60
                        </Box>
                    </Box>
                    <Box sx={{ color: '#00B5A2', fontSize: "12px" }}>Very Good</Box>
                </Box>
                <Box sx={{ width: '35%', }}>
                    <Box sx={{ width: '80px', marginLeft: 'auto', textAlign: 'left' }}>
                        <Box sx={{ color: '#130D3C', fontSize: "12px", pb: '10px', }}>Better Than</Box>
                        <Box sx={{
                            color: '#57DDF3',
                            textAlign: 'left',
                            fontSize: "26px",
                            fontWeight: 600,
                            pb: '10px',
                        }}
                        >
                            86%
                        </Box>
                        <Box sx={{ color: '#130D3C', fontSize: "12px" }}>of developers</Box>
                    </Box>
                </Box>
                <Box sx={{ width: '5%' }}>
                    <Box component='span' sx={{}}>
                        <BetterThanIcon />
                    </Box>
                </Box>
            </Box>
            <Box className='flex' sx={{ p: '20px 0px' }}>
                <Box sx={{
                    width: '33.33%',
                    bgcolor: '#FFFFFF',
                    p: '20px 20px'
                }}>
                    <Box sx={{ color: '#344CB6', textAlign: 'left', pb: '10px', fontWeight: 500 }}>MVVM Architecture</Box>
                    <Box className="slider1" width={'100%'}>
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            value={80}
                            formatLabel={value => `${value}%`}
                        />
                    </Box>
                </Box>
                <Box></Box>
                <Box></Box>
            </Box>
        </Box >
    )
}
