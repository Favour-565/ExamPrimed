import React from "react";

function PaymentOption({ imageSrc, imageAlt, text, bgColor, isSelected, onSelect }) {
  return (
    <div
      className={`flex flex-col justify-center px-10 py-4 mt-5 ml-16 w-full rounded-[10px] ${bgColor} max-md:px-5 max-md:max-w-full cursor-pointer`}
      onClick={onSelect}
    >
      <div className="flex gap-5 items-center">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain shrink-0 self-stretch my-auto aspect-[2] w-[70px]"
        />
        <p className="self-stretch my-auto">{text}</p>
        {isSelected && (
          <span className="ml-auto text-green-500 font-bold">Selected</span> // Assuming you want to show "Selected" when the option is selected
        )}
      </div>
    </div>
  );
}

export default PaymentOption;
