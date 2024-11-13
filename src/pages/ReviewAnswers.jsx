import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createMarkup } from "../components/test/questionCard";


const ReviewAnswers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizAnswers } = location.state || {};

  // if (!quizAnswers) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center">
  //       <p className="text-xl">No quiz answers found. Please take a quiz first.</p>
  //     </div>
  //   );
  // }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-6">
      {/* Header Section */}
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Results
          </button>
          <h1 className="ml-4 text-2xl font-bold">Review Answers</h1>
        </div>
        {!quizAnswers && (
          <div className="flex min-h-screen items-center justify-center">
            <p className="text-xl">
              No quiz answers found. Please take a quiz first.
            </p>
          </div>
        )}
        {/* Questions and Answers Review */}
        <div className="space-y-6">
          {quizAnswers?.map((answer, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
              {/* Question Number and Status */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Question {index + 1}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    answer?.isCorrect
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {answer?.isCorrect ? "Correct" : "Incorrect"}
                </span>
              </div>

              {/* Question Text */}
              <p className="mb-4 text-gray-700">
                <span
                  dangerouslySetInnerHTML={createMarkup(answer?.question)}
                />
                {/* {answer?.question} */}
              </p>

              {/* Answer Comparison */}
              <div className="space-y-4">
                {/* Your Answer */}
                <div
                  className={`rounded-lg p-4 ${
                    answer?.isCorrect ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <p className="mb-2 font-medium text-gray-700">Your Answer:</p>
                  <p
                    className={`${
                      answer?.isCorrect ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {/* {answer?.userAnswer} */}
                    <span
                      dangerouslySetInnerHTML={createMarkup(answer?.userAnswer)}
                    />
                  </p>
                </div>

                {/* Correct Answer - Only show if user's answer was wrong */}
                {!answer?.isCorrect && (
                  <div className="rounded-lg bg-green-50 p-4">
                    <p className="mb-2 font-medium text-gray-700">
                      Correct Answer:
                    </p>
                    <p className="text-green-700">
                      {/* {answer?.correctAnswer} */}
                      <span
                        dangerouslySetInnerHTML={createMarkup(
                          answer?.correctAnswer,
                        )}
                      />
                    </p>
                  </div>
                )}

                {/* Explanation if available */}
                {answer?.explanation && (
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="mb-2 font-medium text-gray-700">
                      Explanation:
                    </p>
                    <p className="text-blue-700">{answer?.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ReviewAnswers;
