// ...existing code...
'use client';
import { useState } from "react";
import mcqs from "./data/mcqs";
import "./quiz.css";

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const total = Array.isArray(mcqs) ? mcqs.length : 0;
  const question = mcqs?.[currentQ];

  if (total === 0) {
    return (
      <div className="container">
        <h1>MCQ Practice App</h1>
        <p className="explanation">No questions found. Please add questions to src/app/data/mcqs.js</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="container">
        <h1>MCQ Practice App</h1>
        <div className="feedback" style={{ textAlign: "center" }}>
          <h2>Congratulations 🎉</h2>
          <p className="explanation">You completed all {total} questions. Well done!</p>
          <div className="nav-buttons" style={{ justifyContent: "center", marginTop: 12 }}>
            <button
              onClick={() => {
                setFinished(false);
                setCurrentQ(0);
                setSelected(null);
                setAnswered(false);
              }}
            >
              Restart Quiz
            </button>
          </div>
        </div>
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
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
  };

  const isCorrect = (idx: number) => {
    return typeof question.answerIndex === "number" && idx === question.answerIndex;
  };

  const progressPercent = Math.round(((currentQ + 1) / Math.max(1, total)) * 100);

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
          const className =
            answered && selected !== null
              ? isCorrect(idx)
                ? "option correct"
                : idx === selected
                ? "option wrong"
                : "option"
              : selected === idx
              ? "option selected"
              : "option";

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={className}
              aria-pressed={selected === idx}
            >
              <span style={{ fontWeight: 700, width: 28, display: "inline-block", color: "rgba(255,255,255,0.8)" }}>
                {idx + 1}.
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      {answered && selected !== null && (
        <div className="feedback">
          {isCorrect(selected) ? (
            <p className="correct-text">Correct ✅</p>
          ) : (
            <p className="wrong-text">Wrong ❌ — Correct: {question.options?.[question.answerIndex ?? 0]}</p>
          )}
          {question.explanation && <p className="explanation">{question.explanation}</p>}
        </div>
      )}

      <div className="nav-buttons">
        <button
          onClick={() => {
            setSelected(null);
            setAnswered(false);
            setCurrentQ((prev) => Math.max(0, prev - 1));
          }}
          disabled={currentQ === 0}
        >
          Previous
        </button>

        <button
          onClick={() => {
            setSelected(null);
            setAnswered(false);
            if (currentQ === total - 1) {
              setFinished(true);
            } else {
              setCurrentQ((prev) => Math.min(total - 1, prev + 1));
            }
          }}
          aria-disabled={currentQ === total - 1}
        >
          {currentQ === total - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
// ...existing code...