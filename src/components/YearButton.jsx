import React from "react";
import { useNavigate } from "react-router-dom";

function YearButton({ 
  text, 
  className = "px-6 sm:px-8 py-3 text-base font-medium bg-teal-800 text-white whitespace-nowrap rounded-[100px] hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500" 
}) {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button 
      className={className}
      onClick={handleBackClick}
    >
      {text}
    </button>
  );
}

export default YearButton;