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
      "N4500 / YEAR",
      "365 DAYS ACCESS",
      "ALL ACCESS TO ALL FEATURES",
      "5000 BONUS COIN",
      "ELIGIBILITY TO WIN CASH PRIZES"
    ]
  }
];

function PricingPage() {
  return (
    <section
      className="flex overflow-hidden flex-col pb-20 min-h-screen bg-cover"
      style={{ backgroundImage: `url('/images/examSreen.png')` }}
    >
      <div
        className="absolute w-full h-[200px]"
        style={{ backgroundImage: `url('/images/pricing-image.png')` }}
      >
        <Header />
      </div>
      <h1 className="relative self-center mt-28 text-4xl text-white max-sm:pt-10 max-md:mt-10">
        PRICING
      </h1>
      <main
        className="grid gap-10 items-center self-center mt-40 max-w-[1360px] mx-auto 
                   grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {pricingPlans.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
      </main>
    </section>
  );
}

export default PricingPage;
