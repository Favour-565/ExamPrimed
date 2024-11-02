/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from "react";
import Button, { ModalContainer } from "../auth/Button";
import useErrorStore from "../../data/stores/errorStore";
import { useLocation, useNavigate } from "react-router-dom";
import { apiCall } from "../../data/useFetcher";
import { toast } from "react-toastify";
import moment from "moment";

const QuestionCard = ({ questions: mainQuestions, type }) => {
  // const navigate = useNavigate();

  const [questions] = useState(
    mainQuestions || [
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
    ],
  );

  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [selectedAnswers, setSelectedAnswers] = useState(
  //   new Array(questions.length).fill(null),
  // );
  // const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleOptionSelect = (option) => {
    // const newSelectedAnswers = [...selectedAnswers];
    // newSelectedAnswers[currentQuestionIndex] = option;
    // setSelectedAnswers(newSelectedAnswers);
    setIsSelected({ answer: option?._id, option: option?.option });
  };

  // const handleNextQuestion = () => {
  //   if (currentQuestionIndex < questions.length - 1) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   } else {
  //     handleQuizSubmit();
  //   }
  // };

  // const handleQuizSubmit = () => {
  //   const correctAnswers = selectedAnswers.filter(
  //     (answer, index) => answer === questions[index].correctAnswer,
  //   );

  //   const quizResults = {
  //     totalQuestions: questions.length,
  //     correctAnswers: correctAnswers.length,
  //     incorrectAnswers: questions.length - correctAnswers.length,
  //     scoreAccuracy: Math.round(
  //       (correctAnswers.length / questions.length) * 100,
  //     ),
  //     answers: selectedAnswers.map((answer, index) => ({
  //       question: questions[index].question,
  //       userAnswer: answer,
  //       correctAnswer: questions[index].correctAnswer,
  //     })),
  //   };

  //   // setIsQuizComplete(true);
  //   console.log({ quizResults, selectedAnswers });

  //   // navigate("/award", { state: { quizResults } });
  // };

  const colors = ["#00393A", "#011D1E", "#101F64", "#136EA5"];
  const getOptionColor = (index) => {
    return colors[index];
  };

  let [currentPage, setCurrentPage] = useState(1),
    [isSelected, setIsSelected] = useState(null),
    [showAlert, setShowAlert] = useState(false),
    [answerArr, setAnswerArr] = useState([]),
    initTime = new Date(),
    handleShowAlert = () => {
      setShowAlert(true);
    },
    handleCloseAlert = () => {
      setShowAlert(false);
    },
    [loading, setLoading] = useState(false),
    { returnErrors } = useErrorStore(),
    navigate = useNavigate(),
    { state } = useLocation(),
    handleMainSubmit = async (e) => {
      e?.preventDefault();
      let newState = {};
      let d = questions?.[currentPage - 1];
      let findQue = [
        ...answerArr.map((item) =>
          item?.question === d?._id
            ? {
                ...item,
                option: isSelected?.answer,
              }
            : item,
        ),
      ];
      newState.answers = findQue;
      if (type === "daily") newState.subject = state?._id;
      if (type !== "daily") {
        newState.exam = type;
        newState.timeSpent = moment().diff(initTime, "minutes");
      }
      let { response, errArr, errMsg } = await apiCall({
        type: "post",
        url: `/api/v1/exam/answer${type === "daily" ? "/daily" : ""}`,
        data: newState,
      });
      if (errArr) {
        setLoading(false);
        return returnErrors(errArr);
      }
      if (errMsg) {
        setLoading(false);
        return toast.error(errMsg);
      }
      setLoading(false);
      if (response) {
        let quizResults = {},
          res = response?.data || response;
        quizResults.scoreAccuracy = res?.score;
        quizResults.totalQuestions = res?.totalQuestions;
        quizResults.correctAnswers = res?.correctAnswer;
        quizResults.incorrectAnswers = res?.totalQuestions - res?.correctAnswer;
        navigate("/award", {
          state: { quizResults },
        });
        return;
      }
      setLoading(false);
    };

  // const handleAnswerButtonClick = (answerNo) => {
  //   // Set the current page based on the answer number
  //   setCurrentPage(Number(answerNo));
  //   let d = questions?.[answerNo - 1];
  //   setAnswerArr((prev) => {
  //     let findQue = [
  //       ...prev.map((item) =>
  //         item?.question === d?._id
  //           ? {
  //               ...item,
  //               isVisited: true,
  //             }
  //           : item,
  //       ),
  //     ];

  //     return findQue;
  //   });
  // };

  useEffect(() => {
    if (mainQuestions) {
      setAnswerArr([
        ...mainQuestions.map((item) => {
          return { question: item?._id };
        }),
      ]);
    }
  }, [mainQuestions]);

  const handleNext = useCallback(() => {
    if (isSelected) {
      let d = questions?.[currentPage - 1];
      setAnswerArr((prev) => {
        let findQue = [
          ...prev.map((item) =>
            item?.question === d?._id
              ? {
                  ...item,
                  isVisited: true,
                  option: isSelected?.answer,
                }
              : item,
          ),
        ];

        return findQue;
      });
      if (currentPage !== questions?.length) {
        setIsSelected(null);
        setCurrentPage(currentPage + 1);
      } else {
        handleShowAlert();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected, currentPage, questions, answerArr]);
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setIsSelected(null);
    }
  };

  useEffect(() => {
    if (isSelected && questions?.length !== currentPage) {
      const timer = setTimeout(() => handleNext(), 1000);
      return () => clearTimeout(timer);
    }
  }, [isSelected, handleNext, currentPage, questions]);

  const currentQuestion = questions[currentPage - 1];
  // const selectedOption = selectedAnswers[currentQuestionIndex];
  // const isLastQuestion = currentQuestionIndex === questions.length - 1;

  console.log({ answerArr });

  return (
    <div className="mx-auto mb-4 mt-2 w-full max-w-xl overflow-hidden rounded-xl bg-[#015758] p-4 pt-8 shadow-md md:max-w-3xl md:p-8 lg:max-w-5xl">
      <div className="mb-4 flex justify-center">
        <div className="rounded-[20px] bg-[#369D9E] px-3 py-2 text-sm text-white md:px-5 md:text-base">
          Question {currentPage}/{questions.length}
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
                isSelected?.answer === option?._id ||
                answerArr?.find((it) => it?.question === currentQuestion?._id)
                  ?.option === option?._id
                  ? "ring-2 ring-teal-600"
                  : ""
              }`}
              style={{
                minHeight: "3rem",
                borderColor:
                  isSelected?.answer === option?._id ||
                  answerArr?.find((it) => it?.question === currentQuestion?._id)
                    ?.option === option?._id
                    ? getOptionColor(index)
                    : "",
              }}
            >
              <span
                className="flex items-center justify-center rounded-[3px] px-2 font-bold text-white md:px-4"
                style={{ backgroundColor: getOptionColor(index) }}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex flex-grow items-center bg-white px-2 md:px-4">
                {option?.optionType === "text" ? (
                  <>{option?.option || option}</>
                ) : null}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        {currentPage > 1 && (
          <button
            onClick={handlePrev}
            className="rounded-[20px] bg-[#369D9E] px-4 py-2 text-white shadow-md hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-10"
            disabled={loading}
          >
            {"Previous"}
          </button>
        )}
        {/* <button
          onClick={handleNext}
          className="ms-auto rounded-[20px] bg-[#369D9E] px-4 py-2 text-white shadow-md hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-10"
          disabled={!isSelected || loading}
          >
          {currentPage === questions?.length ? "Submit" : "Next"}
        </button> */}
        <Button
          onClick={handleNext}
          disabled={!isSelected || loading}
          className={`ms-auto rounded-[20px] bg-[#369D9E] px-4 py-2 text-white shadow-md hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-10`}
          label={currentPage === questions?.length ? "Submit" : "Next"}
          loading={loading}
        />
      </div>
      {showAlert && (
        <ModalContainer
          handleClose={() => {
            handleCloseAlert();
          }}
        >
          <div>
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#369D9E]">Alert</h3>
              </div>
            </div>
            <div className="flex animate-bounce items-center justify-center gap-2 py-4">
              {colors?.map((it, i) => (
                <div
                  className={`h-5 w-5 rounded-full bg-[${getOptionColor(i)}]`}
                  key={i}
                  style={{ backgroundColor: getOptionColor(i) }}
                />
              ))}
            </div>

            <p className="text-center">
              Are you sure you want to submit now? Action cannot be undone.
            </p>

            <div className="flex py-5">
              <button
                onClick={() => {
                  handleCloseAlert();
                  handleMainSubmit();
                }}
                className="mx-auto w-[90%] rounded-[20px] bg-[#369D9E] px-4 py-2 text-center text-white shadow-md hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-10"
              >
                Confirm
              </button>
            </div>
          </div>
        </ModalContainer>
      )}
    </div>
  );
};

export default QuestionCard;
