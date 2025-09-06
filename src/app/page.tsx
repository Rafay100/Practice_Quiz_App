'use client';
import { useState, useEffect } from "react";
import mcqs from "./data/mcqs";
import "./quiz.css";

export default function Quiz() {
  const total = Array.isArray(mcqs) ? mcqs.length : 0;
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(total).fill(null));
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [jumpStr, setJumpStr] = useState("");

  useEffect(() => {
    setAnswers(Array(total).fill(null));
    setCurrentQ(0);
    setScore(0);
    setFinished(false);
    setJumpStr("");
  }, [total]);

  const question = mcqs?.[currentQ];

  if (total === 0) {
    return (
      <div className="container">
        <h1>MCQ Practice App</h1>
        <p className="explanation">No questions found. Please add questions to src/app/data/mcqs.js</p>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="container">
        <h1>MCQ Practice App</h1>
        <p>Loading question...</p>
      </div>
    );
  }

  const handleSelect = (idx: number) => {
    setAnswers(prev => {
      const next = [...prev];
      while (next.length < total) next.push(null);
      const prevAns = next[currentQ];
      if (prevAns === idx) return next;

      const correctIndex = typeof question.answerIndex === "number" ? question.answerIndex : null;
      if (correctIndex !== null) {
        if (prevAns === correctIndex && idx !== correctIndex) {
          setScore(s => Math.max(0, s - 1));
        } else if (prevAns !== correctIndex && idx === correctIndex) {
          setScore(s => s + 1);
        }
      }

      next[currentQ] = idx;
      return next;
    });
  };

  const progressPercent = Math.round(((currentQ + 1) / Math.max(1, total)) * 100);

  const handleJump = (valStr?: string) => {
    const s = typeof valStr === "string" ? valStr : jumpStr;
    const n = parseInt(s, 10);
    if (!Number.isFinite(n)) return;
    if (n < 1 || n > total) return;
    setCurrentQ(n - 1);
    setJumpStr("");
  };

  if (finished) {
    const percent = Math.round((score / Math.max(1, total)) * 100);
    let remark = "Fail";
    if (percent >= 90) remark = "Excellent";
    else if (percent >= 80) remark = "Very Good";
    else if (percent >= 70) remark = "Good";
    else if (percent >= 60) remark = "Average";
    else remark = "Fail";

    return (
      <div className="container">
        <h1>MCQ Practice App</h1>

        <div className="feedback" style={{ textAlign: "center" }}>
          <h2>Congratulations 🎉</h2>
          <p className="explanation">You completed all {total} questions.</p>

          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{score} / {total} marks</div>
            <div style={{ color: "#98a0b3", marginTop: 6 }}>{percent}%</div>
            <div style={{ marginTop: 10, fontSize: 16 }}>{remark}</div>
          </div>

          <div className="nav-buttons" style={{ justifyContent: "center", marginTop: 18 }}>
            <button
              onClick={() => {
                setFinished(false);
                setCurrentQ(0);
                setAnswers(Array(total).fill(null));
                setScore(0);
              }}
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentAnswer = answers[currentQ];

  return (
    <div className="container">
      <h1>MCQ Practice App</h1>

      <div className="meta" style={{ marginBottom: 10, alignItems: "center", display: "flex", gap: 12 }}>
        <div>Question {currentQ + 1} of {total}</div>

        {/* Jump to input */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
          <label style={{ color: "#98a0b3", fontSize: 13 }}>Jump to</label>
          <input
            type="number"
            min={1}
            max={total}
            value={jumpStr}
            onChange={(e) => setJumpStr(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleJump(); }}
            style={{ width: 72, padding: "6px 8px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", color: "#e6eef8" }}
            aria-label="Jump to question number"
            placeholder={`1-${total}`}
          />
          <button
            onClick={() => handleJump()}
            disabled={!jumpStr || Number(jumpStr) < 1 || Number(jumpStr) > total}
            aria-disabled={!jumpStr || Number(jumpStr) < 1 || Number(jumpStr) > total}
          >
            Go
          </button>
        </div>
      </div>

      <div className="progress-wrap" aria-hidden="true" style={{ marginBottom: 14 }}>
        <div className="progress" style={{ width: `${progressPercent}%` }} />
      </div>

      <h2>{question.question}</h2>

      <div className="options">
        {question.options?.map((opt, idx) => {
          const className = currentAnswer !== null && currentAnswer === idx ? "option selected" : "option";
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={className}
              aria-pressed={currentAnswer === idx}
            >
              <span style={{ fontWeight: 700, width: 28, display: "inline-block", color: "rgba(255,255,255,0.8)" }}>
                {idx + 1}.
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      <div className="nav-buttons">
        <button
          onClick={() => setCurrentQ(prev => Math.max(0, prev - 1))}
          disabled={currentQ === 0}
        >
          Previous
        </button>

        <button
          onClick={() => {
            if (currentQ === total - 1) {
              setFinished(true);
            } else {
              setCurrentQ(prev => Math.min(total - 1, prev + 1));
            }
          }}
        >
          {currentQ === total - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}