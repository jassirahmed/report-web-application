import React from 'react'
import { Box } from '@mui/material'

export default function ComparisonCandidate() {
    return (
        <Box p='40px'>
            <Box textAlign='left' fontSize='40px' fontWeight={500}>Comparison With Other Candidate</Box>
            <Box className="flex" pt='10px' >
                <Box width='50%'></Box>
                <Box width='50%' className='flex'>
                    <Box>
                        <Box></Box>
                    </Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
            </Box>
        </Box>
    )
}