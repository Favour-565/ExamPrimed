import React from "react";

function PricingPlan({ title, features }) {
  return (
    <div className="flex flex-col m-3 max-md:ml-0 max-md:w-full" style={{ backgroundImage: `url('/images/examSreen.png')` }}>
      <div className="flex flex-col items-start py-8 pr-7 pl-2.5 mx-auto w-full rounded-3xl bg-cyan-950 max-md:pr-5 max-md:mt-5">
        <div className="flex flex-col max-w-full w-[179px]">
          <h2 className="gap-2.5 self-start p-2.5 text-base font-semibold text-white">{title}</h2>
          <ul className="p-2.5 w-full text-xs font-medium text-white">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <button className="gap-2.5 self-stretch px-11 py-3.5 mt-7 ml-4 text-xs font-semibold bg-teal-600 rounded-xl min-h-[42px] text-zinc-50 max-md:px-5 max-md:ml-2.5">
          START PLAN NOW
        </button>
      </div>
    </div>
  );
}

export default PricingPlan;