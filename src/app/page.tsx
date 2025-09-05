'use client';
import { useState, useEffect } from "react";
import mcqs from "./data/mcqs";
import "./quiz.css";

export default function Quiz() {
  const total = Array.isArray(mcqs) ? mcqs.length : 0;
  const [currentQ, setCurrentQ] = useState(0);
  // use array of (number|null) and initialize based on total
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(total).fill(null));
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // when total changes (e.g. data loaded), ensure answers length matches
  useEffect(() => {
    setAnswers(Array(total).fill(null));
    setCurrentQ(0);
    setScore(0);
    setFinished(false);
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
    // guard: ensure answers is an array and question not already answered
    if (!Array.isArray(answers)) return;
    if (answers[currentQ] !== null) return;

    setAnswers(prev => {
      const next = [...prev];
      // ensure length
      while (next.length < total) next.push(null);
      next[currentQ] = idx;
      return next;
    });

    if (typeof question.answerIndex === "number" && idx === question.answerIndex) {
      setScore(s => s + 1);
    }
  };

  const progressPercent = Math.round(((currentQ + 1) / Math.max(1, total)) * 100);

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

  return (
    <div className="container">
      <h1>MCQ Practice App</h1>

      <div className="meta" style={{ marginBottom: 10 }}>
        <div>Question {currentQ + 1} of {total}</div>
        <div style={{ color: "#98a0b3" }}>{question.category ?? ""}</div>
      </div>

      <div className="progress-wrap" aria-hidden="true" style={{ marginBottom: 14 }}>
        <div className="progress" style={{ width: `${progressPercent}%` }} />
      </div>

      <h2>{question.question}</h2>

      <div className="options">
        {question.options?.map((opt, idx) => {
          const chosen = answers[currentQ] !== null && typeof answers[currentQ] !== "undefined";
          const className = chosen && answers[currentQ] === idx ? "option selected" : "option";

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={className}
              aria-pressed={answers[currentQ] === idx}
              disabled={answers[currentQ] !== null}
            >
              <span style={{ fontWeight: 700, width: 28, display: "inline-block", color: "rgba(255,255,255,0.8)" }}>
                {idx + 1}.
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      {/* No immediate correct/wrong feedback — results shown at the end */}

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
              // finish quiz when on last question
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