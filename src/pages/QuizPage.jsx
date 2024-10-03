// src/pages/QuizPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setQuizzes } from '../features/quizzesSlice'; // Assuming you have a quizzesSlice

const QuizPage = () => {
  const dispatch = useDispatch();
  const [quizzes, setQuizzesState] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/generate-quizzes', {
          prompt: 'Generate a quiz about basic English greetings.',
        });
        setQuizzesState(response.data);
        dispatch(setQuizzes(response.data)); // Dispatch to Redux store if needed
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };
    fetchQuizzes();
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Quiz</h1>
      <div className="mt-4">
        {quizzes.map((quiz, index) => (
          <div key={index} className="border-b py-2">
            <h2 className="text-xl">{quiz.question}</h2>
            <ul>
              {quiz.options.map((option, i) => (
                <li key={i} className="py-1">
                  <button className="bg-gray-200 p-2 rounded">{option}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
