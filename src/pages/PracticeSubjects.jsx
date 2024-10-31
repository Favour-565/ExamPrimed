import { useNavigate } from "react-router-dom";
import SubjectBackButton from "../components/subject/SubjectBackButton";
import SubjectCard from "../components/Subject/SubjectCard";
import { useSubjects } from "../hooks/useSubject";
import { useSubjectStore } from "../data/stores/loggerStore";
import { useEffect } from "react";
import { apiCall } from "../data/useFetcher";
import useAuthStore from "../data/stores/authStore";

function PracticeSubjects() {
  const { subjects } = useSubjects();

  let { data, getLogger } = useSubjectStore(),
    navigate = useNavigate(),
    { isAuth } = useAuthStore();

  useEffect(() => {
    apiCall({
      type: "get",
      url: "/api/v1/subject",
      getter: (d) => getLogger(d),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubjectClick = (subject) => {
    navigate(isAuth ? "/daily-test" : "/login", {
      state: subject,
    });
  };

  // if (loading) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center">
  //       <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-teal-700"></div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center">
  //       <div
  //         className="relative rounded bg-red-50 px-4 py-3 text-red-700"
  //         role="alert"
  //       >
  //         <strong className="font-bold">Error:</strong>
  //         <span className="block sm:inline"> {error}</span>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <main className="relative min-h-screen bg-cover bg-center">
      <img
        src="/images/SUBJECT SCREEN 7.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="container relative z-10 mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="aspect-[2.43] w-[90px] object-contain sm:w-[107px]"
        />

        <div className="relative mx-auto mt-8 max-w-[1021px] rounded-[20px] p-4 sm:mt-12 sm:p-6 md:my-52 lg:mt-16 lg:p-8">
          <img
            src="/images/DIGITAL-SCREEN 1.png"
            alt=""
            className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
          />

          <div className="relative z-10">
            <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:mb-12 sm:flex-row">
              <h1 className="text-2xl font-semibold tracking-[10px] text-teal-700 sm:text-3xl sm:tracking-[14px] lg:text-4xl lg:tracking-[18px]">
                SELECT SUBJECT
              </h1>
              <SubjectBackButton />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* {subjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  onClick={handleSubjectClick}
                />
              ))} */}
              {data?.docs?.map((subject, i) => (
                <SubjectCard
                  key={i}
                  // subject={subject}
                  subject={{
                    ...subject,
                    image:
                      subject?.image?.url ||
                      subjects?.[i % subjects?.length]?.image,
                  }}
                  onClick={(subject) => handleSubjectClick(subject)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PracticeSubjects;
