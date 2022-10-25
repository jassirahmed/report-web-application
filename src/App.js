import Header from './components/Header';
import Profile from './components/profile/Profile';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box className="App">
      <Box className="hero-section">
        <Header />
      </Box>
      <Profile />
    </Box>
  );
}

export default App;
