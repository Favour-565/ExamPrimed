import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuestionCard = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome", "Nigeria"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Vincent van Gogh",
        "Pablo Picasso",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null),
  );
  // const [isQuizComplete, setIsQuizComplete] = useState(false);

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
      (answer, index) => answer === questions[index].correctAnswer,
    );

    const quizResults = {
      totalQuestions: questions.length,
      correctAnswers: correctAnswers.length,
      incorrectAnswers: questions.length - correctAnswers.length,
      scoreAccuracy: Math.round(
        (correctAnswers.length / questions.length) * 100,
      ),
      answers: selectedAnswers.map((answer, index) => ({
        question: questions[index].question,
        userAnswer: answer,
        correctAnswer: questions[index].correctAnswer,
      })),
    };

    // setIsQuizComplete(true);
    navigate("/award", { state: { quizResults } });
  };

  const getOptionColor = (index) => {
    const colors = ["#00393A", "#011D1E", "#101F64", "#136EA5"];
    return colors[index];
  };

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

      <div className="flex flex-wrap items-center justify-center md:flex-nowrap md:justify-start">
        <img
          src="/Icons/emojione-v1_question-mark.png"
          alt="Question Mark"
          className="w-16 md:w-24"
        />
        <div className="ml-4 mt-4 w-full -skew-x-12 transform rounded-[3px] border-2 border-white bg-white p-3 text-center md:ml-8 md:mt-0 md:w-2/3">
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
