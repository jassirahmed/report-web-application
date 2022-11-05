import Header from "./components/Header";
import Profile from "./components/profile/Profile";
import DetailCard from "./components/Interview/DetailCard";
import FeedBackCard from "./components/FeedBack/FeedBackCard";
import ComparisonCandidate from "./components/Comparison/ComparisonCandidate";
import CandidateChart from "./components/Charts/CandidateChart";
import ScoreAnalysis from "./components/ScoreAnalysis/ScoreAnalysis";
import SkillsAnalysis from "./components/SkillsAnalysis/SkillsAnalysis";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
import "./App.css";

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
      <ComparisonCandidate />
      <ScoreAnalysis />
      <SkillsAnalysis />
      <Questions />
      <Footer />
    </Box>
  );
}

export default App;
