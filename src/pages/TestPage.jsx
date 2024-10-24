import React, { useState } from 'react';
import QuestionCard from '../components/test/questionCard';

function TestPage() {
  const [quizResults, setQuizResults] = useState(null);

  const handleQuizComplete = (results) => {
    setQuizResults(results);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img 
        src="/images/test screen.png" 
        alt="background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <img 
        src="/images/logo.png" 
        alt="Logo" 
        className="absolute top-4 left-4 w-24 h-auto z-10"
      />
      
      <div className="relative inset-0 flex flex-col items-center justify-center">
        <div className="p-6 mt-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
          {!quizResults ? (
            <QuestionCard onQuizComplete={handleQuizComplete} />
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
              <p>Total Questions: {quizResults.totalQuestions}</p>
              <p>Correct Answers: {quizResults.correctAnswers}</p>
              <p>Incorrect Answers: {quizResults.incorrectAnswers}</p>
              <p>Score Accuracy: {quizResults.scoreAccuracy}%</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TestPage;
