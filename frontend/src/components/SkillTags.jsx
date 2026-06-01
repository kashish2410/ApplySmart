function Tag({ label, type }) {
  const styles = {
    matched: { background: "#EAF3DE", color: "#3B6D11", border: "1px solid #C0DD97" },
    missing: { background: "#FCEBEB", color: "#A32D2D", border: "1px solid #F7C1C1" },
    partial: { background: "#FAEEDA", color: "#854F0B", border: "1px solid #FAC775" },
  };

  return (
    <span style={{
      ...styles[type],
      fontSize: "13px", padding: "4px 12px",
      borderRadius: "20px", display: "inline-block",
    }}>
      {label}
    </span>
  );
}

function SkillTags({ matched, missing, partial }) {
  return (
    <div style={{
      background: "#fff", border: "1px solid #e5e5e5",
      borderRadius: "12px", padding: "24px",
      display: "flex", flexDirection: "column", gap: "16px"
    }}>
      {matched.length > 0 && (
        <div>
          <div style={{ fontSize: "13px", fontWeight: "500", color: "#444", marginBottom: "8px" }}>
            ✓ Skills you have
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {matched.map(s => <Tag key={s} label={s} type="matched" />)}
          </div>
        </div>
      )}

      {missing.length > 0 && (
        <div>
          <div style={{ fontSize: "13px", fontWeight: "500", color: "#444", marginBottom: "8px" }}>
            ✗ Skills to build
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {missing.map(s => <Tag key={s} label={s} type="missing" />)}
          </div>
        </div>
      )}

      {partial.length > 0 && (
        <div>
          <div style={{ fontSize: "13px", fontWeight: "500", color: "#444", marginBottom: "8px" }}>
            ~ Bonus skills you have
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {partial.map(s => <Tag key={s} label={s} type="partial" />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillTags;