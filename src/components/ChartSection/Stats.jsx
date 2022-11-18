import { Box, Card, Typography } from "@mui/material";
import CandidateChart from "../Charts/CandidateChart";
import React from "react";
import AllDetails from "../../JSON/AllDetails";
// import CandidateChart from "../Charts/CandidateChart";
export default function Stats() {
  const StatsData = AllDetails.statsData;
  return (
    <Box bgcolor={"#fff"} p={"50px"}>
      <Box textAlign={"left"}>
        <Box as='h1' textAlign='left' fontSize='40px' fontWeight={500}>Comparison With Other Candidate</Box>
        <Box display={"flex"} width={"100%"} alignItems='center'>
          <Box
            width={"50%"}
            bgcolor={"#fff"}
            p={"15px"}
          >
            <CandidateChart />
          </Box>
          <Box width={"50%"} bgcolor={"#ffffff"}>
            <Box
              display={"flex"}
              alignItems={"center"}
            >
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
                    <br /> Rating {item.comparison} <br /> {AllDetails.personName}
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
