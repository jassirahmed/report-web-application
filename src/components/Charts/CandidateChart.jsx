import React from 'react'
import { Box } from '@mui/material'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, } from 'recharts'

const data = [
    {
        name: '1/10',
        uv: 5,
        amt: 2400,
        xStroke: 'red'
    },
    {
        name: '2/10',
        uv: 7,
        amt: 2210,
    },
    {
        name: '3/10',
        uv: 12,
        amt: 2290,
    },
    {
        name: '4/10',
        uv: 27,
        amt: 2000,
    },
    {
        name: '5/10',
        uv: 20,
        amt: 2181,
    },
    {
        name: '6/10',
        uv: 18,
        amt: 2500,
    },
    {
        name: '7/10',
        uv: 16,
        amt: 2100,
    },
    {
        name: '8/10',
        uv: 5,
        amt: 2100,
    },
    {
        name: '9/10',
        uv: 1,
        amt: 2100,
    },
    {
        name: '10/10',
        uv: 0,
        amt: 2100,
    },
];
export default function CandidateChart() {
    return (
        <Box>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeOpacity="1" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis type='number' domain={[0, 30]} />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="uv" fill="#CED2E6" barSize={30} radius={8} isAnimationActive={false} />
            </BarChart>
        </Box>
    )
}
