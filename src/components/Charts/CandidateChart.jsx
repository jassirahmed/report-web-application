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

const data = [
  {
    name: "1/10",
    uv: 5,
    amt: 2400,
    xStroke: "red",
  },
  {
    name: "2/10",
    uv: 7,
    amt: 2210,
  },
  {
    name: "3/10",
    uv: 12,
    amt: 2290,
  },
  {
    name: "4/10",
    uv: 27,
    amt: 2000,
  },
  {
    name: "5/10",
    uv: 20,
    amt: 2181,
  },
  {
    name: "6/10",
    uv: 18,
    amt: 2500,
  },
  {
    name: "7/10",
    uv: 16,
    amt: 2100,
  },
  {
    name: "8/10",
    uv: 5,
    amt: 2100,
  },
  {
    name: "9/10",
    uv: 1,
    amt: 2100,
  },
  {
    name: "10/10",
    uv: 0,
    amt: 2100,
  },
];
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
              fill={index === 7 ? "red" : "#CED2E6"}
            />
          ))}
        </Bar>
      </BarChart>
    </Box>
  );
}
