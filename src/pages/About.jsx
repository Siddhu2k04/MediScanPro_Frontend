import "./About.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="about">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Our Project
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        This project uses Artificial Intelligence to assist doctors in analyzing 
        medical images such as X-rays and MRI scans. It helps detect anomalies 
        quickly and accurately, improving diagnosis and saving time.
      </motion.p>

      {/* Cards Section */}
      <div className="about-cards">

        <motion.div 
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>🧠 AI Technology</h3>
          <p>
            Uses deep learning models like CNN to analyze medical images 
            and detect diseases.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>⚡ Fast Analysis</h3>
          <p>
            Provides quick predictions with high accuracy, helping doctors 
            make faster decisions.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>🏥 Healthcare Impact</h3>
          <p>
            Reduces workload of doctors and improves patient care using AI.
          </p>
        </motion.div>

      </div>

    </div>
  );
}