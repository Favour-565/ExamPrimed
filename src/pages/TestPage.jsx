import { useEffect, useState } from "react";
import useErrorStore from "../data/stores/errorStore";
import { useLocation, useNavigate } from "react-router-dom";
import { apiCall } from "../data/useFetcher";
import { toast } from "react-toastify";
import { Loader } from "../components/auth/Button";
import QuestionCard from "../components/test/QuestionCard";

function TestPage() {
  const [quizResults, setQuizResults] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleQuizComplete = (results) => {
    setQuizResults(results);
  };

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [loading, setLoading] = useState(true),
    { returnErrors } = useErrorStore(),
    { state } = useLocation(),
    [newQuestions, setNewQuestions] = useState(null),
    navigate = useNavigate(),
    handleSubmit = async (e) => {
      e?.preventDefault();
      let { response, errArr, errMsg } = await apiCall({
        type: "get",
        url: `/api/v1/exam?exam=new${state?.year ? `&year=${state?.year?._id}` : ""}${state?.examType ? `&examType=${state?.examType?._id}` : ""}${state?.subject ? `&subject=${state?.subject?._id}` : ""}`,
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

  return (
    <section className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden">
      <img
        src="/images/test screen.png"
        alt="background"
        className="fixed inset-0 h-full w-full object-cover"
      />

      {/* Header with scroll effect */}
      <div
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrollPosition > 20 ? "bg-white/90 shadow-md backdrop-blur-sm" : ""
        }`}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          className={`m-4 h-auto w-16 cursor-pointer transition-all duration-300 md:w-24 ${
            scrollPosition > 20 ? "w-12 md:w-20" : ""
          }`}
          onClick={() => navigate("/")}
        />
      </div>

      <div className="relative flex min-h-screen flex-col px-4 pb-8 pt-24 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-2xl space-y-4 md:max-w-3xl lg:max-w-5xl">
          <div className="rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm md:p-8">
            {loading ? (
              <Loader />
            ) : !quizResults ? (
              <QuestionCard
                onQuizComplete={handleQuizComplete}
                questions={newQuestions?.questions}
                duration={newQuestions?.duration}
                type={newQuestions?._id}
              />
            ) : (
              <div className="text-center">
                <h2 className="mb-4 text-lg font-bold md:text-2xl">
                  Quiz Results
                </h2>
                <p className="py-2">
                  Total Questions: {quizResults.totalQuestions}
                </p>
                <p className="py-2">
                  Correct Answers: {quizResults.correctAnswers}
                </p>
                <p className="py-2">
                  Incorrect Answers: {quizResults.incorrectAnswers}
                </p>
                <p className="py-2">
                  Score Accuracy: {quizResults.scoreAccuracy}%
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestPage;