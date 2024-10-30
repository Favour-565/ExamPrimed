import React from "react";
import PurchaseButton from "./PurchaseBtn";

function CoinPurchaseCard() {
  return (
    <section className="relative self-center px-20 py-16 mt-16 w-full rounded-3xl max-w-[1021px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
       
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col self-stretch my-auto max-md:mt-10">
            <h1 className="text-4xl font-semibold text-zinc-50">
              You are out of coin!
            </h1>
            <PurchaseButton/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoinPurchaseCard;