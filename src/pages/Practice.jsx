import { useNavigate } from "react-router-dom";
import Footer from "../components/common/Footer";
import PracticeExam from "../components/Exams/PracticeExam";
import BackButton from "../components/Exams/BackButton";
import { useExamTypeStore } from "../data/stores/loggerStore";
import { apiCall } from "../data/useFetcher";
import { useEffect } from "react";

const exams = [
  {
    title: "COMMON ENTRANCE",
    imageSrc: "/images/commonEntrance.png",
    path: "/subjects/",
  },
  { title: "BECE", imageSrc: "/images/bece.png", path: "/subjects/" },
  { title: "NECO", imageSrc: "/images/neco.png", path: "/subjects/" },
  { title: "WAEC", imageSrc: "/images/waec.png", path: "/subjects/" },
  { title: "GCE", imageSrc: "/images/gce.png", path: "/subjects/" },
  { title: "JAMB", imageSrc: "/images/jamb.png", path: "/subjects/" },
  { title: "IELTS", imageSrc: "/images/ielts.png", path: "/subjects/" },
];

function Practice() {
  const navigate = useNavigate();

  let { data, getLogger } = useExamTypeStore();

  useEffect(() => {
    apiCall({
      type: "get",
      url: "/api/v1/examType",
      getter: (d) => getLogger(d),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main
      className="flex min-h-screen flex-col overflow-x-hidden bg-cover bg-center pt-5"
      style={{ backgroundImage: `url('/images/profilebg.svg')` }}
    >
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="relative flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/images/logo (2).svg"
              alt="Logo"
              className="h-auto w-[107px]"
            />
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:space-x-8">
            <h1 className="text-center text-2xl font-semibold tracking-wider text-teal-700 sm:text-3xl lg:text-4xl lg:tracking-[18px]">
              SELECT EXAM
            </h1>
            <img
              src="/Icons/GoIcon.png"
              alt="Decorative element"
              className="mt-4 h-auto w-[100px] sm:mt-0"
            />
          </div>
          <div className="absolute right-4 top-0 sm:relative sm:right-0 sm:top-0">
            <BackButton />
          </div>
        </header>

        {/* Exams Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* {exams.map((exam, index) => (
            <Link
              key={index}
              to={exam.path}
              className="transform transition-transform hover:scale-105"
            >
              <PracticeExam title={exam.title} imageSrc={exam.imageSrc} />
            </Link>
          ))} */}
          {data?.docs?.map((exam, i) => (
            <PracticeExam
              className="transform cursor-pointer transition-transform hover:scale-105"
              title={exam?.title}
              imageSrc={
                exam?.image?.url || exams?.[i % exams?.length]?.imageSrc
              }
              onClick={() => navigate("/subjects", { state: exam })}
              key={i}
            />
          ))}
        </div>
      </div>

      <Footer className="mt-auto" />
    </main>
  );
}

export default Practice;
