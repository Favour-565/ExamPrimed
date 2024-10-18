function CoinPackage({ price, coins, onBuyNow }) {
  return (
    <div className="flex flex-wrap gap-2 justify-between px-10 py-3 mt-7 rounded-md shadow-sm bg-zinc-50 max-md:px-5 max-md:max-w-full">
      <div className="my-auto text-2xl font-semibold text-neutral-900">
        {price} to get {coins} Coins
      </div>
      <button 
        className="px-16 py-3.5 text-base font-medium bg-[#2F9596] text-white shadow-sm rounded-[100px] max-md:px-5"
        onClick={() => onBuyNow(price, coins)}
      >
        BUY NOW
      </button>
    </div>
  );
}

export default CoinPackage;