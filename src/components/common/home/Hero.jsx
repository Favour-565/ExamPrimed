import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="mx-auto h-fit w-[90%]">
        <div className="flex max-w-[380px] flex-col gap-3">
          <h1 className="text wrap font-Poppins text-[40px] font-bold text-white">
            Pass your Exams in Style !
          </h1>

          <div className="font-Inter inline-flex items-center text-xl font-semibold text-white">
            <p className="border-r-4 border-white pr-3 leading-none">
              Proper Preparation
            </p>
            <p className="ml-3 leading-none">Excellent Results</p>
          </div>

          <Link
            to="/sign-up"
            className="font-Poppins my-6 h-fit w-fit rounded-[20px] bg-white px-9 py-4 text-xl font-semibold text-teal-700 no-underline transition-colors hover:bg-teal-100"
          >
            GET STARTED
          </Link>

          <div className="inline-flex items-center gap-3">
            <CTAButtons
              lightText="Available on the"
              boldText="Google Play"
              url="/Icons/playstore-icon.svg"
              alt="Playstore button"
            />
            <CTAButtons
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

const CTAButtons = ({ lightText, boldText, url, alt }) => {
  return (
    <>
      <div className="inline-flex cursor-pointer items-center gap-[10px] rounded-[10px] border-[1px] bg-[#0E0E0E] px-4 py-[10px]">
        <img src={url} alt={alt} />
        <aside className="font-Inter flex flex-col gap-[2px] text-white">
          <small className="text-[10px] font-light">{lightText}</small>
          <p className="text-lg font-semibold">{boldText}</p>
        </aside>
      </div>
    </>
  );
};
