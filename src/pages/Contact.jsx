import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="contact">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h1>

      <p>Have questions? Get in touch with us 👇</p>

      <motion.form 
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </motion.form>

    </div>
  );
}