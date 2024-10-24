import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="relative mx-auto h-fit w-[90%] text-white">
        <div className="flex max-w-[380px] flex-col justify-center gap-3">
          <h1 className="text wrap w-11/12 font-Poppins text-[30px] font-bold text-white md:text-[40px]">
            Pass your Exams in Style !
          </h1>

          <div className="inline-flex flex-col items-start font-Inter text-base font-semibold text-white md:flex-row md:items-center md:text-xl">
            <p className="border-b-[1px] border-white pb-2 md:border-b-0 md:border-r-4 md:pb-0 md:pr-3 md:leading-none">
              Proper Preparation
            </p>
            <p className="pt-2 md:ml-3 md:pt-0 md:leading-none">
              Excellent Results
            </p>
          </div>

          <Link
            to="/sign-up"
            className="my-6 hidden h-fit w-fit rounded-[20px] bg-white px-9 py-4 font-Poppins text-xl font-semibold text-teal-700 no-underline transition-colors hover:bg-teal-100 md:block"
          >
            GET STARTED
          </Link>

          <div className="hidden items-center gap-3 md:inline-flex">
            <DesktopCTAButton
              lightText="Available on the"
              boldText="Google Play"
              url="/Icons/playstore-icon.svg"
              alt="Playstore button"
            />
            <DesktopCTAButton
              lightText="Download on the"
              boldText="App Store"
              url="/Icons/apple-icon.svg"
              alt="Apple store button"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

const DesktopCTAButton = ({ lightText, boldText, url, alt }) => {
  return (
    <>
      <div className="inline-flex cursor-pointer items-center gap-[10px] rounded-[10px] border-[1px] bg-[#0E0E0E] px-4 py-[10px]">
        <img src={url} alt={alt} />
        <aside className="flex flex-col gap-[2px] font-Inter text-white">
          <small className="text-[10px] font-light">{lightText}</small>
          <p className="text-lg font-semibold">{boldText}</p>
        </aside>
      </div>
    </>
  );
};
