import React from "react";
import LeaderBoardItem from "../components/dashboard/LeaderBoardItem";
import Header from "../components/common/Header";

const leaderboardData = [
  { name: "Joseph", points: 1000, quizResult: 85, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f255587f0155d9d2ed27a1110d6d99ee23274e373ab9674cf6406a28e2ab85d0?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "Benjamin", points: 900, quizResult: 75, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a47831a4d4600c5d3066f0d3a00ee8c88bd935c0e6ff4d92502a2930bd464c3?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "Tobi", points: 800, quizResult: 95, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/542545cbeb2a546d073a7d702a0754f398bfcbb65840d8da6eeac96c8b627b06?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "Mohammed", points: 700, quizResult: 65, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a68e92b5a3f79f23326281abec4bd217014b76e54f4c02d199ca637ba58c0e1?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "Ada", points: 600, quizResult: 88, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa886cbb067b5082a02729664bebc41f90762a8f0497421d200bae4dbe734b8b?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "Helen", points: 500, quizResult: 55, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/1353e879e547c12b860ad5fcb7770dda9416c0018fa50992d89b57c281a29b92?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "Henry", points: 400, quizResult: 72, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b33c10fdc1b403dabf1a693b6307d409c9de22e16e7e4064323511b6acec61d?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
  { name: "Elizabeth", points: 300, quizResult: 40, avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/df50613ce26f381bf018d25fc258162bd2a508c11f8790206d535a41e89e1f83?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" },
];

function LeaderBoard() {
  // Sort the leaderboardData by quizResult in descending order (highest to lowest)
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
          // Pass dynamically generated rank based on index position
          <LeaderBoardItem key={index} {...item} rank={`${index + 1}${getOrdinalSuffix(index + 1)}`} />
        ))}
      </section>
    </main>
  );
}

// Helper function to get ordinal suffix for rank (e.g., 1st, 2nd, 3rd)
function getOrdinalSuffix(rank) {
  if (rank % 10 === 1 && rank % 100 !== 11) return 'st';
  if (rank % 10 === 2 && rank % 100 !== 12) return 'nd';
  if (rank % 10 === 3 && rank % 100 !== 13) return 'rd';
  return 'th';
}

export default LeaderBoard;
