function ScoreCard({ score, verdict, shouldApply }) {
  const color = score >= 70 ? "#3B6D11" : score >= 50 ? "#854F0B" : "#A32D2D";
  const bg    = score >= 70 ? "#EAF3DE" : score >= 50 ? "#FAEEDA" : "#FCEBEB";

  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e5e5e5",
      borderRadius: "12px",
      padding: "24px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{
          width: "80px", height: "80px", borderRadius: "50%",
          background: bg, color: color,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ fontSize: "26px", fontWeight: "600" }}>{score}</span>
          <span style={{ fontSize: "11px" }}>/ 100</span>
        </div>
        <div>
          <div style={{ fontSize: "18px", fontWeight: "600" }}>{verdict}</div>
          <div style={{ fontSize: "14px", color: color, marginTop: "4px", fontWeight: "500" }}>
            {shouldApply
              ? "✓ You can apply — match is above 70%"
              : "✗ Below threshold — build missing skills first"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;