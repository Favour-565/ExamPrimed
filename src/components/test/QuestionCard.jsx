/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from "react";
import Button, { ModalContainer } from "../auth/Button";
import useErrorStore from "../../data/stores/errorStore";
import { useLocation, useNavigate } from "react-router-dom";
import { apiCall } from "../../data/useFetcher";
import { toast } from "react-toastify";
import moment from "moment";
import DOMPurify from "dompurify";

// eslint-disable-next-line react-refresh/only-export-components
export const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};

const MediaContent = ({ type, content, className = "" }) => {
  if (!content) return null;

  switch (type) {
    case "diagram":
    case "image":
    case "file":
      return (
        <div className="w-full max-w-2xl overflow-hidden rounded-lg">
          <img
            src={content}
            alt={type === "diagram" ? "Diagram" : "Question media"}
            className={`h-auto w-full object-contain ${className}`}
            style={{ maxHeight: "400px" }}
          />
        </div>
      );
    case "text":
      return (
        <p className={`text-base ${className}`}>
          <span dangerouslySetInnerHTML={createMarkup(content)} />
          {/* {content} */}
        </p>
      );
    default:
      return null;
  }
};

const QuestionCard = ({ questions: mainQuestions, type }) => {
  const [questions] = useState(
    mainQuestions || [
      {
        question: "What is the capital of France?",
        questionType: "text",
        questionMedia: null,
        options: [
          {
            option: "Paris",
            optionType: "text",
            optionMedia: null,
            _id: "1",
          },
          {
            option: "London",
            optionType: "text",
            optionMedia: null,
            _id: "2",
          },
        ],
      },
    ],
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [isSelected, setIsSelected] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [answerArr, setAnswerArr] = useState([]);
  const [loading, setLoading] = useState(false);

  const initTime = new Date();
  const { returnErrors } = useErrorStore();
  const navigate = useNavigate();
  const { state } = useLocation();

  const colors = ["#00393A", "#011D1E", "#101F64", "#136EA5"];
  const getOptionColor = (index) => colors[index % colors.length];

  const handleShowAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);

  const handleOptionSelect = (option) => {
    setIsSelected({ answer: option?._id, option: option?.option });
  };

  const handleMainSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);

    const currentQuestion = questions?.[currentPage - 1];
    const newAnswers = answerArr.map((item) =>
      item?.question === currentQuestion?._id
        ? { ...item, option: isSelected?.answer }
        : item,
    );

    const submitData = {
      answers: newAnswers,
      ...(type === "daily"
        ? { subject: state?._id }
        : {
            exam: type,
            timeSpent: moment().diff(initTime, "minutes"),
          }),
    };

    const { response, errArr, errMsg } = await apiCall({
      type: "post",
      url: `/api/v1/exam/answer${type === "daily" ? "/daily" : ""}`,
      data: submitData,
    });

    if (errArr) {
      setLoading(false);
      return returnErrors(errArr);
    }
    if (errMsg) {
      setLoading(false);
      return toast.error(errMsg);
    }

    if (response) {
      const res = response?.data || response;
      const quizResults = {
        scoreAccuracy: res?.score,
        totalQuestions: res?.totalQuestions,
        correctAnswers: res?.correctAnswer,
        incorrectAnswers: res?.totalQuestions - res?.correctAnswer,
        quizAnswers: res?.quizAnswers,
      };

      navigate("/award", { state: { quizResults } });
      return;
    }

    setLoading(false);
  };

  const handleNext = useCallback(() => {
    if (isSelected) {
      const currentQuestion = questions?.[currentPage - 1];
      setAnswerArr((prev) =>
        prev.map((item) =>
          item?.question === currentQuestion?._id
            ? { ...item, isVisited: true, option: isSelected?.answer }
            : item,
        ),
      );

      if (currentPage !== questions?.length) {
        setIsSelected(null);
        setCurrentPage(currentPage + 1);
      } else {
        handleShowAlert();
      }
    }
  }, [isSelected, currentPage, questions]);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setIsSelected(null);
    }
  };

  useEffect(() => {
    if (mainQuestions) {
      setAnswerArr(mainQuestions.map((item) => ({ question: item?._id })));
    }
  }, [mainQuestions]);

  useEffect(() => {
    if (isSelected && questions?.length !== currentPage) {
      const timer = setTimeout(() => handleNext(), 1000);
      return () => clearTimeout(timer);
    }
  }, [isSelected, handleNext, currentPage, questions]);

  const currentQuestion = questions[currentPage - 1];

  return (
    <div className="mx-auto mb-4 mt-2 w-full max-w-xl overflow-hidden rounded-xl bg-[#015758] p-4 pt-8 shadow-md md:max-w-3xl md:p-8 lg:max-w-5xl">
      <div className="mb-4 flex justify-center">
        <div className="rounded-[20px] bg-[#369D9E] px-3 py-2 text-sm text-white md:px-5 md:text-base">
          Question {currentPage}/{questions.length}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <MediaContent
          type={currentQuestion?.questionType}
          content={currentQuestion?.file?.url}
          className="mb-4"
        />

        <div className="w-full -skew-x-12 transform rounded-[3px] border-2 border-white bg-white p-3 text-center">
          <h2 className="px-1 text-sm font-bold md:text-base">
            {/* {currentQuestion?.question} */}
            <span
              dangerouslySetInnerHTML={createMarkup(currentQuestion?.question)}
            />
          </h2>
        </div>
      </div>

      <div className="mx-2 mt-4 grid grid-cols-1 gap-5 md:mx-3 md:grid-cols-2">
        {currentQuestion?.options?.map((option, index) => (
          <div
            key={option?._id || index}
            className="flex items-stretch"
            onClick={() => handleOptionSelect(option)}
          >
            <div
              className={`flex w-full -skew-x-12 transform cursor-pointer overflow-hidden rounded-[3px] border-2 border-white transition-all duration-200 hover:shadow-lg ${
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

              <div className="flex flex-grow flex-col items-center bg-white p-2 md:p-4">
                {option?.optionType === "file" && (
                  <MediaContent
                    type={option?.optionType}
                    content={option?.file?.url}
                  />
                )}
                <span dangerouslySetInnerHTML={createMarkup(option?.option)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        {currentPage > 1 && (
          <Button
            onClick={handlePrev}
            disabled={loading}
            className="rounded-[20px] bg-[#369D9E] px-4 py-2 text-white shadow-md hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-10"
            label="Previous"
          />
        )}
        <Button
          onClick={handleNext}
          disabled={!isSelected || loading}
          className="ms-auto rounded-[20px] bg-[#369D9E] px-4 py-2 text-white shadow-md hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-10"
          label={currentPage === questions?.length ? "Submit" : "Next"}
          loading={loading}
        />
      </div>

      {showAlert && (
        <ModalContainer handleClose={handleCloseAlert}>
          <div>
            <div className="flex justify-between">
              <h3 className="text-xl font-bold text-[#369D9E]">Alert</h3>
            </div>

            <div className="flex animate-bounce items-center justify-center gap-2 py-4">
              {colors?.map((color, i) => (
                <div
                  key={i}
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <p className="text-center">
              Are you sure you want to submit now? Action cannot be undone.
            </p>

            <div className="flex py-5">
              <Button
                onClick={() => {
                  handleCloseAlert();
                  handleMainSubmit();
                }}
                className="mx-auto w-[90%] rounded-[20px] bg-[#369D9E] px-4 py-2 text-center text-white shadow-md hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-10"
                label="Confirm"
                loading={loading}
              />
            </div>
          </div>
        </ModalContainer>
      )}
    </div>
  );
};

export default QuestionCard;
