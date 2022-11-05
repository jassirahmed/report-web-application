import React from 'react'
import { Box } from '@mui/material'
import './ScoreAnalysis.css'

export default function ScoreAnalysis() {
    return (
        <Box className='score-analysis'>
            <Box p='100px 40px'>
                <Box className='flex' justifyContent='space-between'>
                    <Box width='30%' textAlign='left' color='#FFFFFF'>
                        <Box fontSize='40px' fontWeight='700' pb='25px'>Score Analysis</Box>
                        <Box width='300px' display='flex' flexWrap='wrap' fontSize='20px' fontWeight='500' lineHeight='40px' >
                            Tamizharasan scored
                            <Box pl='5px' fontWeight='700' color='#00B5A2'>80 %</Box>
                            and completed assessment in
                            <Box pr='5px' fontWeight='700' color='#FEA303'>100 %</Box>
                            of the allotted time
                        </Box>
                    </Box>
                    <Box className='flex'>
                        <Box width='50%'></Box>
                        <Box width='50%'></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
