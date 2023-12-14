import React, { useState } from 'react';
import './App.css';
import quizQuestion from './Resources/quizQuestion.js';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
    setCurrentView('result');
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setCurrentView('quiz');
  };

  return (
    <div>
      {currentView === 'home' && <Home onStartQuiz={handleStartQuiz} />}
      {currentView === 'quiz' && <Quiz onQuizCompletion={(score, totalQuestions) => handleQuizCompletion(score, totalQuestions)} />}
      {currentView === 'result' && <Result score={score} totalQuestions={quizQuestion.length} onRestartQuiz={handleRestartQuiz} />}
    </div>
  );
}

export default App;



