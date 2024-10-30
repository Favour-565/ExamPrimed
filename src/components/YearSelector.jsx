/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";

const YearSelector = ({ selectedYear, setSelectedYear, year }) => {
  const [years] = useState(year),
    { state } = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // useEffect(() => {
  //   const currentYear = new Date().getFullYear();
  //   const yearList = [];
  //   for (let year = 2000; year <= currentYear; year++) {
  //     yearList.push(year);
  //   }
  //   setYears(yearList);
  // }, []);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-3xl">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-full items-center justify-between rounded-md bg-teal-700 px-6 py-4 text-lg font-medium text-white transition-colors hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 sm:py-6 sm:text-xl lg:text-2xl"
          >
            <span className="truncate">
              {selectedYear
                ? selectedYear?.title || selectedYear
                : "Click to Select Year"}
            </span>
            {isDropdownOpen ? (
              <IoIosArrowUp size={24} />
            ) : (
              <IoIosArrowDown size={24} />
            )}
          </button>

          {isDropdownOpen && (
            <ul className="absolute z-20 mt-2 max-h-60 w-full overflow-y-auto rounded-md bg-white shadow-lg">
              {years
                ?.filter(
                  (it) =>
                    it?.examType?.includes(state?.examType?._id) &&
                    it?.subject?.includes(state?.subject?._id),
                )
                ?.map((year, i) => (
                  <li
                    key={i}
                    onClick={() => handleYearChange(year)}
                    className="cursor-pointer px-6 py-3 text-base text-gray-800 transition-colors hover:bg-teal-50 sm:text-lg"
                  >
                    {year?.title || year}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default YearSelector;
