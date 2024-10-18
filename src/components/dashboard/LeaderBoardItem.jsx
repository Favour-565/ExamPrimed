import React from "react";

function LeaderBoardItem({ name, points, rank, avatar }) {
  return (
    <article className="flex relative flex-wrap gap-5 justify-between bg-[#015758] px-10 py-1 mt-5 w-full rounded-md shadow-[0px_4px_6px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 text-2xl font-semibold text-white whitespace-nowrap">
        <img loading="lazy" src={avatar} alt={`${name}'s avatar`} className="object-contain shrink-0 rounded-full aspect-square w-[60px]" />
        <div className="my-auto">{name}</div>
      </div>
      <div className="flex gap-5 my-auto text-xl font-medium text-black">
        <div className="gap-2.5 self-stretch px-14 py-2.5 rounded-xl bg-zinc-50 min-h-[44px] max-md:px-5">
          {points} Points
        </div>
        <div className="gap-2.5 self-stretch px-9 py-2.5 whitespace-nowrap rounded-xl bg-zinc-50 min-h-[44px] max-md:px-5">
          {rank}
        </div>
      </div>
    </article>
  );
}

export default LeaderBoardItem;