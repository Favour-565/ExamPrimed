import React from "react";
import Header from "../components/common/Header";
import PricingPlan from "../components/PricingPlan";


const pricingPlans = [
  {
    title: "SILVER PLAN",
    features: [
      "ONE DAY FREE TRIAL",
      "N100 / DAY",
      "24 HOURS ACCESS",
      "FULL ACCESS TO ALL FEATURES",
      "70 BONUS COIN",
      "ELIGIBILITY TO WIN CASH PRIZES"
    ]
  },
  {
    title: "GOLD PLAN",
    features: [
      "ONE DAY FREE TRIAL",
      "N200 / WEEK",
      "7 DAYS ACCESS",
      "FULL ACCESS TO ALL FEATURES",
      "175 BONUS COIN",
      "ELIGIBILITY TO WIN CASH PRIZES"
    ]
  },
  {
    title: "PLATINUM PLAN",
    features: [
      "ONE DAY FREE TRIAL",
      "N500 / MONTH",
      "30 DAYS ACCESS",
      "FULL ACCESS TO ALL FEATURES",
      "480 BONUS COIN",
      "ELIGIBILITY TO WIN CASH PRIZES"
    ]
  },
  {
    title: "DIAMOND PLAN",
    features: [
      "ONE DAY FREE TRIAL",
      "N4500 / PER",
      "365 DAYS ACCESS",
      "ALL ACCESS TO ALL FEATURES",
      "5000 BONUS COIN",
      "ELIGIBILITY TO WIN CASH PRIZES"
    ]
  }
];

function PricingPage() {
  return (
    <section className="  flex overflow-hidden flex-col pb-48  max-md:pb-24"  style={{ backgroundImage: `url('/images/examSreen.png')` }}>
      <div className="absolute w-full h-[200px]"style={{ backgroundImage: `url('/images/pricing-image.png')` }}>
      <Header/>
      </div>
      <h1 className="relative self-center mt-28 text-4xl text-white max-md:mt-10">PRICING</h1>
      <main className="flex flex-wrap gap-10 items-center self-center mt-40  max-w-[1360px] max-md:mt-10 max-md:max-w-full object-cover" >
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/21955e0613f96a904f89654c183c592dd5c24d9fe06c395a56836cfa58fa6f50?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" /> */}
        <div className="flex-auto self-stretch max-md:max-w-full">
          <div className="flex   max-md:flex-col">
            {pricingPlans.map((plan, index) => (
              <PricingPlan key={index} {...plan} />
            ))}
          </div>
        </div>
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b13fade0e54acc9168d96ab60e0497522b76badb83f34b509c3853e3a554af61?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" /> */}
      </main>
    </section>
  );
}

export default PricingPage;