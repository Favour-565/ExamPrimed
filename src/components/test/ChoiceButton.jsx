import React from 'react';

const ChoiceButton = ({ label, selected, onClick, backgroundColor }) => {
  return (
    <button
      className={`py-3 px-5 rounded-r-md font-bold text-lg flex-grow
        ${selected ? 'bg-blue-600 text-white' : 'bg-white text-black'}
        hover:bg-opacity-80 transition-colors duration-200`}
      style={{
        border: `2px solid ${backgroundColor}`,
        borderLeft: 'none',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ChoiceButton;