import { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import "./Analyze.css";

export default function Analyze() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setResult(null); // reset old result
  };

  const analyzeImage = async () => {
    if (!file) {
      alert("Please upload an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/analyze",
        formData
      );

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error analyzing image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="analyze">

      <h1>Analyze Medical Image</h1>

      {/* Upload Card */}
      <div className="upload-card">

        <input type="file" onChange={handleUpload} />

        <button onClick={analyzeImage}>
          Analyze
        </button>

      </div>

      {/* Image Preview */}
      {file && (
        <div className="preview">
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
          />
        </div>
      )}

      {/* Loader */}
      {loading && <Loader />}

      {/* Result */}
      {result && (
        <div className="result">
          <h3>{result.disease}</h3>
          <p>Confidence: {result.confidence}%</p>
        </div>
      )}

    </div>
  );
}