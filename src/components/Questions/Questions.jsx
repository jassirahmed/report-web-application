import React from 'react'
import { Box, Typography } from '@mui/material'
import AllDetails from '../../JSON/AllDetails'

export default function Questions() {
    const QuesitonAnswers = AllDetails.answerData;
    return (
        <Box p='40px' pb='0px'>
            <Box fontSize='40px' fontWeight='700' textAlign='left' color='#130D3C'>Questions</Box>
            {QuesitonAnswers.map((item, i) => (
                <Box key={i} pb='20px'>
                    <Typography textAlign='left' color='#344CB6' fontSize='14px' py='15px'>
                        {item.questions}
                    </Typography>
                    <Box p="15px 20px" bgcolor='#E2E2E2'>
                        <img src={item.answer} alt="" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                    </Box>
                    <Box className='flex' justifyContent='space-between' mt='10px'>
                        <Box className='flex' fontSize='12px' color='#777FAE'>Answer from candidate:
                            <Box ml='3px' color='#00B5A2' fontWeight={600}>{item.result}</Box>
                        </Box>
                        <Box className='flex' fontSize='10px'>
                            <Box width='25px' height='15px' borderRight='1px solid #33333340' pr='10px'>
                                <img src="/images/check.png" style={{ width: '100%', height: '100%' }} alt="" />
                            </Box>
                            <Box color='#130D3C' pl='10px'>Time taken : {item.time}</Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
