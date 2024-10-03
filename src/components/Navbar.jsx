// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-xl">Language Learning App</div>
        <div>
          <Link to="/" className="text-white mx-2">
            Home
          </Link>
          <Link to="/lessons" className="text-white mx-2">
            Lessons
          </Link>
          <Link to="/quiz" className="text-white mx-2">
            Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
