import React from "react";
import { useNavigate } from "react-router-dom";

function YearButton({ text, className = "px-8 py-3 text-base font-medium  bg-teal-800 text-white whitespace-nowrap rounded-[100px]" }) 
{
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    
    <button className={className}
    onClick={handleBackClick}
    >
      {text}
    </button>
  );
}

export default YearButton;