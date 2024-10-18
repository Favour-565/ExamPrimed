import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import CoinPackage from "../components/screens/OutOfCoin.jsx/CoinPackage";
import Footer from "../components/common/Footer";

const coinPackages = [
  { price: "50NGN", coins: 30 },
  { price: "10050NGN", coins: 70 },
  { price: "200NGN", coins: 175 },
  { price: "500NGN", coins: 480 },
  { price: "1,000NGN", coins: 1000 },
  { price: "1,500NGN", coins: 1500 },
];

function BuyCoinsPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", image: "" });

  useEffect(() => {
   
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    
    setTimeout(() => {
      setUser({
        name: "Mark", 
        image: "/Icons/userProfileImg.png" 
      });
    }, 1000);
  };

  const handleGetInTouch = () => {
    
    window.open("https://wa.me/yourwhatsappnumber", "_blank");
  };

  const handleBuyNow = (price, coins) => {
  
    navigate("/payment-mode", { state: { price, coins } });
  };

  return (
    <main className="flex overflow-hidden relative flex-col" style={{ backgroundImage: `url('/images/profilebg.svg')` }}>
      <img loading="lazy" src="/images/buy coin frame.svg" alt="" className="object-cover absolute h-[220px] inset-0 size-full" />
      <Header />
      
      <section className="flex overflow-hidden relative flex-col self-center px-20 py-9 mt-[300px] mb-[130px] w-full h-full rounded-3xl max-w-[1174px] max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundImage: `url('/images/BuyCoinInnerScreen (1).svg')` }}>
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex gap-5 items-center pr-10 text-xl font-semibold whitespace-nowrap bg-zinc-50 rounded-[100px] text-neutral-900">
            <img loading="lazy" src={user.image} alt="User profile" className="object-contain shrink-0 self-stretch my-auto w-12 rounded-full aspect-square" />
            <span className="self-stretch my-auto">{user.name}</span>
          </div>
          <button 
            className="self-start px-6 py-3.5 text-base font-medium bg-[#04379B] text-white shadow-sm rounded-[100px] max-md:px-5"
            onClick={handleGetInTouch}
          >
            Get in touch
          </button>
        </div>
        {coinPackages.map((pack, index) => (
          <CoinPackage 
            key={index} 
            price={pack.price} 
            coins={pack.coins} 
            onBuyNow={() => handleBuyNow(pack.price, pack.coins)}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default BuyCoinsPage;