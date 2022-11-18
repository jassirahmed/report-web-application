import React from "react";
import { Box } from "@mui/material";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Label,
} from "recharts";
import AllDetails from '../../JSON/AllDetails'

const data = AllDetails.candidateChartData;
export default function CandidateChart() {
    return (
        <Box>
            <BarChart
                width={600}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 10,
                    bottom: 20,
                }}
            >
                <CartesianGrid strokeOpacity="1" vertical={false} />
                <XAxis dataKey="name">
                    <Label
                        value="Ratings out of 10 it's % of Candidates"
                        offset={-10}
                        position="insideBottom"
                        fill="#777FAE"
                    />
                </XAxis>
                <YAxis
                    type="number"
                    domain={[0, 30]}
                    label={{
                        value: "Candidate count (%)",
                        angle: -90,
                        position: "center",
                        fill: "#777FAE",
                        textAnchor: "middle",
                        offset: -10,
                    }}
                />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar dataKey="uv" radius={8} isAnimationActive={false}>
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={index === 7 ? "#C55FFC" : "#CED2E6"}
                        />
                    ))}
                </Bar>
            </BarChart>
        </Box>
    );
}
