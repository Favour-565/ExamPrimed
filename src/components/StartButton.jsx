/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../data/stores/authStore";

function StartButton({ text, className, selectedYear }) {
  const navigate = useNavigate(),
    { state } = useLocation(),
    { isAuth } = useAuthStore();

  const handleStartClick = () => {
    if (selectedYear) {
      navigate(isAuth ? "/test" : "/login", {
        state: {
          ...state,
          year: selectedYear,
        },
      });
    } else {
      alert("Please select a year first.");
    }
  };

  return (
    <button
      className={`whitespace-nowrap rounded-[100px] bg-teal-800 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
      onClick={handleStartClick}
    >
      {text}
    </button>
  );
}

export default StartButton;
