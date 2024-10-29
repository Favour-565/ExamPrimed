import React from 'react';

const ResultCard = ({ value, label, valueColor = "text-gray-800" }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white/90 backdrop-blur-sm rounded-lg w-full ">
      <span className={`text-xl md:text-2xl font-bold ${valueColor}`}>
        {value}
      </span>
      <span className="text-xs md:text-sm text-black text-center mt-2">
        {label}
      </span>
    </div>
  );
};

export default ResultCard;