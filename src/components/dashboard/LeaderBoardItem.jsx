/* eslint-disable react/prop-types */

import { AvatarImg } from "../../pages/Profile";

function LeaderBoardItem({ name, points, rank, user }) {
  return (
    <article className="relative mt-5 flex w-full flex-wrap justify-between gap-5 rounded-md bg-[#015758] px-10 py-1 shadow-[0px_4px_6px_rgba(0,0,0,0.25)] max-md:max-w-full max-md:px-5">
      <div className="flex gap-10 whitespace-nowrap text-2xl font-semibold text-white">
        {/* <img
          loading="lazy"
          src={user?.user?.image?.url || avatar}
          alt={`${user?.user?.lastName || name || ""}'s avatar`}
          className="aspect-square w-[60px] shrink-0 rounded-full object-contain"
        /> */}
        <AvatarImg user={user?.user} css="w-[60px] h-[60px] " />
        <div className="my-auto text-xl">
          {name}
          {user?.user?.firstName} {user?.user?.lastName}
        </div>
      </div>
      <div className="my-auto flex gap-5 text-xl font-medium text-black">
        <div className="min-h-[44px] gap-2.5 self-stretch rounded-xl bg-zinc-50 px-14 py-2.5 max-md:px-5">
          {user?.totalScore || points} Points
        </div>
        <div className="min-h-[44px] gap-2.5 self-stretch whitespace-nowrap rounded-xl bg-zinc-50 px-9 py-2.5 max-md:px-5">
          {rank}
        </div>
      </div>
    </article>
  );
}

export default LeaderBoardItem;
