import React from "react";

function ActionItem({ icon, text }) {
  return (
    <div className="flex  flex-auto m-auto gap-3.5">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 aspect-square w-[50px]" />
      <div className="grow px-16 py-4 bg-[#A4D3D9] rounded w-fit max-md:px-5">{text}</div>
    </div>
  );
}

export default ActionItem;