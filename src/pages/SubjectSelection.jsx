import { useLocation, useNavigate } from "react-router-dom";
import SubjectBackButton from "../components/subject/SubjectBackButton";
import SubjectCard from "../components/subject/SubjectCard";
import { useSubjectStore } from "../data/stores/loggerStore";
import { useEffect } from "react";
import { apiCall } from "../data/useFetcher";

const subjects = [
  { name: "ENGLISH", image: "/images/English.png" },
  { name: "GENERAL KNOWLEDGE", image: "/images/Knowledge.png" },
  { name: "ACCOUNT", image: "/images/account.png" },
  { name: "COMMERCE", image: "/images/commerce.png" },
  { name: "SCIENCE", image: "/images/Science.png" },
];

function SubjectSelection() {
  // const handleSubjectClick = (subject) => {
  //   // Handle click if needed, otherwise can be omitted
  //   console.log("Subject clicked:", subject.name);
  // };

  let { data, getLogger } = useSubjectStore(),
    { state } = useLocation(),
    navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/");
  }, [state, navigate]);

  useEffect(() => {
    apiCall({
      type: "get",
      url: "/api/v1/subject",
      getter: (d) => getLogger(d),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="relative flex flex-col overflow-hidden">
      <section
        className="relative flex w-full flex-col pl-10 pr-20 pt-5 max-md:max-w-full max-md:px-5 md:h-screen md:px-5"
        style={{ backgroundImage: `url('/images/SUBJECT SCREEN 7.png')` }}
      >
        <img
          loading="lazy"
          src="/images/logo.png"
          alt="Logo"
          className="aspect-[2.43] w-[107px] max-w-full cursor-pointer object-contain"
          onClick={() => navigate("/")}
        />
        <div className="relative mb-0 mt-16 flex min-h-[469px] w-full max-w-[1021px] flex-col self-center pb-12 pl-16 pr-5 pt-5 max-md:mb-2.5 max-md:mt-10 max-md:max-w-full max-md:pl-5">
          <img
            loading="lazy"
            src="/images/DIGITAL-SCREEN 1.png"
            alt=""
            className="absolute inset-0 size-full rounded-[20px] object-cover"
          />
          <div className="relative flex w-[840px] max-w-full flex-wrap items-start gap-10 self-end">
            <div className="mt-8 flex-auto self-end max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex w-[79%] flex-col max-md:ml-0 max-md:w-full">
                  <h1 className="ml-10 self-stretch text-4xl font-semibold tracking-[5px] text-teal-700 max-md:mt-10 max-md:max-w-full">
                    SELECT SUBJECT
                  </h1>
                </div>
              </div>
            </div>
            <SubjectBackButton />
          </div>
          {/* <div className="relative mt-20 grid grid-cols-1 gap-6 max-md:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <Link to="/select-year" key={index} className="flex flex-col">
                <SubjectCard subject={subject} onClick={handleSubjectClick} />
              </Link>
            ))}
          </div> */}
          <div className="relative mt-20 grid grid-cols-1 gap-6 max-md:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {data?.docs
              ?.filter((it) => it?.examType?.includes(state?._id))
              ?.map((sub, i) => (
                <div key={i} className="flex flex-col">
                  <SubjectCard
                    name={sub?.title}
                    image={
                      sub?.image?.url || subjects?.[i % subjects?.length]?.image
                    }
                    subject={{
                      ...sub,
                      image:
                        sub?.image?.url ||
                        subjects?.[i % subjects?.length]?.image,
                    }}
                    onClick={() =>
                      navigate("/select-year", {
                        state: {
                          examType: state,
                          subject: sub,
                        },
                      })
                    }
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SubjectSelection;
