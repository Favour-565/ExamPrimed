import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentOption = ({ imageSrc, imageAlt, text, bgColor, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`flex flex-col justify-center 
        px-4 sm:px-6 lg:px-10 py-4 
        rounded-[10px] ${bgColor} 
        cursor-pointer transition-all duration-200
        hover:shadow-md transform hover:scale-[1.01]
        ${isSelected ? 'ring-2 ring-teal-600' : ''}
        w-full`}
    >
      <div className="flex gap-3 sm:gap-4 lg:gap-5 items-center">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain w-[40px] sm:w-[50px] lg:w-[70px] aspect-[2]"
        />
        <p className="flex-1 text-sm sm:text-base lg:text-lg font-medium">
          {text}
        </p>
        {isSelected && (
          <span className="text-green-500 font-bold text-sm lg:text-base">
            Selected
          </span>
        )}
      </div>
    </div>
  );
};
export default PaymentOption;
