import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
import PneumoniaAnalyze from "./pages/PneumoniaAnalyze";
import XrayAnalyze from "./pages/XrayAnalyze";
import MRIAnalyze from "./pages/MRIAnalyze";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/analyze/pneumonia" element={<PneumoniaAnalyze />} />
        <Route path="/analyze/xray" element={<XrayAnalyze />} />
        <Route path="/analyze/mri" element={<MRIAnalyze />} />
      </Routes>
      <Chatbot />
        <Footer />
    </>
  );
}

export default App;