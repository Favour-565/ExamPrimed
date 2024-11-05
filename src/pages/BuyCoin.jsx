// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import CoinPackage from "../components/screens/OutOfCoin.jsx/CoinPackage";
import Footer from "../components/common/Footer";
import useAuthStore from "../data/stores/authStore";

function BuyCoinsPage() {
  const coinPackages = [
    {
      amount: "50",
      coins: "30",
      link: "http://ng-app.com/MARTAD/GET2KNOWCoinPurchase50-0-Yes-23410220000028112-web?trxId=xxx",
    },
    {
      amount: "100",
      coins: "70",
      link: "http://ng-app.com/MARTAD/GET2KNOWCoinPurchase100-0-Yes-23410220000028113-web?trxId=xxx",
    },
    {
      amount: "200",
      coins: "175",
      link: "http://ng-app.com/MARTAD/GET2KNOWCoinPurchase200-0-Yes-23410220000028114-web?trxId=xxx",
    },
    {
      amount: "500",
      coins: "480",
      link: "http://ng-app.com/MARTAD/GET2KNOWCoinPurchase500-0-Yes-23410220000028115-web?trxId=xxx",
    },
    {
      amount: "1000",
      coins: "1000",
    },
    {
      amount: "5000",
      coins: "6000",
    },
    {
      amount: "10000",
      coins: "20000",
    },
  ];
  const navigate = useNavigate();
  const // [user, setUser] = useState({ name: "", image: "" }),
    { user, isAuth } = useAuthStore();
  // const [totalCoins, setTotalCoins] = useState(0); // State to track total coins

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // const fetchUserData = () => {
  //   // Simulating fetching user data from an API
  //   setTimeout(() => {
  //     setUser({
  //       name: "Mark",
  //       image: "/Icons/userProfileImg.png",
  //     });
  //   }, 1000);
  // };

  // Function to handle displaying the total coin amount
  const handleTotalCoin = () => {
    alert(`You have ${user?.triviaPoints || 0} coins remaining.`);
  };

  // Function to handle buying coins
  const handleBuyNow = (price, coins, link) => {
    // Add the purchased coins to the totalCoins state
    // setTotalCoins((prevTotal) => prevTotal + coins);

    // Navigate to the payment page
    // navigate("/payment-mode", { state: { price, coins } });

    if (!isAuth) return navigate("/login", { state: { price, coins } });

    if (link) window.open(link, "_blank");
  };

  return (
    <main
      className="relative flex flex-col overflow-hidden"
      style={{ backgroundImage: `url('/images/profilebg.svg')` }}
    >
      <img
        loading="lazy"
        src="/images/buy coin frame.svg"
        alt=""
        className="absolute inset-0 size-full h-[220px] object-cover"
      />
      <Header />

      <section
        className="relative mb-[130px] mt-[300px] flex h-full w-full max-w-[1174px] flex-col self-center overflow-hidden rounded-3xl px-20 py-9 max-md:mt-10 max-md:max-w-full max-md:px-5"
        style={{ backgroundImage: `url('/images/BuyCoinInnerScreen (1).svg')` }}
      >
        <div className="flex w-full flex-wrap justify-between gap-5 max-md:max-w-full">
          <div className="flex items-center gap-5 whitespace-nowrap rounded-[100px] bg-zinc-50 pr-10 text-xl font-semibold text-neutral-900">
            <img
              loading="lazy"
              src={user.image?.url || "/Icons/userProfileImg.png"}
              alt="User profile"
              className="my-auto aspect-square w-12 shrink-0 self-stretch rounded-full object-contain"
            />
            <span className="my-auto self-stretch">
              {user?.firstName} {user?.lastName}
            </span>
          </div>
          <button
            className="self-start rounded-[100px] bg-[#04379B] px-6 py-3.5 text-base font-medium text-white shadow-sm max-md:px-5"
            onClick={handleTotalCoin}
          >
            TotalCoin: {user?.triviaPoints}
          </button>
        </div>
        {coinPackages.map((pack, index) => (
          <CoinPackage
            key={index}
            price={pack.amount}
            coins={pack.coins}
            onBuyNow={() => handleBuyNow(pack.amount, pack.coins, pack?.link)}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default BuyCoinsPage;
