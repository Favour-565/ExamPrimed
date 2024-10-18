import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import ResultCard from "../components/Award/ResultCard";
import ActionBtn from "../components/Award/ActionBtn";
import NavHeader from "../components/userProfile/navHeader/NavHeader";

function Award() {
  
  const location = useLocation();
  const navigate = useNavigate(); 
  const quizResults = location.state?.quizResults || {
    totalQuestions: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    scoreAccuracy: 0
  };

  
  const handleReviewAnswers = () => {
    navigate("/review-answers", { state: { quizResults } }); 
  };

  
  const handleShareScore = () => {
    const scoreMessage = `I scored ${quizResults.scoreAccuracy}% on the quiz! 🎉`;
    navigator.clipboard.writeText(scoreMessage)
      .then(() => {
        alert("Score copied to clipboard! Share it with your friends!");
      })
      .catch(err => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <main className="flex overflow-hidden relative flex-col pb-32 max-md:pb-24">
     
      <img loading="lazy" src="\images\profilebg.svg" alt="" className="object-cover absolute inset-0 size-full" />
      <NavHeader />
      
      <section className="relative self-center mt-12 max-w-full rounded-xl w-[1189px] max-md:pr-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col" style={{ backgroundImage: `url('/images/AwardFrames.png')` }}>
          <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow items-center px-20 pt-5 pb-56 rounded-xl min-h-[615px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
             
            </div>
          </div>
          
          
          <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col items-start mt-24 w-full font-semibold text-zinc-50 max-md:mt-10 max-md:max-w-full">
              <h1 className="gap-2.5 self-stretch p-2.5 text-4xl whitespace-nowrap">
                HURRAY!!!
              </h1>
              <p className="gap-2.5 self-stretch p-2.5 mt-2.5 text-xl w-[424px] max-md:max-w-full">
                Congratulations Bola Oluchi Mohammed! You Performed Excellently!
              </p>

              
              <div className="flex gap-4 mt-12 max-w-full text-base text-neutral-900 w-[381px] max-md:mt-10">
                <ResultCard value={`${quizResults.scoreAccuracy}%`} label="Score Accuracy" valueColor="text-green-400" />
                <ResultCard value={quizResults.totalQuestions.toString().padStart(2, '0')} label="Total Questions" valueColor="text-indigo-500" />
              </div>

              
              <div className="flex gap-4 mt-4 max-w-full text-base text-neutral-900 w-[381px]">
                <ResultCard value={quizResults.correctAnswers.toString().padStart(2, '0')} label="Correct Answers" valueColor="text-indigo-500" />
                <ResultCard value={quizResults.incorrectAnswers.toString().padStart(2, '0')} label="Wrong Answers" valueColor="text-red-500" />
              </div>

              
              <div className="flex gap-3.5 mt-8 ml-12 max-w-full text-xs w-[283px] max-md:ml-2.5">
                <ActionBtn text="Review Answers" iconSrc="\Icons\fluent_document-table-search-24-regular.png" bgColor="bg-indigo-500" onClick={handleReviewAnswers} />
                <ActionBtn text="Share Score" iconSrc="\Icons\octicon_share-16.png" bgColor="bg-teal-600" onClick={handleShareScore} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Award;
