import Header from "./components/Header";
import Profile from "./components/profile/Profile";
import DetailCard from "./components/Interview/DetailCard";
import FeedBackCard from "./components/FeedBack/FeedBackCard";
import CandidateChart from "./components/Charts/CandidateChart";
import SkillsAnalysis from "./components/SkillsAnalysis/SkillsAnalysis";
import Questions from "./components/Questions/Questions";
import { Box } from "@mui/material";
import "./App.css";
import Stats from "./components/ChartSection/Stats";

function App() {
  return (
    <Box className="App">
      <Box className="hero-section">
        <Header />
      </Box>
      <Profile />
      <DetailCard />
      <FeedBackCard />
      {/* <CandidateChart /> */}
      <SkillsAnalysis />
      <Questions />
      <Stats />
    </Box>
  );
}

export default App;
