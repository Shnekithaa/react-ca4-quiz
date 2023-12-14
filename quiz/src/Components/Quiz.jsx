import React, { useState } from 'react';
import './Quiz.css';
import quizQuestion from '../Resources/quizQuestion.js';
import Result from './Result.jsx';

const Quiz = ({onQuizCompletion}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [highlighted, setHighlighted] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (isCorrect) => {
    const currentQuestion = quizQuestion[currentQuestionIndex];
  
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  
    if (currentQuestionIndex + 1 === quizQuestion.length) {
      setQuizCompleted(true);
      onQuizCompletion(score + (isCorrect ? 1 : 0), quizQuestion.length); // Update the score when calling onQuizCompletion
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
    console.log(score);
  };
  
  const handleHighlightClick = () => {
    setHighlighted(!highlighted);
  };
  const handleThemeToggle = () => {
    console.log('Toggling theme');
    setDarkTheme(!darkTheme);
  };

  return (
    <div className= {`quiz-bg-container ${darkTheme? 'dark-bg-theme' : ''}`}>
      <button className='change-theme-button' onClick={handleThemeToggle}>
        {darkTheme ? 'Light' : 'Dark'}
      </button>
      <div className='quiz-card' style={{
          backgroundColor: darkTheme ? '#1E336D' : '#5CD7E6',
          color: darkTheme ? 'white' : 'black',
          borderColor: darkTheme ? 'white' : 'black',
        }}>
        <h3>Question <span>{currentQuestionIndex + 1}</span> out of {quizQuestion.length}</h3>
        <h1 style={{ color: highlighted ? 'red' : darkTheme ? 'white' : 'black' }}>
            {quizQuestion[currentQuestionIndex].text}
        </h1>

        <div className='option-container'>
          <div className='option-row'>
            {quizQuestion[currentQuestionIndex].options.slice(0, 2).map((option) => (
              <button key={option.id} className='option-btn' onClick={() => handleOptionClick(option.isCorrect)}>
                {option.text}
              </button>
            ))}
          </div>
          <div className='option-row'>
            {quizQuestion[currentQuestionIndex].options.slice(2).map((option) => (
              <button key={option.id} className='option-btn' onClick={() => handleOptionClick(option.isCorrect)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
        <div>
          <button className='highlight-btn' style={{marginRight: "50px"}} onClick={handleHighlightClick}>Highlight</button>
          <button className='highlight-btn' onClick={() => setHighlighted(false)}>Remove Highlight</button>
        </div>
      </div>
      {quizCompleted && <Result score={score} totalQuestions={quizQuestion.length} onRestartQuiz={onQuizCompletion} />}
    </div>
  );
}

export default Quiz;
