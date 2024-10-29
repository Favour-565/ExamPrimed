import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const YearSelector = ({ selectedYear, setSelectedYear }) => {
  const navigate = useNavigate();
  const [years, setYears] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearList = [];
    for (let year = 2000; year <= currentYear; year++) {
      yearList.push(year);
    }
    setYears(yearList);
  }, []);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full px-4 sm:px-6 py-6 sm:py-8 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-6 py-4 sm:py-6 rounded-md bg-teal-700 text-lg sm:text-xl lg:text-2xl font-medium text-white flex justify-between items-center hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <span className="truncate">
              {selectedYear ? selectedYear : "Click to Select Year"}
            </span>
            {isDropdownOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
          </button>

          {isDropdownOpen && (
            <ul className="absolute w-full mt-2 bg-white rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
              {years.map((year) => (
                <li
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className="px-6 py-3 text-base sm:text-lg text-gray-800 hover:bg-teal-50 cursor-pointer transition-colors"
                >
                  {year}
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