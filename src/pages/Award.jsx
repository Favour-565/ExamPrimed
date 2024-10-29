import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/Award/ResultCard";
import ActionBtn from "../components/Award/ActionBtn";
import Header from "../components/common/Header";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function Award() {
  const location = useLocation();
  const navigate = useNavigate();
  const quizResults = location.state?.quizResults || {
      totalQuestions: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      scoreAccuracy: 0,
    },
    { width, height } = useWindowSize();

  const handleReviewAnswers = () => {
    navigate("/review-answers", { state: { quizResults } });
  };

  const handleShareScore = () => {
    const scoreMessage = `I scored ${quizResults.scoreAccuracy}% on the quiz! 🎉`;
    navigator.clipboard
      .writeText(scoreMessage)
      .then(() => {
        alert("Score copied to clipboard! Share it with your friends!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <main className="relative mt-14 flex min-h-screen flex-col overflow-hidden pb-32 max-md:pb-24">
      {quizResults?.scoreAccuracy &&
      Number(quizResults.scoreAccuracy).toFixed(0) >= 60 ? (
        <Confetti width={width} height={height} />
      ) : null}
      <img
        loading="lazy"
        src="\images\profilebg.svg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <Header />

      <section className="relative mt-12 w-[1189px] max-w-full self-center rounded-xl px-6 max-md:mt-10">
        <div
          className="flex gap-5 rounded-xl bg-no-repeat object-cover max-md:flex-col"
          style={{ backgroundImage: `url('/images/AwardFrames.png')` }}
        >
          <div className="flex w-[61%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative flex min-h-[615px] grow flex-col items-center overflow-hidden rounded-xl px-20 pb-56 pt-5 max-md:max-w-full max-md:px-5 max-md:pb-24"></div>
          </div>

          <div className="ml-5 flex w-[39%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative mt-24 flex w-full flex-col items-start font-semibold text-zinc-50 max-md:mt-10 max-md:max-w-full">
              <h1 className="gap-2.5 self-stretch whitespace-nowrap p-2.5 text-4xl">
                {quizResults.scoreAccuracy &&
                Number(quizResults?.scoreAccuracy).toFixed(0) >= 60
                  ? "HURRAY!!!"
                  : "OPPS!!!"}
              </h1>
              <p className="mt-2.5 w-[424px] gap-2.5 self-stretch p-2.5 text-xl max-md:max-w-full">
                {quizResults.scoreAccuracy &&
                Number(quizResults?.scoreAccuracy).toFixed(0) >= 60
                  ? "Congratulations,"
                  : "Hey,"}{" "}
                Bola Oluchi Mohammed!{" "}
                <p>
                  You Performed{" "}
                  {quizResults?.scoreAccuracy &&
                  Number(quizResults?.scoreAccuracy).toFixed(0) >= 60
                    ? "Excellently"
                    : quizResults?.scoreAccuracy &&
                        Number(quizResults?.scoreAccuracy).toFixed(0) >= 50
                      ? "Averagely"
                      : "Poorly"}
                  !
                </p>
              </p>

              <div className="mt-12 flex w-[381px] max-w-full gap-4 text-base text-neutral-900 max-md:mt-10">
                <ResultCard
                  value={`${quizResults.scoreAccuracy}%`}
                  label="Score Accuracy"
                  valueColor="text-green-400"
                />
                <ResultCard
                  value={quizResults.totalQuestions.toString().padStart(2, "0")}
                  label="Total Questions"
                  valueColor="text-indigo-500"
                />
              </div>

              <div className="mt-4 flex w-[380px] max-w-full gap-4 text-base text-neutral-900">
                <ResultCard
                  value={quizResults.correctAnswers.toString().padStart(2, "0")}
                  label="Correct Answers"
                  valueColor="text-indigo-500"
                />
                <ResultCard
                  value={quizResults.incorrectAnswers
                    .toString()
                    .padStart(2, "0")}
                  label="Wrong Answers"
                  valueColor="text-red-500"
                />
              </div>

              <div className="mt-8 flex w-[280px] max-w-full gap-3.5 text-xs sm:ml-6 md:ml-0 lg:ml-12">
                <ActionBtn
                  text="Review Answers"
                  iconSrc="\Icons\fluent_document-table-search-24-regular.png"
                  bgColor="bg-indigo-500"
                  onClick={handleReviewAnswers}
                />
                <ActionBtn
                  text="Share Score"
                  iconSrc="\Icons\octicon_share-16.png"
                  bgColor="bg-teal-600"
                  onClick={handleShareScore}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Award;
