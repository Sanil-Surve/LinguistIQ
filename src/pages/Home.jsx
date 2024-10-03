// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to LinguistIQ</h1>
      <p className="text-lg mb-8">Learn new languages with interactive lessons and quizzes!</p>
      <div className="flex space-x-4">
        <Link to="/lessons" className="bg-blue-500 text-white px-4 py-2 rounded">
          View Lessons
        </Link>
        <Link to="/quiz" className="bg-green-500 text-white px-4 py-2 rounded">
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
