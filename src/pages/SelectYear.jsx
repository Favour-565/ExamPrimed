import { useEffect, useState } from "react";
import YearButton from "../components/YearButton";
import YearSelector from "../components/YearSelector";
import StartButton from "../components/StartButton";
import { useYearStore } from "../data/stores/loggerStore";
import { useLocation, useNavigate } from "react-router-dom";
import { apiCall } from "../data/useFetcher";

function SelectYear() {
  const [selectedYear, setSelectedYear] = useState("");

  let { data, getLogger } = useYearStore(),
    { state } = useLocation(),
    navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/");
  }, [state, navigate]);

  useEffect(() => {
    apiCall({
      type: "get",
      url: "/api/v1/year",
      getter: (d) => getLogger(d),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen">
      <main
        className="min-h-screen bg-cover bg-center px-4 pt-5 sm:px-8 lg:px-20"
        style={{ backgroundImage: `url('/images/SUBJECT SCREEN 7.png')` }}
      >
        {/* Logo */}
        <img
          loading="lazy"
          src="/images/logo.png"
          alt="Logo"
          className="aspect-[2.43] w-[90px] cursor-pointer object-contain sm:w-[107px]"
          onClick={() => navigate("/")}
        />

        {/* Main Content Section */}
        <section className="relative mx-auto mt-8 max-w-[1021px] rounded-3xl p-4 sm:mt-12 sm:p-6 md:my-48 lg:mt-16 lg:p-8">
          <img
            loading="lazy"
            src="/images/DIGITAL-SCREEN 1.png"
            alt=""
            className="absolute inset-0 h-full w-full rounded-[10px] object-cover"
          />

          {/* Content Wrapper */}
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:mb-12 sm:flex-row">
              <h1 className="text-2xl font-semibold tracking-[10px] text-teal-700 sm:text-3xl sm:tracking-[14px] lg:text-4xl lg:tracking-[18px]">
                SELECT YEAR
              </h1>
              <YearButton text="Back" />
            </div>

            {/* Year Selector */}
            <YearSelector
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              year={data?.docs}
            />

            {/* Start Button */}
            <div className="mt-8 flex justify-center sm:mt-12 sm:justify-end">
              <StartButton
                text="Start"
                selectedYear={selectedYear}
                className="whitespace-nowrap rounded-[100px] bg-teal-800 px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-teal-700 sm:px-12 lg:px-14"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SelectYear;
