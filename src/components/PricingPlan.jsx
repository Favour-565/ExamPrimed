/* eslint-disable react/prop-types */
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../data/stores/authStore";
import { numberWithCommas } from "../data/useFetcher";

// const PLAN_TYPES = {
//   BASIC: "basic",
//   PREMIUM: "premium",
//   ENTERPRISE: "enterprise",
// };

// const PLAN_PRICES = {
//   [PLAN_TYPES.BASIC]: 29.99,
//   [PLAN_TYPES.PREMIUM]: 49.99,
//   [PLAN_TYPES.ENTERPRISE]: 99.99,
// };

const PricingPlan = ({
  // title,
  // features,
  // planType = PLAN_TYPES.BASIC,
  // price = PLAN_PRICES[PLAN_TYPES.BASIC],
  plan,
}) => {
  let { isAuth } = useAuthStore(),
    navigate = useNavigate();
  // const [isProcessing, setIsProcessing] = useState(false);
  // const [error, setError] = useState(null);

  // const handleStartPlan = async () => {
  //   try {
  //     setIsProcessing(true);
  //     setError(null);

  //     const paymentSession = {
  //       planType,
  //       price,
  //       currency: "USD",
  //       metadata: {
  //         planTitle: title,
  //         features: features.join(", "),
  //       },
  //     };

  //     navigate("/payment-mode", {
  //       state: {
  //         session: paymentSession,
  //         returnUrl: window.location.href,
  //       },
  //     });
  //   } catch (err) {
  //     setError("Unable to process request. Please try again.");
  //     console.error("Payment initiation error:", err);
  //   } finally {
  //     setIsProcessing(false);
  //   }
  // };

  return (
    <div className="m-3 flex flex-col max-md:mx-0 max-md:w-full max-sm:mt-4">
      <div className="flex w-full flex-col items-start rounded-3xl bg-cyan-950 px-5 py-8 max-md:px-4">
        <div className="flex w-full flex-col">
          <h2 className="text-lg font-semibold uppercase text-white">
            {/* {title} */}
            {plan?.title} plan
          </h2>
          {/* <div className="mt-2 text-white">
            <span className="text-2xl font-bold">${price}</span>
            <span className="ml-1 text-sm">/month</span>
          </div> */}
          <ul className="mt-4 space-y-2 text-sm uppercase text-white">
            <li className="">
              ₦ {numberWithCommas(Number(plan?.amount || 0).toFixed(0))} /{" "}
              {plan?.perAmount}
            </li>
            <li>
              {plan?.lengthOfFrequency} {plan?.frequency} Access
            </li>
            <li>{numberWithCommas(plan?.noOfCoin)} Bonus Coins</li>
            {/* {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">✓</span>
                {feature}
              </li>
            ))} */}
            {plan?.features?.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* {error && (
          <div className="mt-4 rounded-md bg-red-100 p-2 text-xs text-red-500">
            {error}
          </div>
        )} */}

        <button
          className={`mt-6 w-full rounded-lg bg-teal-600 py-3 text-sm font-semibold text-white hover:bg-teal-700`}
          onClick={
            plan?.planId === "yearly"
              ? () => {}
              : () => {
                  navigate(isAuth ? "/payment-mode" : "/login", {
                    state: {
                      amount: plan?.amount,
                      currency: "naira",
                      paymentType: plan?.amount > 1000 ? "not-airtime" : "",
                      item: plan,
                    },
                  });
                }
          }
        >
          {"START PLAN NOW"}
        </button>
      </div>
    </div>
  );
};

export default PricingPlan;
