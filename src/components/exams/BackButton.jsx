import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button 
      onClick={handleBackClick}
      className="self-start absolute ml-[880px] top-[4rem] px-8 py-2 bg-[#2F9596] text-white rounded-[100px] max-md:px-5"
    >
      Back
    </button>
  );
}

export default BackButton;