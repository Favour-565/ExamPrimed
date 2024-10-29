import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionCard = () => {
  const navigate = useNavigate();
  
  const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], correctAnswer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], correctAnswer: "Mars" },
    { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"], correctAnswer: "Leonardo da Vinci" },
    { question: "What is the largest ocean on Earth?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], correctAnswer: "Pacific Ocean" },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(null));
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleOptionSelect = (option) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleQuizSubmit();
    }
  };

  const handleQuizSubmit = () => {
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    );

    const quizResults = {
      totalQuestions: questions.length,
      correctAnswers: correctAnswers.length,
      incorrectAnswers: questions.length - correctAnswers.length,
      scoreAccuracy: Math.round((correctAnswers.length / questions.length) * 100),
      answers: selectedAnswers.map((answer, index) => ({
        question: questions[index].question,
        userAnswer: answer,
        correctAnswer: questions[index].correctAnswer
      }))
    };

    setIsQuizComplete(true);
    navigate('/award', { state: { quizResults } });
  };

  const getOptionColor = (index) => {
    const colors = ['#00393A', '#011D1E', '#101F64', '#136EA5'];
    return colors[index];
  };

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto mt-2 pt-8 mb-4 bg-[#015758] rounded-xl shadow-md overflow-hidden p-4 md:p-8">
      <div className="flex justify-center mb-4">
        <div className="bg-[#369D9E] text-white px-3 md:px-5 py-2 rounded-[20px] text-sm md:text-base">
          Question {currentQuestionIndex + 1}/{questions.length}
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-start flex-wrap md:flex-nowrap">
        <img src="/Icons/emojione-v1_question-mark.png" alt="Question Mark" className="w-16 md:w-24" />
        <div className="transform -skew-x-12 rounded-[3px] border-2 border-white p-3 bg-white w-full md:w-2/3 mt-4 md:mt-0 ml-4 md:ml-8">
          <h2 className="text-sm font-bold pl-6 md:pl-10">
            {currentQuestion.question}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-2 md:mx-3 mt-4">
        {currentQuestion.options.map((option, index) => (
          <div 
            key={index} 
            className="flex items-stretch" 
            onClick={() => handleOptionSelect(option)}
          >
            <div
              className={`transform -skew-x-12 border-2 rounded-[3px] border-white flex overflow-hidden w-full cursor-pointer ${
                selectedOption === option ? 'border-blue-500' : ''
              }`}
              style={{ minHeight: '3rem' }}
            >
              <span
                className="flex items-center justify-center px-2 md:px-4 rounded-[3px] text-white font-bold"
                style={{ backgroundColor: getOptionColor(index) }}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex items-center px-2 md:px-4 bg-white flex-grow">
                {option}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={handleNextQuestion}
          className="bg-[#369D9E] text-white px-4 md:px-10 py-2 rounded-[20px] shadow-md hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={selectedOption === null}
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
