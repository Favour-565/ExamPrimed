import React from 'react';
import { useNavigate } from 'react-router-dom';

function SubjectBackButton() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button 
      onClick={handleBackClick}
      className="self-start absolute ml-[700px] px-8 py-2 bg-[#2F9596] text-white rounded-[100px] max-md:px-5"
    >
      Back
    </button>
  );
}

export default SubjectBackButton;