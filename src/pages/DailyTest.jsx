import { useEffect, useState } from "react";
import QuestionCard from "../components/test/questionCard";
import useErrorStore from "../data/stores/errorStore";
import { apiCall } from "../data/useFetcher";
import { Loader } from "../components/auth/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function DailyTest() {
  const [quizResults, setQuizResults] = useState(null);

  const handleQuizComplete = (results) => {
    setQuizResults(results);
  };

  const [loading, setLoading] = useState(true),
    { returnErrors } = useErrorStore(),
    { state } = useLocation(),
    [newQuestions, setNewQuestions] = useState(null),
    navigate = useNavigate(),
    handleSubmit = async (e) => {
      e?.preventDefault();
      let { response, errArr, errMsg } = await apiCall({
        type: "get",
        url: `/api/v1/exam/daily?subject=${state?._id}`,
        noToast: true,
      });
      if (errArr) {
        setLoading(false);
        navigate("/pricing");
        return returnErrors(errArr);
      }
      if (errMsg) {
        setLoading(false);
        navigate("/pricing");
        return toast.error(errMsg);
      }
      setLoading(false);
      if (response) {
        setNewQuestions(response?.data || response);
        return;
      }
      setLoading(false);
    };

  useEffect(() => {
    if (!state) navigate("/");
    if (state) handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, navigate]);

  // console.log({ newQuestions });

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/test screen.png"
        alt="background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <img
        src="/images/logo.png"
        alt="Logo"
        className="absolute left-4 z-10 h-auto w-16 cursor-pointer md:w-24"
        onClick={() => navigate("/")}
      />

      <div className="relative inset-0 flex flex-col items-center justify-center px-4 md:mt-24 md:px-10 lg:px-16">
        <div className="mt-8 w-full max-w-2xl rounded-lg bg-white bg-opacity-90 p-4 shadow-lg md:max-w-3xl md:p-8 lg:max-w-5xl">
          {/* <Loader /> */}
          {loading ? (
            <Loader />
          ) : !quizResults ? (
            <QuestionCard
              onQuizComplete={handleQuizComplete}
              questions={newQuestions?.questions}
              duration={newQuestions?.duration}
              type="daily"
            />
          ) : (
            <div className="text-center">
              <h2 className="mb-4 text-lg font-bold md:text-2xl">
                Quiz Results
              </h2>
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

export default DailyTest;
