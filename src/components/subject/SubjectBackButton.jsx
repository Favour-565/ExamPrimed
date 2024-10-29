import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="px-6 sm:px-8 py-2 sm:py-3 bg-[#2F9596] text-white rounded-[100px] hover:bg-[#267b7c] transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
    >
      Back
    </button>
  );
}

export default BackButton;