import { numberWithCommas } from "../../../data/useFetcher";

/* eslint-disable react/prop-types */
function CoinPackage({ price, coins, onBuyNow }) {
  return (
    <div className="mt-7 flex flex-wrap justify-between gap-2 rounded-md bg-zinc-50 px-10 py-3 shadow-sm max-md:max-w-full max-md:px-5">
      <div className="my-auto text-2xl font-semibold text-neutral-900">
        ₦{numberWithCommas(Number(price || 0).toFixed(0))} to get{" "}
        {numberWithCommas(Number(coins || 0).toFixed(0))} Coins
      </div>
      <button
        className="rounded-[100px] bg-[#2F9596] px-16 py-3.5 text-base font-medium text-white shadow-sm max-md:px-5"
        onClick={() => onBuyNow(price, coins)}
      >
        BUY NOW
      </button>
    </div>
  );
}

export default CoinPackage;
