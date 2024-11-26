/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentOption from "./PaymentOption";
import useAuthStore from "../../data/stores/authStore";
import { GlobalState } from "../../data/Context";
import { usePaystackPayment } from "react-paystack";
import Stripe from "../../assets/images/stripe.svg";
import Button, { ModalContainer } from "../auth/Button";
import useErrorStore from "../../data/stores/errorStore";
import { apiCall } from "../../data/useFetcher";
import moment from "moment";
import { toast } from "react-toastify";

function PaymentMode() {
  const navigate = useNavigate();
  // const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  // const [packageInfo, setPackageInfo] = useState(null);

  // useEffect(() => {
  //   if (location.state?.price && location.state?.coins) {
  //     setPackageInfo(location.state);
  //   }
  // }, [location]);

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

    // navigate("/payment-confirmation", {
    //   state: {
    //     paymentOption: selectedOption,
    //     packageInfo: packageInfo,
    //   },
    // });
    setPlatform(selectedOption?.platform);
  };

  let { state } = useLocation(),
    { isAuth } = useAuthStore();

  useEffect(() => {
    if (!state?.amount) {
      navigate(-1);
    }
  }, [state, navigate]);

  useEffect(() => {
    if (!state || !isAuth) navigate("/login");
  }, [state, navigate, isAuth]);

  const { country } = useContext(GlobalState),
    { user } = useAuthStore(),
    mainName = `${user?.firstName || ""} ${user?.lastName || ""}`,
    config = {
      email: user?.email,
      amount: Number(state?.amount * 100),
      publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      reference: "",
      metadata: {
        name: mainName,
        phone: user?.telephone || "",
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: mainName,
          },
          {
            display_name: "Phone Number",
            variable_name: "phone_number",
            value: user?.telephone,
          },
        ],
      },
    },
    initializePayment = usePaystackPayment(config);

  const paymentOptions = [
    // state?.paymentType !== "not-airtime" &&
    {
      id: 1,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5d105771b8d27f1adddde7b5b905e7f3d2d43a93b07d49b95461e9b0cec367d",
      imageAlt: "Airtime payment icon",
      text: "PAY WITH AIRTIME (MTN USERS ONLY)",
      bgColor: "bg-yellow-300",
      platform: "mtn",
    },
    {
      id: 2,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3d129595fb2a822eaf2e7837ae2320d8e31680b5ff663624d366829e28e0c6ac",
      imageAlt: "Credit/Debit card payment icon",
      text: "PAY WITH CREDIT/DEBIT CARD",
      bgColor: "bg-neutral-200",
      platform: "paystack",
    },
    {
      id: 3,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0617dfd48f4abcda4b3daedb3008568711fa516873976fcea459f0c5c7236b9e",
      imageAlt: "MTN MoMo payment icon",
      text: "PAY WITH MTN MOMO (MTN USERS ONLY)",
      bgColor: "bg-yellow-300",
      platform: "momo",
    },
  ];

  const MainArr = country
      ? country?.toLowerCase() === "nigeria"
        ? paymentOptions
        : [
            {
              platform: "stripe",
              imageSrc: Stripe,
              imageAlt: "Credit/Debit card payment icon",
              text: "PAY WITH STRIPE",
              bgColor: "bg-neutral-200",
              id: 4,
            },
          ]
      : paymentOptions,
    [platform, setPlatform] = useState("");

  useEffect(() => {
    if (platform) {
      if (platform === "mtn") {
        let link =
          "http://ng-app.com/Martad/exams-primed-landing-en-doi-web?origin_banner=1&trxId=URLPURCHASE&trfsrc=WEBPAY";
        if (state?.item?.plan_id === "weekly")
          link =
            "http://ng-app.com/Martad/exams-primed-landing-en-doi-web?origin_banner=2&trxId=URLPURCHASE&trfsrc=WEBPAY";
        if (state?.item?.plan_id === "monthly")
          link =
            "http://ng-app.com/Martad/exams-primed-landing-en-doi-web?origin_banner=3&trxId=URLPURCHASE&trfsrc=WEBPAY";

        window.open(link, "_blank");
        setPlatform("");
      }
    }
  }, [platform, state]);

  return (
    <section
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat p-4 sm:p-6 lg:p-8"
      style={{ backgroundImage: `url('/images/profilebg.svg')` }}
    >
      <main className="flex w-full max-w-[400px] flex-col gap-6 overflow-hidden rounded-3xl bg-teal-800 p-6 sm:max-w-[600px] sm:p-8 lg:max-w-[800px] lg:flex-row lg:gap-8 lg:p-10">
        <div className="flex-1">
          <h1 className="mb-6 text-center text-2xl text-zinc-50 sm:mb-8 sm:text-3xl">
            Payment Mode
          </h1>

          <div className="flex flex-col items-center space-y-4 sm:space-y-5">
            {MainArr.map((option, ke) => (
              <PaymentOption
                key={ke}
                {...option}
                isSelected={selectedOption?.id === option.id}
                onSelect={() => handleOptionSelect(option)}
              />
            ))}
          </div>

          <div className="mt-6 sm:mt-8">
            <button
              onClick={handleProceed}
              className="w-full rounded-[100px] bg-[#3C9D9E] px-6 py-3 font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#2A8B8C]"
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
            className="w-full rounded-[100px] bg-[#3C9D9E] px-6 py-3 font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#2A8B8C]"
          >
            Back
          </button>
        </div>
      </main>
      {["momo", "stripe"]?.includes(platform) && (
        <ComingSoon handleClose={() => setPlatform("")} />
      )}
      {platform === "paystack" && (
        <MakeCardsPaystack
          handleClose={() => setPlatform("")}
          initializePayment={initializePayment}
          config={config}
        />
      )}
    </section>
  );
}

export default PaymentMode;

export const MakeCardsPaystack = ({
  handleClose,
  initializePayment,
  config,
}) => {
  let { state } = useLocation(),
    [reference, setReference] = useState(""),
    navigate = useNavigate(),
    { returnErrors } = useErrorStore();
  console.log({ config });
  useEffect(() => {
    if (state?.amount) {
      setReference(moment().format("YYYYMMDDHHmmssASSS"));
    }
  }, [state?.amount]);

  let handleSuccess = async (item) => {
    setLoading(true);
    console.log({ item }, "async");
    setLoading(true);

    let { response, errArr, errMsg } = await apiCall({
      type: "post",
      url: `/api/v1/subscription`,
      data: {
        reference: item?.reference,
        channel: "paystack",
        planId: state?.item?.planId,
      },
    });
    // console.log({ response, errArr, errMsg });
    if (errArr) {
      setLoading(false);
      return returnErrors(errArr);
    }
    if (errMsg) {
      setLoading(false);
      return toast.error(errMsg);
    }
    setLoading(false);
    if (response) {
      navigate("/");
      handleClose();
      return;
    }
    setLoading(false);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    handleClose();
  };

  const onSuccess = (ref) => {
    console.log({ ref }, "success");
    handleSuccess(ref);
  };

  useEffect(() => {
    if (reference) {
      initializePayment({
        onSuccess,
        onClose,
        reference: reference ? reference?.toString()?.split("|")?.join("") : "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reference]);

  let [loading, setLoading] = useState(false);

  return (
    <>
      <ModalContainer handleClose={handleClose}>
        <div
          style={{
            overflowY: "hidden",
          }}
          className="twpb-6 category-bg max-h-[550px] rounded-xl lg:w-full"
        >
          <div className="align-center flex justify-center">
            <Button
              label={"Paystack"}
              loading={loading}
              onClick={() => {}}
              className="w-full rounded-[100px] bg-[#3C9D9E] px-6 py-3 font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#2A8B8C]"
            />
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export const ComingSoon = ({ handleClose }) => {
  return (
    <ModalContainer handleClose={handleClose}>
      <div
        style={{
          overflowY: "hidden",
        }}
        className="twpb-6 category-bg max-h-[550px] rounded-xl lg:w-full"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          className="sansation text-center text-4xl font-extrabold leading-10 text-[#1C466C]"
        >
          Coming Soon!!!
        </h1>
      </div>
    </ModalContainer>
  );
};
