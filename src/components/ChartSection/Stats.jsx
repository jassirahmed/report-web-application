import { Box, Card, Typography } from "@mui/material";
import React from "react";
import CandidateChart from "../Charts/CandidateChart";
export default function Stats() {
  const StatsData = [
    {
      percentage: "99%",
      color: "#c910f5",
      prior: "Lesser",
      comparison: "than",
    },
    {
      percentage: "1%",
      color: "#dfbf23",
      prior: "same",
      comparison: "as",
    },
    {
      percentage: "0%",
      color: "#e947c6",
      prior: "Higher",
      comparison: "than",
    },
  ];
  return (
    <Box bgcolor={"#fff"} p={"50px"}>
      <Box textAlign={"left"}>
        <Box as={"h1"} fontSize={"45px"} fontWeight={"800"} color={"#130D3C"}>
          Comparision With Other Candidate
        </Box>
        <Box display={"flex"} alignItems="center" width={"100%"}>
          <Box width={"50%"} bgcolor={"#fff"} p={"15px"}>
            <CandidateChart />
          </Box>
          <Box width={"50%"} bgcolor={"#ffffff"}>
            <Box display={"flex"} alignItems={"center"}>
              {StatsData.map((item, i) => (
                <Box
                  p={"15px"}
                  key={i}
                  m={"0px 10px"}
                  width={"33.33%"}
                  lineHeight={"25px"}
                >
                  <Box
                    color={item.color}
                    fontSize={"20px"}
                    marginBottom={"5px"}
                    fontWeight={"600"}
                  >
                    {item.percentage}
                  </Box>
                  <Box fontSize={"17px"} fontWeight={"600"} color={"#00080e9e"}>
                    Candidate have
                    <br />
                    <Box as={"span"} color={"cyan"}>
                      {item.prior}
                    </Box>
                    <br /> Rating {item.comparison} <br /> Thamiz Arasam
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
