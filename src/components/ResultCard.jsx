export default function ResultCard({ result }) {
  return (
    <div className="card">
      <h2>{result.disease}</h2>
      <p>Confidence: {result.confidence}%</p>
      <p>Status: {result.status}</p>
    </div>
  );
}