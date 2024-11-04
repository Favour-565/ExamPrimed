import { useEffect } from "react";
import Header from "../components/common/Header";
import PricingPlan from "../components/PricingPlan";
import { usePlanStore } from "../data/stores/loggerStore";
import { apiCall } from "../data/useFetcher";

const pricingPlans = [
  {
    title: "SILVER PLAN",
    features: [
      "ONE DAY FREE TRIAL",
      "ALL ACCESS TO ALL FEATURES",
      "ELIGIBILITY TO WIN CASH PRIZES",
    ],
  },
  {
    title: "GOLD PLAN",
    features: [
      "ONE DAY FREE TRIAL",
      "ALL ACCESS TO ALL FEATURES",
      "ELIGIBILITY TO WIN CASH PRIZES",
    ],
  },
  {
    title: "PLATINUM PLAN",
    features: [
      "ONE DAY FREE TRIAL",
      "ALL ACCESS TO ALL FEATURES",
      "ELIGIBILITY TO WIN CASH PRIZES",
    ],
  },
  {
    title: "DIAMOND PLAN",
    features: [
      "ONE DAY FREE TRIAL",
      "ALL ACCESS TO ALL FEATURES",
      "ELIGIBILITY TO WIN CASH PRIZES",
    ],
  },
];

function PricingPage() {
  let { data, getLogger } = usePlanStore();

  useEffect(() => {
    apiCall({
      type: "get",
      url: "/api/v1/plan",
      getter: (d) => getLogger(d),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section
      className="flex min-h-screen flex-col overflow-hidden bg-cover pb-20"
      style={{ backgroundImage: `url('/images/examSreen.png')` }}
    >
      <div
        className="absolute h-[200px] w-full"
        style={{ backgroundImage: `url('/images/pricing-image.png')` }}
      >
        <Header />
      </div>
      <h1 className="relative mt-28 self-center text-4xl text-white max-md:mt-10 max-sm:pt-10">
        PRICING
      </h1>
      <main className="mx-auto mt-40 grid max-w-[1360px] grid-cols-1 items-center gap-10 self-center md:grid-cols-2 lg:grid-cols-4">
        {/* {pricingPlans.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))} */}
        {data?.docs?.map((plan, index) => (
          <PricingPlan
            key={index}
            plan={{
              ...plan,
              features: plan?.features
                ? plan?.features
                : pricingPlans?.[0]?.features,
            }}
          />
        ))}
      </main>
    </section>
  );
}

export default PricingPage;
