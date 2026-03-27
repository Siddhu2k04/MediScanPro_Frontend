import { useState } from "react";
import axios from "axios";
import "./Analyze.css";

export default function Analyze() {
const [file, setFile] = useState(null);
const [result, setResult] = useState(null);
const [loading, setLoading] = useState(false);

const handleUpload = (e) => {
setFile(e.target.files[0]);
setResult(null);
};

const analyzeImage = async () => {
if (!file) {
alert("Please upload an image first");
return;
}

const formData = new FormData();
formData.append("image", file); // ✅ must match Flask

try {
  setLoading(true);

  const res = await axios.post(
    "https://brain-tumor-detection-8yhc.onrender.com", // ✅ DEPLOYED BACKEND
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  setResult(res.data);
} catch (err) {
  console.error(err);
  alert("Error analyzing image");
} finally {
  setLoading(false);
}


};

return ( <div className="analyze"> <h1>Bone Fracture Detection</h1>


  <div className="upload-card">
    <input type="file" accept="image/*" onChange={handleUpload} />
    <button onClick={analyzeImage}>Analyze</button>
  </div>

  {file && (
    <div className="preview">
      <img
        src={URL.createObjectURL(file)}
        alt="preview"
        width="300"
      />
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
