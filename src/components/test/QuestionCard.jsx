import { useEffect, useState, useCallback } from "react";
import Button, { ModalContainer } from "../auth/Button";
import useErrorStore from "../../data/stores/errorStore";
import { useLocation, useNavigate } from "react-router-dom";
import { apiCall } from "../../data/useFetcher";
import { toast } from "react-toastify";
import moment from "moment";
import DOMPurify from "dompurify";
import Countdown from "react-countdown";

export const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};

const MediaContent = ({ type, content, className = "", isOption = false }) => {
  if (!content) return null;

  switch (type) {
    case "diagram":
    case "image":
    case "file":
      return (
        <div
          className={`relative overflow-hidden rounded-lg ${isOption ? (isOption === "question" ? "" : "bg-white/90") : "bg-white/90"} ${isOption ? "h-32 w-full" : "mx-auto w-full max-w-2xl"}`}
        >
          <img
            src={content}
            alt={type === "diagram" ? "Diagram" : "Question media"}
            className={`mx-auto h-full w-full object-contain ${className}`}
            style={isOption ? { maxHeight: "128px" } : { maxHeight: "500px" }}
          />
        </div>
      );
    case "text":
      return (
        <p className={`text-base ${className}`}>
          <span dangerouslySetInnerHTML={createMarkup(content)} />
        </p>
      );
    default:
      return null;
  }
};

const QuestionCard = ({ questions: mainQuestions, type, duration: timer }) => {
  const [k] = useState(null),
    [duration] = useState(timer),
    [timeup, setTimeup] = useState(null);

  return (
    <div className="relative mx-auto mb-4 mt-2 w-full max-w-xl overflow-hidden rounded-xl bg-[#015758] p-4 pt-8 shadow-md md:max-w-3xl md:p-8 lg:max-w-5xl">
      <MainTimer
        duration={duration}
        handleNext={() => {
          setTimeup(true);
        }}
        k={k}
      />
      <QuestionInnerCard
        mainQuestions={mainQuestions}
        type={type}
        timeup={timeup}
      />
    </div>
  );
};

export const QuestionInnerCard = ({ mainQuestions, type, timeup }) => {
  const [questions] = useState(
    mainQuestions || [
      {
        question: "What is shown in the image above?",
        questionType: "image",
        file: {
          url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
        },
        options: [
          {
            option: "Lady dancing",
            optionType: "text",
            _id: "1",
          },
          {
            option: "Lady holding a camera",
            optionType: "text",
            _id: "2",
          },
          {
            option: "Lady cooking",
            optionType: "text",
            _id: "3",
          },
          {
            option: "Lady sleeping",
            optionType: "text",
            _id: "4",
          },
        ],
      },
      {
        question:
          "Looking at the pattern below, which image comes next in the sequence?",
        questionType: "image",
        file: {
          url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
        },
        options: [
          {
            option: "",
            optionType: "image",
            file: {
              url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
            },
            _id: "7",
          },
          {
            option: "",
            optionType: "image",
            file: {
              url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
            },
            _id: "8",
          },
          {
            option: "",
            optionType: "image",
            file: {
              url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
            },
            _id: "9",
          },
          {
            option: "",
            optionType: "image",
            file: {
              url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
            },
            _id: "10",
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
  const [timer, setTimer] = useState(0);

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
    let intervalId;

    if (isSelected && questions?.length !== currentPage) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isSelected, currentPage, questions]);

  const currentQuestion = questions[currentPage - 1];
  const formattedTime = moment.utc(timer * 1000).format("mm:ss");

  useEffect(() => {
    if (timeup) handleMainSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeup]);

  return (
    <>
      <div className="mb-6 flex justify-center">
        <div className="rounded-[20px] bg-[#369D9E] px-3 py-2 text-sm text-white md:px-5 md:text-base">
          Question {currentPage}/{questions.length}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        {currentQuestion?.questionType !== "text" && (
          <div className="w-full px-4 md:px-8">
            <MediaContent
              type={currentQuestion?.questionType}
              content={currentQuestion?.file?.url}
              className="rounded-lg shadow-lg"
              isOption={"question"}
            />
          </div>
        )}

        <div className="w-full -skew-x-12 transform rounded-[3px] border-2 border-white bg-white p-4 text-center shadow-md">
          <h2 className="px-1 text-base font-bold md:text-lg lg:text-xl">
            <span
              dangerouslySetInnerHTML={createMarkup(currentQuestion?.question)}
            />
          </h2>
        </div>
      </div>

      <div className="mx-2 mt-6 grid grid-cols-1 gap-5 md:mx-3 md:grid-cols-2">
        {currentQuestion?.options?.map((option, index) => (
          <div
            key={option?._id || index}
            className="flex items-stretch"
            onClick={() => {
              if (!timeup) handleOptionSelect(option);
            }}
          >
            <div
              className={`flex w-full -skew-x-12 transform cursor-pointer overflow-hidden rounded-[3px] border-2 border-white transition-all duration-300 hover:shadow-lg ${
                isSelected?.answer === option?._id ||
                answerArr?.find((it) => it?.question === currentQuestion?._id)
                  ?.option === option?._id
                  ? "ring-2 ring-teal-600"
                  : ""
              }`}
              style={{
                minHeight: option.optionType === "image" ? "8rem" : "3.5rem",
                borderColor:
                  isSelected?.answer === option?._id ||
                  answerArr?.find((it) => it?.question === currentQuestion?._id)
                    ?.option === option?._id
                    ? getOptionColor(index)
                    : "",
              }}
            >
              <span
                className="flex min-w-[2.5rem] items-center justify-center rounded-[3px] px-2 font-bold text-white md:min-w-[3rem] md:px-4"
                style={{ backgroundColor: getOptionColor(index) }}
              >
                {String.fromCharCode(65 + index)}
              </span>

              <div className="flex flex-grow flex-col items-center justify-center bg-white p-2">
                {["media", "file"]?.includes(option?.optionType) ? (
                  <MediaContent
                    type={option?.optionType}
                    content={option?.file?.url}
                    isOption={true}
                    className="rounded-lg"
                  />
                ) : null}
                <span
                  className="text-sm md:text-base"
                  dangerouslySetInnerHTML={createMarkup(option?.option)}
                />
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
        <div className="flex items-center gap-4">
          <span className="text-white">{formattedTime}</span>
          <Button
            onClick={handleNext}
            disabled={!isSelected || loading}
            className="rounded-[20px] bg-[#369D9E] px-4 py-2 text-white shadow-md hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50 md:px-10"
            label={currentPage === questions?.length ? "Submit" : "Next"}
            loading={loading}
          />
        </div>
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
    </>
  );
};

export default QuestionCard;

const Completionist = () => <small>Time up!</small>;
const Renderer = ({ hours, minutes, seconds, completed, handleNext }) => {
  useEffect(() => {
    if (completed) {
      handleNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completed]);

  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <small>
        {hours}h:{minutes}m:{seconds}s
      </small>
    );
  }
};

export const MainTimer = ({ duration, handleNext, k }) => {
  return (
    <>
      {duration && (
        <div
          style={{
            boxShadow:
              "0px 28.341px 56.682px 0px rgba(10, 24, 33, 0.24), 0px 8.817px 8.817px 0px #369D9E inset, 0px -8.817px 8.817px 0px #369D9E inset",
            background: "linear-gradient(180deg, #369D9E 0%, #369D9E 100%)",
          }}
          className="right-3 mb-5 flex h-10 justify-center rounded-xl px-4 lg:absolute lg:top-6 lg:mb-0"
        >
          <div className="flex h-full items-center justify-center text-xl font-bold capitalize text-white lg:w-full">
            <Countdown
              key={k}
              date={moment().add(duration, "minutes")}
              renderer={(da) => <Renderer {...da} handleNext={handleNext} />}
            />
          </div>
        </div>
      )}
    </>
  );
};
