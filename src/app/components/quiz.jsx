"use client";
import React, { useState } from "react";

export default function Quiz({ questions }) {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState(null);

  const q = questions[index];

  function choose(i) {
    setChosen(i);
  }

  return (
    <div>
      <h2>{q.question}</h2>
      {q.options.map((opt, i) => (
        <button
          key={i}
          style={{
            background:
              chosen !== null
                ? i === q.answerIndex
                  ? "lightgreen"
                  : i === chosen
                  ? "lightcoral"
                  : ""
                : "",
          }}
          onClick={() => choose(i)}
          disabled={chosen !== null}
        >
          {opt}
        </button>
      ))}

      {chosen !== null && (
        <p>
          Correct: {q.options[q.answerIndex]} <br />
          Explanation: {q.explanation}
        </p>
      )}

      <div>
        <button onClick={() => setIndex(Math.max(0, index - 1))}>Previous</button>
        <button onClick={() => setIndex(Math.min(questions.length - 1, index + 1))}>
          Next
        </button>
      </div>
    </div>
  );
}
