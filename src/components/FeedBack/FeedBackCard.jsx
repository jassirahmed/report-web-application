import React from 'react'
import { Box } from '@mui/material'
import './FeedBack.css'
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
                            Good
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
                            Ok
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
                            Good
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ textAlign: 'left', padding: '20px 40px', color: '#FFFFFF' }}>
                <Box sx={{ paddingBottom: '20px' }}>
                    MVVM : candidate is very good in design patterns and he clearly demonstrated the MVVM using examples and the code coupling.
                </Box>
                <Box sx={{ paddingBottom: '20px' }}>
                    ANR : very well known to the problem and knows the methods to rectify it. services understands the foreground services and looper services in - depth and also well versed in communication data between services and activities. Multithreading : good in managing multiple threads and knows when to use them.
                </Box>
                <Box sx={{ paddingBottom: '20px' }}>
                    system design and project knowledge is very good and he very well knows about the data flow from start to end for each of the user in his current project.
                </Box>
                <Box sx={{ paddingBottom: '20px' }}>
                    He is good in creating test cases, good experience in CI / CD pipelines. He has more than 4 years of experience in kotlin.
                </Box>
                <Box>
                    Coding Question And Feedback good in programming and he wrote the code quickly for some problem statement which clarifying his standard of programming. Overall the candidate was good and very knowledgeable . he is very good to have as per the JD mentioned. so recommended .
                </Box>
            </Box>
        </Box>
    )
}
