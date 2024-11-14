import { useEffect } from "react";
import LeaderBoardItem from "../components/dashboard/LeaderBoardItem";
import Header from "../components/common/Header";
import useAuthStore from "../data/stores/authStore";
import { useNavigate } from "react-router-dom";
import { useLeaderboardStore } from "../data/stores/loggerStore";
import { apiCall } from "../data/useFetcher";

const leaderboardData = [
  { name: "Joseph", points: 1000, quizResult: 85, avatar: "/Icons/first.svg" },
  {
    name: "Benjamin",
    points: 900,
    quizResult: 75,
    avatar: "/Icons/second.svg",
  },
  { name: "Tobi", points: 800, quizResult: 95, avatar: "/Icons/third.svg" },
  {
    name: "Mohammed",
    points: 700,
    quizResult: 65,
    avatar: "/Icons/fourth.svg",
  },
  { name: "Ada", points: 600, quizResult: 88, avatar: "/Icons/fifth.svg" },
  { name: "Helen", points: 500, quizResult: 55, avatar: "/Icons/eighth.svg" },
  { name: "Henry", points: 400, quizResult: 72, avatar: "/Icons/seventh.svg" },
  {
    name: "Elizabeth",
    points: 300,
    quizResult: 40,
    avatar: "/Icons/ninth.svg",
  },
];

function LeaderBoard() {
  const sortedLeaderboard = leaderboardData.sort(
    (a, b) => b.quizResult - a.quizResult,
  );

  const { isAuth } = useAuthStore(),
    navigate = useNavigate(),
    { data, getLogger } = useLeaderboardStore();

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth, navigate]);

  useEffect(() => {
    apiCall({
      type: "get",
      url: "/api/v1/exam/leaderboard",
      getter: (d) => getLogger(d),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="relative flex min-h-full flex-col items-center pb-20">
      <img
        loading="lazy"
        src="\images\profilebg.svg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <header
        className="absolute mb-20 h-[220px] w-full"
        style={{ backgroundImage: `url('/images/leaderboardNavscreen.svg')` }}
      >
        <Header />
        <h1 className="mt-28 flex justify-center text-3xl font-semibold text-white md:text-4xl">
          LEADER BOARD
        </h1>
      </header>
      <section className="relative mt-40 w-full max-w-[1000px] px-4 pt-20 md:px-6">
        {data?.map((item, index) => (
          <LeaderBoardItem
            key={index}
            {...item}
            user={item}
            avatar={
              item?.user?.image?.url ||
              sortedLeaderboard?.[index % sortedLeaderboard?.length]?.avatar
            }
            rank={`${index + 1}${getOrdinalSuffix(index + 1)}`}
          />
        ))}
      </section>
    </main>
  );
}

function getOrdinalSuffix(rank) {
  if (rank % 10 === 1 && rank % 100 !== 11) return "st";
  if (rank % 10 === 2 && rank % 100 !== 12) return "nd";
  if (rank % 10 === 3 && rank % 100 !== 13) return "rd";
  return "th";
}

export default LeaderBoard;
