import { useState } from "react";
import axios from "axios";
import "./Analyze.css";

export default function PneumoniaAnalyze() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const analyzeImage = async () => {
    if (!file) {
      alert("Please upload a chest X-ray first");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const res = await axios.post(
        "https://your-pneumonia-api-endpoint.com", // 🔴 replace
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error analyzing Pneumonia");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="analyze">
      <h1>Pneumonia Detection</h1>

      <div className="upload-card">
        <input type="file" accept="image/*" onChange={handleUpload} />
        <button onClick={analyzeImage}>Analyze</button>
      </div>

      {file && (
        <div className="preview">
          <img src={URL.createObjectURL(file)} alt="preview" width="300" />
        </div>
      )}

      {loading && <p>Analyzing image...</p>}

      {result && (
        <div className="result">
          <h3>Prediction: {result.disease}</h3>
          <p>Confidence: {result.confidence}%</p>
        </div>
      )}
    </div>
  );
}