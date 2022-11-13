import Header from "./components/Header";
import Profile from "./components/profile/Profile";
import DetailCard from "./components/Interview/DetailCard";
import FeedBackCard from "./components/FeedBack/FeedBackCard";
import Stats from "./components/ChartSection/Stats";
import ScoreAnalysis from "./components/ScoreAnalysis/ScoreAnalysis";
import SkillsAnalysis from "./components/SkillsAnalysis/SkillsAnalysis";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";
import html2canvas from "html2canvas";
import { useReactToPrint } from 'react-to-print';
import jsPDF from "jspdf";
import { useRef } from "react";
import { Box, Button } from "@mui/material";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgWidth = 210;
      const pageHeight = 300;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;
      heightLeft -= pageHeight;
      const doc = new jsPDF();
      doc.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight, "", "FAST");
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(
          canvas,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight,
          "",
          "FAST"
        );
        heightLeft -= pageHeight;
      }
      doc.save("Downld.pdf");
    });
  };
  // const handlePrint = useReactToPrint({
  //   content: () => inputRef.current,
  // });
  return (
    <Box className="App">
      <Button sx={{ backgroundColor: '#1D4294', color: '#CED2E6', position: 'absolute' }} onClick={printDocument}>Print</Button>
      <Box id="divToPrint" ref={inputRef}>
        <Box className="hero-section">
          <Header />
        </Box>
        <Profile />
        <DetailCard />
        <FeedBackCard />
        <Stats />
        <ScoreAnalysis />
        <SkillsAnalysis />
        <Questions />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
