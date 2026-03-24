import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";
import CountUp from "react-countup";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <div className="home">

        {/* HERO SECTION */}
        <div className="hero">

          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1>MediScan Pro</h1>
            <h2>AI-Powered Medical Image Analysis</h2>

            <p>
              Detect anomalies in X-rays, MRI, and CT scans using advanced AI.
              Improve diagnosis speed and accuracy with intelligent insights.
            </p>

            <div className="hero-buttons">
              <Link to="/analyze">
                <button className="btn-primary">Analyze Now</button>
              </Link>

              <Link to="/about">
                <button className="btn-secondary">Learn More</button>
              </Link>
            </div>
          </motion.div>

          {/* VIDEO */}
          <motion.div 
            className="hero-animation"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <video 
              src="/206173_medium.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="hero-video"
            />
          </motion.div>

        </div>

        {/* 🔥 STATS SECTION */}
        <div className="stats">

  <div>
    <h2>
      <CountUp end={95} duration={3} />%
    </h2>
    <p>Accuracy</p>
  </div>

  <div>
    <h2>
      <CountUp end={10000} duration={3} separator="," />+
    </h2>
    <p>Images Analyzed</p>
  </div>

  <div>
    <h2>
      <CountUp end={500} duration={3} />+
    </h2>
    <p>Doctors Assisted</p>
  </div>

</div>
        {/* FEATURES */}
        <div className="features">
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <h3>🧠 AI Detection</h3>
            <p>Deep learning models detect diseases from scans.</p>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <h3>⚡ Fast Analysis</h3>
            <p>Instant results with high accuracy.</p>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <h3>📊 Smart Reports</h3>
            <p>Confidence scores and detailed output.</p>
          </motion.div>
        </div>

        {/* 🧠 HOW IT WORKS */}
        <div className="how">
          <h2>How It Works</h2>

          <div className="steps">
            <div>📤 Upload Image</div>
            <div>🤖 AI Analysis</div>
            <div>📋 Get Result</div>
          </div>
        </div>

        {/* 🏥 SUPPORTED SCANS */}
        <div className="scans">
          <h2>Supported Scans</h2>
          <p>X-ray | MRI | CT Scan | Brain Tumor Detection</p>
        </div>

        {/* 💬 TESTIMONIAL */}
        <div className="testimonial">
          <p>
            "MediScan Pro helped us reduce diagnosis time significantly."
          </p>
          <h4>- Medical Expert</h4>
        </div>

        {/* 🎯 CTA */}
        <div className="cta">
          <h2>Start Your AI Diagnosis Today</h2>
          <Link to="/analyze">
            <button className="btn-primary">Upload Image</button>
          </Link>
        </div>

      </div>

     
    </>
  );
}