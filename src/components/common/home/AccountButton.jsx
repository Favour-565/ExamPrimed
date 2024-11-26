import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../data/stores/authStore";

function AccountButton() {
  const navigate = useNavigate(),
    { isAuth } = useAuthStore();

  const handleClick = () => {
    navigate(isAuth ? "/profile" : "/login");
  };

  return (
    <div className="mr-10 rounded-[25px] border bg-[#00595F] bg-opacity-100 p-3 px-9 py-2">
      <button
        className="hover:text-white-800 text-xl text-white"
        onClick={handleClick}
      >
        {isAuth ? "Settings" : "Login"}
      </button>
    </div>
  );
}

export default AccountButton;
