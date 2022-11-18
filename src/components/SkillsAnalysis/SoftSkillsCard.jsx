import React from 'react'
import { Box } from '@mui/material'
import InputRange from 'react-input-range'
import AllDetails from '../../JSON/AllDetails'
import './SkillsAnalysis.css'

const SoftSkills = AllDetails.softSkills;

export default function SoftSkillsCard() {
    const handleChange = () => { }
    return (
        <Box className='flex' sx={{ pt: '20px', flexDirection: 'row', gap: '25px', flexWrap: 'wrap' }}>
            {SoftSkills.map((item, i) => (
                <Box key={i} sx={{ width: '32%', }}>
                    <Box sx={{
                        bgcolor: '#FFFFFF',
                        p: '20px 20px',
                        borderRadius: '8px'
                    }}>
                        <Box sx={{ color: '#344CB6', textAlign: 'left', fontWeight: 500 }}>{item.title}</Box>
                        <Box className="slider1" width={'100%'} py='10px'>
                            <Box className='flex'>
                                <InputRange
                                    maxValue={100}
                                    minValue={0}
                                    value={item.value}
                                    formatLabel={value => `${value}%`}
                                    allowSameValues={true}
                                    onChange={handleChange}
                                />
                                <Box
                                    sx={{
                                        width: '10%',
                                        textAlign: 'left',
                                        paddingLeft: '10px',
                                        color: '#130D3C',
                                        fontSize: '0.8rem',
                                    }}>
                                    {item.value}%
                                </Box>
                            </Box>
                        </Box>
                        <Box className='flex' sx={{ justifyContent: 'space-between', py: '10px' }}>
                            <Box sx={{ color: '#FF771B', fontSize: '20px', fontWeight: 500 }}>{item.marks}</Box>
                            <Box sx={{ color: '#00B5A2', fontSize: '16px', fontWeight: 500 }}>{item.review}</Box>
                        </Box>
                        <Box sx={{ textAlign: 'left', color: '#777FAE', fontSize: '10px' }} >Marks</Box>
                    </Box>
                </Box>
            ))
            }
        </Box >
    )
}
