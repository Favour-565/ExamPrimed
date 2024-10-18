import React from 'react';
import { Link } from 'react-router-dom';
import AppStoreButtons from '../AppStoreButtons';



function Hero() {
  return (
    <section className="flex relative z-10 flex-col items-start px-20  pt-20 pb-32 mt-8 -mb-1 w-full bg-black bg-opacity-30 text-zinc-50 max-md:px-5 max-md:pb-24 max-md:max-w-full">

      <h1 className="text-4xl font-bold w-[354px]">
        Pass your Exams with Style !
      </h1>
      <div className="flex gap-4 justify-center items-center py-2.5 text-xl font-semibold">
        <div className="self-stretch my-auto">Proper Preparation</div>
        <div className="shrink-0 self-stretch my-auto w-0 border-2 border-white border-solid h-[19px]" />
      <div className="self-stretch my-auto">Excellent Results</div>
      </div>
      <Link 
        to="/sign-up" 
        className="px-9 py-4 mt-10 text-xl font-semibold text-teal-700 bg-white rounded-3xl max-md:px-5 no-underline hover:bg-teal-100 transition-colors"
      >
        GET STARTED
      </Link>
      <AppStoreButtons/>
    </section>
);
}

export default Hero;