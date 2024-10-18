import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Icon for dropdown arrow

const YearSelector = () => {
  const navigate = useNavigate();
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearList = [];
    for (let year = 2000; year <= currentYear; year++) {
      yearList.push(year);
    }
    setYears(yearList);
  }, []);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleStartClick = () => {
    if (selectedYear) {
      navigate("/test");
    } else {
      alert("Please select a year first.");
    }
  };

  return (
    <div className="flex flex-col justify-center  items-center  self-stretch px-5 py-8 mt-11 mr-7  text-2xl min-h-[86px] max-md:mt-20 max-md:mr-2.5 max-md:max-w-full bg-gradient-to-r from-blue-100 to-blue-300">
      
        <div className="flex justify-between items-center mb-4">
          <button className="bg-teal-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-teal-600">
            Back
          </button>
          <h1 className="text-2xl font-bold text-teal-700">Select Year</h1>
        </div>
        <div className="w-[800px]  mt-6 relative ">
          <button
            onClick={toggleDropdown}
            className="w-full pl-10 pr-14 rounded-md bg-teal-700 text-2xl font-medium min-h-[94px]  text-white flex justify-between items-center hover:bg-teal-600 focus:outline-none"
          >
            {selectedYear ? selectedYear : "Click to Select Year"}
            {isDropdownOpen ? <IoIosArrowUp size={28} /> : <IoIosArrowDown size={28} />}
          </button>
          <button className=" ml-[780px] mt-12  bg-teal-700 text-white py-2 px-8 rounded-[100px] shadow-md hover:bg-teal-600 max-md:px-5" 
          onClick={handleStartClick}
          >
      Start
    </button>

          {isDropdownOpen && (
            <ul className="absolute w-full bg-teal-700 text-white text-2xl font-medium mt-2 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
              {years.map((year) => (
                <li
                  key={year}
                  onClick={() => handleYearChange({ target: { value: year } })}
                  className="p-4 text-lg hover:bg-teal-600 focus:outline-none cursor-pointer"
                >
                  {year}
                </li>
              ))}
            </ul>
          )}
        </div>
        
      </div>
    
  );
};

export default YearSelector;
