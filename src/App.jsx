// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Lessons from './components/Lessons'; // Assuming you have a Lessons component
// import QuizPage from './pages/QuizPage';`

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/lessons" element={<Lessons />} />
          <Route path="/quiz" element={<QuizPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
