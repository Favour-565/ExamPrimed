import React from "react";
import LeaderBoardItem from "../components/dashboard/LeaderBoardItem";
import Header from "../components/common/Header";

const leaderboardData = [
  { name: "Joseph", points: 1000, quizResult: 85, avatar: "/Icons/first.svg" },
  { name: "Benjamin", points: 900, quizResult: 75, avatar: "/Icons/second.svg" },
  { name: "Tobi", points: 800, quizResult: 95, avatar: "/Icons/third.svg" },
  { name: "Mohammed", points: 700, quizResult: 65, avatar: "/Icons/fourth.svg" },
  { name: "Ada", points: 600, quizResult: 88, avatar: "/Icons/fifth.svg" },
  { name: "Helen", points: 500, quizResult: 55, avatar: "/Icons/eighth.svg" },
  { name: "Henry", points: 400, quizResult: 72, avatar: "/Icons/seventh.svg" },
  { name: "Elizabeth", points: 300, quizResult: 40, avatar: "/Icons/ninth.svg" },
];

function LeaderBoard() {
  
  const sortedLeaderboard = leaderboardData.sort((a, b) => b.quizResult - a.quizResult);

  return (
    <main className="flex  relative flex-col items-center  pb-20 min-h-full">
      <img loading="lazy" src="\images\profilebg.svg" alt="" className="object-cover absolute inset-0 size-full" />
      <header className="absolute w-full mb-20 h-[220px]  " style={{ backgroundImage: `url('/images/leaderboardNavscreen.svg')` }} >
        <Header />
        <h1 className="flex justify-center mt-28   text-4xl font-semibold text-white ">
          LEADER BOARD
        </h1>
      </header>
      <section className="mt-40 pt-20 w-full max-w-[1000px] ">
        {sortedLeaderboard.map((item, index) => (
          
          <LeaderBoardItem key={index} {...item} rank={`${index + 1}${getOrdinalSuffix(index + 1)}`} />
        ))}
      </section>
    </main>
  );
}


function getOrdinalSuffix(rank) {
  if (rank % 10 === 1 && rank % 100 !== 11) return 'st';
  if (rank % 10 === 2 && rank % 100 !== 12) return 'nd';
  if (rank % 10 === 3 && rank % 100 !== 13) return 'rd';
  return 'th';
}

export default LeaderBoard;
