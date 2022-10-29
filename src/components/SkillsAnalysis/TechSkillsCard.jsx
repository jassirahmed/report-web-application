import React from 'react'
import { Box } from '@mui/material'
import InputRange from 'react-input-range'
import './SkillsAnalysis.css'

const TechnicalSkills = [
    {
        title: 'MVVM Architecture',
        value: 80,
        marks: '9/10',
        review: 'Excellent',
    },
    {
        title: 'Android Feature',
        value: 100,
        marks: '12/12',
        review: 'Excellent',
    },
    {
        title: 'Kotlin',
        value: 80,
        marks: '8/10',
        review: 'Good',
    },
    {
        title: 'Design Pattern',
        value: 90,
        marks: '9/10',
        review: 'Excellent',
    },
    {
        title: 'Guard Rails ( Linting Tools , SONAR)',
        value: 75,
        marks: '6/10',
        review: 'Good',
    },
    {
        title: 'Unti Test ( Junit , E2e , Test )',
        value: 80,
        marks: '8/10',
        review: 'Good',
    }
]

export default function TechSkillsCard() {
    return (
        <Box className='flex' sx={{ pt: '20px', flexDirection: 'row', gap: '25px', flexWrap: 'wrap' }}>
            {TechnicalSkills.map((item, i) => (
                <Box sx={{ width: '32%', }}>
                    <Box sx={{
                        bgcolor: '#FFFFFF',
                        p: '20px 20px',
                        borderRadius: '8px'
                    }}>
                        <Box sx={{ color: '#344CB6', textAlign: 'left', fontWeight: 500 }}>{item.title}</Box>
                        <Box className="slider1" width={'100%'} pt='10px'>
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
                                        fontSize: '10px',
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
            ))}
        </Box>
    )
}
