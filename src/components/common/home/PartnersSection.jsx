import React from "react";
import { twMerge } from "tailwind-merge";

const PartnersSection = () => {
  return (
    <>
      <section className="section-bg-gradient">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-6 py-20 font-Poppins shadow-md shadow-inherit drop-shadow-lg">
          <h1 className="text-center text-[28px] font-normal">
            Our <span className="font-semibold text-[#015758]">Partners</span>
          </h1>

          
          <div className="grid w-full grid-cols-1 gap-8 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <PartnerBlock
              imgUrl="/images/9mobile.svg"
              className="bg-[#015E43]"
            />
            <PartnerBlock imgUrl="/images/Airtel.svg" className="bg-white" />
            <PartnerBlock imgUrl="/images/Mtn.svg" className="bg-[#FCCB04] min-h-60" />
            <PartnerBlock imgUrl="/images/NTA.svg" className="bg-white" />
            <PartnerBlock
              imgUrl="/images/SuperScreen.svg"
              className="bg-white"
            />
          </div>

          <h3 className="text-center text-base sm:text-[18px]">
            <span className="font-medium text-[#015758]"> Trusted by 100+</span>
            Top Companies
          </h3>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;

const PartnerBlock = ({ className, imgUrl }) => {
  return (
    <div
      className={twMerge(
        "mx-auto flex w-44 items-center justify-center rounded-2xl px-5 py-10 duration-150 hover:-translate-y-3 hover:scale-105 hover:transition-all",
        className,
      )}
    >
      <img src={imgUrl} alt="" className="w-[150px]" />
    </div>
  );
};