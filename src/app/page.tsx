// ...existing code...
'use client';
import mcqs from "./data/mcqs";
import "./quiz.css";
import { useState } from "react";

type MCQ = { id?: number; question: string; options: string[]; answerIndex?: number; explanation?: string };

export default function Home() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const question: MCQ | undefined = mcqs?.[currentQ];

  if (!question) {
    return (
      <div className="container">
        <h1>MCQ Practice App</h1>
        <p>Loading questions...</p>
      </div>
    );
  }

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setAnswered(true);
  };

  const isCorrect = (idx: number) => {
    return typeof question.answerIndex === "number" && idx === question.answerIndex;
  };

  return (
    <div className="container">
      <h1>MCQ Practice App</h1>
      <h2>{question.question}</h2>

      <div className="options">
        {question.options.map((opt, idx) => {
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
            >
              {opt}
            </button>
          );
        })}
      </div>

      {answered && selected !== null && (
        <div className="feedback">
          {isCorrect(selected) ? (
            <p className="correct-text">Correct ✅</p>
          ) : (
            <p className="wrong-text">Wrong ❌ — Correct: {question.options[question.answerIndex ?? 0]}</p>
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
            setCurrentQ((prev) => Math.min(mcqs.length - 1, prev + 1));
          }}
          disabled={currentQ === mcqs.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
// ...existing code...