import React from "react";

function ActionButton({ text, icon, className = "" }) {
  return (
    <button className={`flex flex-col justify-center items-center px-16 py-5  mt-8 w-[600px] text-2xl font-semibold whitespace-nowrap rounded-md bg-cyan-950 text-zinc-50 max-md:px-5 max-md:max-w-full ${className}`}>
      <div className="flex gap-2.5 max-w-full w-[136px]">
        <div className="grow">{text}</div>
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-8 aspect-square" />
      </div>
    </button>
  );
}

export default ActionButton;