import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const QuestionCard = ({ onQuizComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const mockQuestions = [
          {
            id: 1,
            type: 'text',
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Rome"],
            correctAnswer: "Paris"
          },
          {
            id: 2,
            type: 'image',
            question: "Which planet is shown in this image?",
            imageUrl: "/api/placeholder/400/300",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
          },
          {
            id: 3,
            type: 'diagram',
            question: "In this circuit diagram, what component is labeled 'X'?",
            diagramUrl: "/api/placeholder/500/300",
            options: ["Resistor", "Capacitor", "Inductor", "Transistor"],
            correctAnswer: "Resistor"
          },
          {
            id: 4,
            type: 'text_with_image',
            question: "Looking at this molecular structure, which compound is it?",
            imageUrl: "/api/placeholder/400/400",
            options: ["Glucose", "Fructose", "Sucrose", "Lactose"],
            correctAnswer: "Glucose",
            explanation: "This is the molecular structure of glucose showing its ring form."
          }
        ];
        
        setQuestions(mockQuestions);
        setSelectedAnswers(new Array(mockQuestions.length).fill(null));
        setLoading(false);
      } catch (err) {
        setError("Failed to load questions");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

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
        questionId: questions[index].id,
        questionType: questions[index].type,
        question: questions[index].question,
        userAnswer: answer,
        correctAnswer: questions[index].correctAnswer,
        isCorrect: answer === questions[index].correctAnswer
      }))
    };

    navigate("/award", { state: { quizResults } });
    onQuizComplete(quizResults);
  };

  const getOptionColor = (index) => {
    const colors = ["#00393A", "#011D1E", "#101F64", "#136EA5"];
    return colors[index % colors.length];
  };

  const renderQuestionMedia = (question) => {
    switch (question.type) {
      case 'image':
      case 'text_with_image':
        return (
          <img
            src={question.imageUrl}
            alt="Question Image"
            className="w-full max-w-md mb-4 rounded-lg mx-auto"
          />
        );
      case 'diagram':
        return (
          <div className="w-full max-w-xl mb-4 mx-auto">
            <img
              src={question.diagramUrl}
              alt="Question Diagram"
              className="w-full rounded-lg"
            />
            {question.diagramLabels && (
              <div className="mt-2 text-white text-sm">
                {question.diagramLabels}
              </div>
            )}
          </div>
        );
      default:
        return (
          <img
            src="/Icons/emojione-v1_question-mark.png"
            alt="Question Mark"
            className="w-16 md:w-24"
          />
        );
    }
  };

  if (loading) {
    return (
      <div className="mx-auto mb-4 mt-2 w-full max-w-xl overflow-hidden rounded-xl bg-[#015758] p-4 pt-8 shadow-md md:max-w-3xl md:p-8 lg:max-w-5xl">
        <div className="flex justify-center items-center h-64">
          <p className="text-white">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto mb-4 mt-2 w-full max-w-xl overflow-hidden rounded-xl bg-[#015758] p-4 pt-8 shadow-md md:max-w-3xl md:p-8 lg:max-w-5xl">
        <div className="flex justify-center items-center h-64">
          <p className="text-white">{error}</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="mx-auto mb-4 mt-2 w-full max-w-xl overflow-hidden rounded-xl bg-[#015758] p-4 pt-8 shadow-md md:max-w-3xl md:p-8 lg:max-w-5xl">
      <div className="mb-4 flex justify-center">
        <div className="rounded-[20px] bg-[#369D9E] px-3 py-2 text-sm text-white md:px-5 md:text-base">
          Question {currentQuestionIndex + 1}/{questions.length}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {renderQuestionMedia(currentQuestion)}
        
        <div className="w-full -skew-x-12 transform rounded-[3px] border-2 border-white bg-white p-3 text-center">
          <h2 className="px-1 text-sm font-bold">
            {currentQuestion?.question}
          </h2>
        </div>
      </div>

      <div className="mx-2 mt-4 grid grid-cols-1 gap-5 md:mx-3 md:grid-cols-2">
        {currentQuestion?.options?.map((option, index) => (
          <div
            key={index}
            className="flex items-stretch"
            onClick={() => handleOptionSelect(option)}
          >
            <div
              className={`flex w-full -skew-x-12 transform cursor-pointer overflow-hidden rounded-[3px] border-2 border-white ${
                selectedOption === option ? "border-blue-500" : ""
              }`}
              style={{ minHeight: "3rem" }}
            >
              <span
                className="flex items-center justify-center rounded-[3px] px-2 font-bold text-white md:px-4"
                style={{ backgroundColor: getOptionColor(index) }}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex flex-grow items-center bg-white px-2 md:px-4">
                {option}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleNextQuestion}
          className="rounded-[20px] bg-[#369D9E] px-4 py-2 text-white shadow-md hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-10"
          disabled={selectedOption === null}
        >
          {isLastQuestion ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
