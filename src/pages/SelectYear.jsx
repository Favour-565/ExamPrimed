import React, { useState } from "react";
import YearButton from "../components/YearButton";
import YearSelector from "../components/YearSelector";
import StartButton from "../components/StartButton";

function SelectYear() {
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <div className="flex overflow-hidden relative flex-col min-h-[821px]">
      <main
        className="flex relative flex-col pt-5 pr-20 pb-56 pl-10 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full"
        style={{ backgroundImage: `url('/images/SUBJECT SCREEN 7.png')` }}
      >
        <img
          loading="lazy"
          src="\images\logo.png"
          alt="Logo"
          className="object-contain  max-w-full aspect-[2.43] w-[107px]"
        />
        <section className="flex relative flex-col items-end self-center pt-5 pr-5 pb-16 pl-11 mt-16 mb-0 w-full rounded-3xl max-w-[1021px] min-h-[469px] max-md:pl-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          <img
            loading="lazy"
            src="\images\DIGITAL-SCREEN 1.png"
            alt=""
            className="object-cover absolute rounded-[10px] ml-6 inset-0 size-full"
          />
          <div className="flex relative flex-wrap gap-10 items-start max-w-full w-[779px]">
            <div className="flex-auto self-end mt-20 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
                  <h1 className="self-stretch my-auto text-4xl font-semibold text-teal-700 ml-10 tracking-[18px] max-md:mt-10">
                    SELECT YEAR
                  </h1>
                </div>
              </div>
            </div>
            <YearButton text="Back" />
          </div>
          <YearSelector selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
          <StartButton
            text="Start"
            selectedYear={selectedYear} 
            className="px-14 py-3.5 mt-12 mr-6 text-base font-medium text-white whitespace-nowrap shadow-sm rounded-[100px] max-md:px-5 max-md:mt-10 max-md:mr-2.5"
          />
        </section>
      </main>
    </div>
  );
}

export default SelectYear;
