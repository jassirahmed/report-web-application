import React, { useEffect } from 'react'
import './profile.css'
import { Box } from '@mui/material'
import BetterThanIcon from '../Icons/BetterThanIcon'
import HeartIcon from '../Icons/HeartIcon'
import RankIcon from '../Icons/RankIcon'
import ScoreIcon from '../Icons/ScoreIcon'
import AllDetails from '../../JSON/AllDetails'

export default function Profile() {
    console.log(AllDetails.personImg, 'AllDetails');
    useEffect(() => {

    }, [])

    return (
        <Box
            className='profile-card flex'
            sx={{
                backgroundColor: '#E9EBF3',
                padding: '0px 40px'
            }}>
            <Box sx={{ width: '25%' }}>
                <Box
                    className='profile-img'
                    sx={{
                        width: 100,
                        height: 100,
                        border: '5px solid #FEA303',
                        borderRadius: '50%',
                        backgroundImage: `url(${AllDetails.personImg})`
                    }}>
                </Box>
                <Box
                    sx={{
                        color: '#130D3C',
                        fontSize: '20px',
                        textAlign: 'left',
                        padding: '10px 0px',
                        fontWeight: 800
                    }}>
                    {AllDetails.personName}
                </Box>
                <Box
                    sx={{
                        padding: '4px 0px',
                        textAlign: 'center',
                        backgroundColor: '#00B5A21A',
                        color: '#00B5A2',
                        width: 150,
                        fontSize: '10px'
                    }}>
                    {AllDetails.status}
                </Box>
                <Box sx={{
                    fontSize: '12px',
                    color: '#777FAE',
                    textAlign: 'left',
                    paddingTop: '10px'
                }}>{AllDetails.yearOfExperience} Years of experience</Box>
            </Box>
            <Box sx={{ width: "75%", padding: '20px 0px 20px 20px', alignItems: 'start' }} className='flex'>
                <Box sx={{ width: '30%', textAlign: 'left', padding: '20px' }}>
                    <Box sx={{ padding: '20px', height: '180px', backgroundColor: '#FFFFFF', borderRadius: '25px' }}>
                        <Box><ScoreIcon /></Box>
                        <Box sx={{ color: '#130D3C', fontSize: '16px', padding: '10px 0px' }} >Score</Box>
                        <Box sx={{ color: '#C55FFC', fontSize: '20px', fontWeight: 700, paddingBottom: '10px' }}>{AllDetails.score}</Box>
                        <Box>{AllDetails.grade}</Box>
                    </Box>
                </Box>
                <Box sx={{ width: '30%', textAlign: 'left', padding: '20px' }}>
                    <Box sx={{ padding: '20px', height: '180px', backgroundColor: '#FFFFFF', borderRadius: '25px' }}>
                        <Box><RankIcon /></Box>
                        <Box sx={{ color: '#130D3C', fontSize: '16px', padding: '10px 0px' }}>Rank</Box>
                        <Box sx={{ color: '#FF5DA1', fontSize: '20px', fontWeight: 700 }}>{AllDetails.rank}</Box>
                    </Box>
                </Box>
                <Box sx={{ width: '30%', textAlign: 'left', padding: '20px' }}>
                    <Box sx={{ padding: '20px', height: '180px', backgroundColor: '#FFFFFF', borderRadius: '25px' }}>
                        <Box><HeartIcon /></Box>
                        <Box sx={{ color: '#130D3C', fontSize: '16px', padding: '10px 0px' }} >Recommendation</Box>
                        <Box sx={{ color: '#00B5A2', fontSize: '20px', fontWeight: 700, paddingBottom: '10px' }}>{AllDetails.recomendation}</Box>
                        <Box sx={{ color: '#777FAE', fontSize: '10px' }}>Strong Reject, Reject,<br /> Hire, Strong Hire</Box>
                    </Box>
                </Box>
                <Box sx={{ width: '30%', textAlign: 'left', padding: '20px' }}>
                    <Box sx={{ padding: '20px', height: '180px', backgroundColor: '#FFFFFF', borderRadius: '25px' }}>
                        <Box><BetterThanIcon /></Box>
                        <Box sx={{ color: '#130D3C', fontSize: '16px', padding: '10px 0px' }} >Better Than</Box>
                        <Box sx={{ color: '#36C3DA', fontSize: '20px', fontWeight: 700, paddingBottom: '10px' }}>{AllDetails.betterThan}</Box>
                        <Box sx={{ color: '#130D3C', fontSize: '16px' }}>of developers</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
