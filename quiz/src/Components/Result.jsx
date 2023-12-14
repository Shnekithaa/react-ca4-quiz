import React, { useState } from 'react';
import './Result.css';

const Result = ({ score, totalQuestions, onRestartQuiz }) => {
  const percentage = (score / totalQuestions) * 100;
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`result-container ${isDarkTheme ? 'dark-theme' : ''}`}>
      <button className='theme-change-btn' onClick={toggleTheme} style={{
          backgroundColor: isDarkTheme ? '#1E336D' : '#5CD7E6',
          color: isDarkTheme ? 'white' : '#1E336D',
        }}>
        {isDarkTheme ? 'Dark' : 'Light'}
      </button>
      <div className={`result-card ${isDarkTheme ? 'dark-card' : 'light-card'}`}>
        <h1>Final Results</h1>
        <h2>
          <span>{score}</span> out of {totalQuestions} correct - ({percentage.toFixed(2)} %)
        </h2>
        <button className='restart-btn' onClick={() => onRestartQuiz()}>Restart Game</button>
      </div>
    </div>
  );
}

export default Result;




