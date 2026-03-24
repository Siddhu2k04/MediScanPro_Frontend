import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chatbot />
        <Footer />
    </>
  );
}

export default App;