import React from 'react';
import './Home.css';

const Home = ({ onStartQuiz }) => {
  return (
    <div className='bg-container'>
      <h1 className='home-heading'>Quizzr</h1>
      <button className='home-button' onClick={onStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
}

export default Home;

