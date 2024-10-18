import React from 'react';

function AppStoreButtons() {
  return (
    <div className="flex gap-5 mt-18 mb-0 max-w-full text-white w-[343px] max-md:mt-10 max-md:mb-2.5">
      {/* <a href="#" className="flex flex-col flex-1 justify-center px-4 py-2.5 rounded-xl border border-white border-solid bg-stone-950"> */}
        <div className="flex gap-2.5 items-center">
          <img loading="lazy" src="\Icons\googleplaystore.svg" alt="" className="object-contain flex flex-col shrink-0 self-stretch my-auto w-[138px]  aspect-[0.8]" />
          {/* <div className="flex flex-col self-stretch my-auto w-[104px]">
            <div className="text-xs font-light">Available on the</div>
            <div className="text-lg font-semibold">Google Play</div>
          </div> */}
        </div>
      {/* </a> */}
      {/* <a href="#" className="flex flex-col flex-1 justify-center px-4 py-2.5 rounded-xl border border-white border-solid bg-stone-950"> */}
        <div className="flex gap-2.5 items-center">
          <img loading="lazy" src="\Icons\appleplaystore.svg" alt="" className="object-contain flex flex-col shrink-0 self-stretch my-auto w-[138px] aspect-[0.8] " />
          {/* <div className="flex flex-col self-stretch my-auto w-[87px]">
            <div className="text-xs font-light">Download on the</div>
            <div className="text-lg font-semibold">App Store</div>
          </div> */}
        </div>
      {/* </a> */}
    </div>
  );
}

export default AppStoreButtons;