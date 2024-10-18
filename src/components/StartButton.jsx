import React from "react";
import { useNavigate } from "react-router-dom";

function StartButton({
  text,
  className = "px-8 py-3 text-base font-medium  bg-teal-800 text-white whitespace-nowrap rounded-[100px]",
  selectedYear, // Receive selectedYear as a prop
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
    <button className={className} onClick={handleStartClick}>
      {text}
    </button>
  );
}

export default StartButton;
