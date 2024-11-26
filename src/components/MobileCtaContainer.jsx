/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuthStore from "../data/stores/authStore";

export default function MobileCtaContainer() {
  const { isAuth } = useAuthStore();

  return (
    <>
      <div className="absolute inset-x-0 -top-8 flex flex-col items-center gap-3 md:hidden">
        <Link
          to={isAuth ? "/select-exam" : "/sign-up"}
          className="h-fit max-w-[180px] rounded-[14px] border-[1px] border-[#FFFF] bg-[#008E90] px-10 py-5 font-Poppins text-sm font-semibold text-white no-underline"
        >
          {isAuth ? "PRACTICE" : "GET STARTED"}
        </Link>

        <p className="font-Poppins text-sm font-normal text-[#0E0E0E]">
          Download the Mobile App
        </p>

        <div className="inline-flex gap-[10px]">
          <MobileCTAButtons
            lightText="Available on the"
            boldText="Google Play"
            url="/Icons/playstore-icon.svg"
            alt="Playstore button"
          />
          <MobileCTAButtons
            lightText="Download on the"
            boldText="App Store"
            url="/Icons/apple-icon.svg"
            alt="Apple store button"
          />
        </div>
      </div>
    </>
  );
}

export const MobileCTAButtons = ({ lightText, boldText, url, alt }) => {
  return (
    <>
      <div className="inline-flex cursor-pointer items-center gap-[10px] rounded-[14px] border-[1px] border-white bg-[#0E0E0E] px-4 py-[10px]">
        <img src={url} alt={alt} />
        <aside className="flex flex-col gap-[2px] font-Inter text-white">
          <small className="text-[10px] font-light">{lightText}</small>
          <p className="text-[12px] font-semibold">{boldText}</p>
        </aside>
      </div>
    </>
  );
};
