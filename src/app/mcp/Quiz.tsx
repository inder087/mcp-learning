
"use client";
import { useState } from "react";

export default function Quiz({ question, options, answer }: { question: string; options: string[]; answer: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="my-6 p-4 border rounded bg-gray-50">
      <p className="font-semibold mb-2">Quiz: {question}</p>
      <ul className="mb-2">
        {options.map((opt, idx) => (
          <li key={idx}>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="quiz"
                value={idx}
                checked={selected === idx}
                onChange={() => setSelected(idx)}
                disabled={submitted}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      {!submitted ? (
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
          disabled={selected === null}
          onClick={() => setSubmitted(true)}
        >
          Submit
        </button>
      ) : (
        <div className="mt-2">
          {selected === answer ? (
            <span className="text-green-600 font-bold">Correct!</span>
          ) : (
            <span className="text-red-600 font-bold">Incorrect. The correct answer is: {options[answer]}</span>
          )}
        </div>
      )}
    </div>
  );
}
