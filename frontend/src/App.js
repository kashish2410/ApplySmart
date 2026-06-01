import React, { useState } from "react";
import { screenResume } from "./api";
import ScoreCard from "./components/ScoreCard";
import SkillTags from "./components/SkillTags";
import "./App.css";

function App() {
  const [resume, setResume]       = useState("");
  const [jd, setJd]               = useState("");
  const [result, setResult]       = useState(null);
  const [loading, setLoading]     = useState(false);

  async function handleSubmit() {
    if (!resume || !jd) {
      alert("Please fill in both fields.");
      return;
    }
    setLoading(true);
    setResult(null);
    const data = await screenResume(resume, jd);
    setResult(data);
    setLoading(false);
  }

  function handleReset() {
    setResume("");
    setJd("");
    setResult(null);
  }

  return (
    <div className="container">
      <h1 className="title">Job Fit Screener</h1>
      <p className="subtitle">
        Paste your resume and job description — we'll check your skill match before you apply.
      </p>

      {!result ? (
        <div className="form">
          <div className="field">
            <label>Your Resume / Skills</label>
            <textarea
              rows={8}
              placeholder="Paste your resume text or list your skills, experience, projects..."
              value={resume}
              onChange={(e) => setResume(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Job Description</label>
            <textarea
              rows={8}
              placeholder="Paste the full job description here..."
              value={jd}
              onChange={(e) => setJd(e.target.value)}
            />
          </div>

          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Analysing..." : "Check Fit"}
          </button>
        </div>
      ) : (
        <div className="results">
          <ScoreCard
            score={result.match_score}
            verdict={result.verdict}
            shouldApply={result.should_apply}
          />
          <SkillTags
            matched={result.matched_skills}
            missing={result.missing_skills}
            partial={result.partial_skills}
          />
          <button className="btn-secondary" onClick={handleReset}>
            Screen Another Job
          </button>
        </div>
      )}
    </div>
  );
}

export default App;