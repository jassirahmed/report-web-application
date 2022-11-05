import React from 'react'
import { Box } from '@mui/material'
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import './ScoreAnalysis.css'

Chart.register(ArcElement);

const data = {
    datasets: [
        {
            data: [3, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            backgroundColor: [
                "#336699",
                "#99CCFF",
                "#999933",
                "#666699",
                "#CC9933",
                "#006666",
                "#3399FF",
                "#993300",
                "#CCCC99",
                "#666666",
                "#FFFFFF",
                "#FFFFFF",
                "#FFFFFF"
            ],
            display: true,
            borderColor: "#D1D6DC"
        }
    ]
};

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
                        <Box width='50%'>
                            <Doughnut
                                data={data}
                                height='50%'
                                width='50%'
                                options={{
                                    plugins: {
                                        legend: {
                                            display: false
                                        },
                                        tooltip: {
                                            enabled: false
                                        }
                                    },
                                    rotation: -90,
                                    circumference: 180,
                                    cutout: "60%",
                                    maintainAspectRatio: true,
                                    responsive: true
                                }}
                            />
                        </Box>
                        <Box width='50%'></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
