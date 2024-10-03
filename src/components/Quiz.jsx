// src/components/Quiz.js
import React from 'react';

const Quiz = ({ question, options, onAnswer }) => {
  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h2 className="text-xl">{question}</h2>
      <ul className="mt-2">
        {options.map((option, index) => (
          <li key={index} className="py-1">
            <button
              className="bg-gray-200 p-2 rounded hover:bg-gray-300"
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
