import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentOption from "./PaymentOption";

const paymentOptions = [
  {
    id: 1,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5d105771b8d27f1adddde7b5b905e7f3d2d43a93b07d49b95461e9b0cec367d?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345",
    imageAlt: "Airtime payment icon",
    text: "PAY WITH AIRTIME (MTN USERS ONLY)",
    bgColor: "bg-yellow-300"
  },
  {
    id: 2,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d129595fb2a822eaf2e7837ae2320d8e31680b5ff663624d366829e28e0c6ac?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345",
    imageAlt: "Credit/Debit card payment icon",
    text: "PAY WITH CREDIT/DEBIT CARD",
    bgColor: "bg-neutral-200"
  },
  {
    id: 3,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0617dfd48f4abcda4b3daedb3008568711fa516873976fcea459f0c5c7236b9e?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345",
    imageAlt: "MTN MoMo payment icon",
    text: "PAY WITH MTN MOMO (MTN USERS ONLY)",
    bgColor: "bg-yellow-300"
  }
];

function PaymentMode() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [packageInfo, setPackageInfo] = useState(null);

  useEffect(() => {
    // Retrieve package info from location state
    if (location.state && location.state.price && location.state.coins) {
      setPackageInfo(location.state);
    }
  }, [location]);

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleProceed = () => {
    if (selectedOption) {
      // Here you would typically process the payment or navigate to a confirmation page
      console.log("Processing payment for option:", selectedOption);
      console.log("Package info:", packageInfo);
      // For now, let's just navigate to a hypothetical confirmation page
      navigate("/payment-confirmation", { 
        state: { 
          paymentOption: selectedOption,
          packageInfo: packageInfo
        } 
      });
    } else {
      alert("Please select a payment option before proceeding.");
    }
  };

  return (
    <section 
      className="relative pt-[50px] h-screen bg-cover bg-no-repeat bg-center" 
      style={{ backgroundImage: `url('/images/profilebg.svg')` }}
    >
      <main className="m-auto pr-5 pb-28 pl-20 w-[800px] rounded-3xl bg-teal-800 bg-opacity-100 max-md:pb-24 max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-7 text-md font-semibold text-black max-md:mt-10 max-md:max-w-full">
              <h1 className="self-center ml-20 text-3xl text-zinc-50">Payment Mode</h1>
              {paymentOptions.map((option) => (
                <PaymentOption 
                  key={option.id} 
                  {...option} 
                  isSelected={selectedOption === option.id}
                  onSelect={() => handleOptionSelect(option.id)}
                />
              ))}
              <button 
                onClick={handleProceed}
                className="self-center px-14 py-3.5 mt-5 text-base font-medium bg-[#007273] text-white whitespace-nowrap shadow-sm rounded-[100px] max-md:px-5"
              >
                Proceed
              </button>
            </div>
          </section>
          <aside className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
            <button 
              onClick={handleBack}
              className="px-14 py-3.5 text-base font-medium bg-[#007273] text-white whitespace-nowrap shadow-sm rounded-[100px] max-md:px-5 max-md:mt-10"
            >
              Back
            </button>
          </aside>
        </div>
      </main>
    </section>
  );
}

export default PaymentMode;