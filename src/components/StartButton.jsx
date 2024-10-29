import React from "react";
import { useNavigate } from "react-router-dom";

function StartButton({
  text,
  className,
  selectedYear,
}) {
  const navigate = useNavigate();

  const handleStartClick = () => {
    if (selectedYear) {
      navigate("/test");
    } else {
      alert("Please select a year first.");
    }
  };

  return (
    <button 
      className={`px-8 py-3 text-base font-medium bg-teal-800 text-white whitespace-nowrap rounded-[100px] hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
      onClick={handleStartClick}
    >
      {text}
    </button>
  );
}

export default StartButton;