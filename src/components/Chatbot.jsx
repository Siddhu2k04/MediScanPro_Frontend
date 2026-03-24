import { useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    { text: "👋 Hello! Ask me anything about MediScan Pro.", sender: "bot" }
  ]);

  // 🔥 FAQ DATA
  const faq = [
    {
      question: "what is this",
      answer: "MediScan Pro is an AI system that analyzes medical images like X-rays and MRI."
    },
    {
      question: "how to use",
      answer: "Go to Analyze page → Upload image → Click Analyze."
    },
    {
      question: "what diseases can detect",
      answer: "It can detect brain tumors, abnormalities in X-rays, and more."
    },
    {
      question: "is it accurate",
      answer: "Our AI model provides high accuracy (~95%) but should assist doctors, not replace them."
    },
    {
      question: "who created this",
      answer: "This project is developed for a Gen AI Hackathon."
    }
  ];

  const sendMessage = () => {
    if (!msg.trim()) return;

    const userMsg = { text: msg, sender: "user" };

    // 🔥 Find matching answer
    const found = faq.find(item =>
      msg.toLowerCase().includes(item.question)
    );

    const botMsg = {
      text: found
        ? found.answer
        :  "🤖 I can assist with MediScan Pro features, medical image analysis, and usage. Please ask related questions .",
      sender: "bot"
    };

    setMessages([...messages, userMsg, botMsg]);
    setMsg("");
  };

  // 🔥 CLEAR CHAT WHEN CLOSED
  const handleClose = () => {
    setOpen(false);
    setMessages([
      { text: "👋 Hello! Ask me anything about MediScan Pro.", sender: "bot" }
    ]);
  };

  return (
    <div className="chatbot">

      {/* FLOATING BUTTON */}
      <button className="chat-btn" onClick={() => setOpen(!open)}>
        <img src="/chatbot-icon.png" alt="chatbot" />
      </button>

      {/* CHATBOX */}
      {open && (
        <div className="chatbox">

          {/* HEADER */}
          <div className="header">
            <h4>MediScan AI</h4>
            <span onClick={handleClose}>✖</span>
          </div>

          {/* BODY */}
          <div className="body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                {m.text}
              </div>
            ))}
          </div>

          {/* QUICK QUESTIONS */}
          <div className="quick-questions">
            <button onClick={() => setMsg("how to use")}>How to use?</button>
            <button onClick={() => setMsg("what diseases can detect")}>Diseases?</button>
            <button onClick={() => setMsg("is it accurate")}>Accuracy?</button>
          </div>

          {/* INPUT */}
          <div className="footer">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>

        </div>
      )}
    </div>
  );
}