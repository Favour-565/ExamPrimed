import React from "react";

function ActionBtn({ text, iconSrc, bgColor, onClick }) {
  return (
    <button
      onClick={onClick} // Add onClick handler
      className={`flex gap-1 justify-center items-center px-3 py-2 ${bgColor} rounded-lg`}
    >
      <span className="self-stretch my-auto">{text}</span>
      <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[0.96] w-[23px]" />
    </button>
  );
}

export default ActionBtn;
