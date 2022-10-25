import Header from './components/Header';
import Profile from './components/profile/Profile';
import DetailCard from './components/Interview/DetailCard';
import FeedBackCard from './components/FeedBack/FeedBackCard';
import { Box } from '@mui/material';
import './App.css';
function App() {
  return (
    <Box className="App">
      <Box className="hero-section">
        <Header />
      </Box>
      <Profile />
      <DetailCard />
      <FeedBackCard />
    </Box>
  );
}

export default App;
