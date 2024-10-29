import React, { useState } from "react";
import YearButton from "../components/YearButton";
import YearSelector from "../components/YearSelector";
import StartButton from "../components/StartButton";

function SelectYear() {
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <div className="min-h-screen">
      <main
        className="min-h-screen bg-cover bg-center px-4 sm:px-8 lg:px-20 pt-5"
        style={{ backgroundImage: `url('/images/SUBJECT SCREEN 7.png')` }}
      >
        {/* Logo */}
        <img
          loading="lazy"
          src="/images/logo.png"
          alt="Logo"
          className="w-[90px] sm:w-[107px] aspect-[2.43] object-contain"
        />

        {/* Main Content Section */}
        <section className="relative max-w-[1021px] mx-auto mt-8 sm:mt-12 lg:mt-16 rounded-3xl  md:my-48  p-4 sm:p-6 lg:p-8">
          <img
            loading="lazy"
            src="/images/DIGITAL-SCREEN 1.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
          />

          {/* Content Wrapper */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-700 tracking-[10px] sm:tracking-[14px] lg:tracking-[18px]">
                SELECT YEAR
              </h1>
              <YearButton text="Back" />
            </div>

            {/* Year Selector */}
            <YearSelector selectedYear={selectedYear} setSelectedYear={setSelectedYear} />

            {/* Start Button */}
            <div className="flex justify-center sm:justify-end mt-8 sm:mt-12">
              <StartButton
                text="Start"
                selectedYear={selectedYear}
                className="px-8 sm:px-12 lg:px-14 py-3 text-base font-medium text-white whitespace-nowrap shadow-sm rounded-[100px] bg-teal-800 hover:bg-teal-700 transition-colors"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SelectYear;