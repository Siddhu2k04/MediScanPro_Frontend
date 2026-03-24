import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2>MediScan Pro</h2>
          <p>
            AI-powered medical image analysis system to assist doctors
            in faster and more accurate diagnosis.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/analyze">Analyze</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@mediscanpro.com</p>
          <p>Location: India</p>

          <div className="social-icons">
            <FaGithub />
            <FaLinkedin />
            <FaEnvelope />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 MediScan Pro | All Rights Reserved
      </div>

    </footer>
  );
}