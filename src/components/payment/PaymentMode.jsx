import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentOption from "./PaymentOption";

function PaymentMode() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [packageInfo, setPackageInfo] = useState(null);

  const paymentOptions = [
    {
      id: 1,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5d105771b8d27f1adddde7b5b905e7f3d2d43a93b07d49b95461e9b0cec367d",
      imageAlt: "Airtime payment icon",
      text: "PAY WITH AIRTIME (MTN USERS ONLY)",
      bgColor: "bg-yellow-300"
    },
    {
      id: 2,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d129595fb2a822eaf2e7837ae2320d8e31680b5ff663624d366829e28e0c6ac",
      imageAlt: "Credit/Debit card payment icon",
      text: "PAY WITH CREDIT/DEBIT CARD",
      bgColor: "bg-neutral-200"
    },
    {
      id: 3,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0617dfd48f4abcda4b3daedb3008568711fa516873976fcea459f0c5c7236b9e",
      imageAlt: "MTN MoMo payment icon",
      text: "PAY WITH MTN MOMO (MTN USERS ONLY)",
      bgColor: "bg-yellow-300"
    }
  ];

  useEffect(() => {
    if (location.state?.price && location.state?.coins) {
      setPackageInfo(location.state);
    }
  }, [location]);

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleProceed = () => {
    if (!selectedOption) {
      alert("Please select a payment option before proceeding.");
      return;
    }

    navigate("/payment-confirmation", {
      state: {
        paymentOption: selectedOption,
        packageInfo: packageInfo
      }
    });
  };

  return (
    <section
      className="min-h-screen w-full bg-cover bg-no-repeat bg-center 
        flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{ backgroundImage: `url('/images/profilebg.svg')` }}
    >
      <main className="w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] 
        bg-teal-800 rounded-3xl overflow-hidden
        flex flex-col lg:flex-row gap-6 lg:gap-8
        p-6 sm:p-8 lg:p-10">
          
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl text-zinc-50 text-center mb-6 sm:mb-8">
            Payment Mode
          </h1>

          <div className="flex flex-col items-center space-y-4 sm:space-y-5">
            {paymentOptions.map((option) => (
              <PaymentOption
                key={option.id}
                {...option}
                isSelected={selectedOption === option.id}
                onSelect={() => handleOptionSelect(option.id)}
              />
            ))}
          </div>

          <div className="mt-6 sm:mt-8 ">
            <button
              onClick={handleProceed}
              className="w-full py-3 px-6 
                bg-[#3C9D9E] hover:bg-[#2A8B8C]
                text-white font-medium
                rounded-[100px] shadow-sm
                transition-colors duration-200"
            >
              Proceed
            </button>
          </div>
        </div>

        {/* Side Actions */}
        {/* className="flex flex-col gap-4 sm:gap-6 
          lg:w-[140px] lg:min-w-[140px]
          lg:justify-between" */}
        <div>
        
          <button
            onClick={handleBack}
            className="w-full py-3 px-6
              bg-[#3C9D9E] hover:bg-[#2A8B8C]
              text-white font-medium
              rounded-[100px] shadow-sm
              transition-colors duration-200"
          >
            Back
          </button>
        </div>
      </main>
    </section>
  );
}

export default PaymentMode;
