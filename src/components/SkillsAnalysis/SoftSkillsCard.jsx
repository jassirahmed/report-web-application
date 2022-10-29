import React from 'react'
import { Box } from '@mui/material'
import InputRange from 'react-input-range'
import './SkillsAnalysis.css'

const SoftSkills = [
    {
        title: 'Project Knowledge',
        value: 75,
        marks: '6/8',
        review: 'Good',
    },
    {
        title: 'Android Feature',
        value: 80,
        marks: '8/10',
        review: 'Excellent',
    },
    {
        title: 'Kotlin',
        value: 50,
        marks: '4/8',
        review: '2-5 Members',
    },
    {
        title: 'Client Handling',
        value: 50,
        marks: '4/8',
        review: 'Above Average',
    },
    {
        title: 'Android Feature',
        value: 66.6,
        marks: '4/6',
        review: 'Above Average',
    }
]

export default function SoftSkillsCard() {
    return (
        <Box className='flex' sx={{ pt: '20px', flexDirection: 'row', gap: '25px', flexWrap: 'wrap' }}>
            {SoftSkills.map((item, i) => (
                <Box sx={{ width: '32%', }}>
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
