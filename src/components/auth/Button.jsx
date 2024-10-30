/* eslint-disable react/prop-types */
import { ClipLoader } from "react-spinners";
import { IoClose } from "react-icons/io5";

function Button({
  label,
  onClick,
  className = "",
  disabled = false,
  loading,
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      className={`flex items-center justify-center gap-2.5 self-stretch ${(disabled || loading) && "cursor-not-allowed bg-opacity-40"} ${
        className ||
        "mt-8 min-h-[74px] w-full rounded-xl bg-teal-700 px-2.5 py-4 text-xl font-semibold text-zinc-50 shadow-sm max-md:max-w-full"
      }`}
    >
      {label}
      {loading && <ClipLoader color={"white"} size={16} />}
    </button>
  );
}

export default Button;

export const ModalContainer = ({ handleClose, children, height }) => {
  return (
    <div>
      <div
        onClick={(e) => e.target === e.currentTarget && handleClose()}
        className="bg-primary fixed inset-0 z-[1000] flex min-h-screen w-full items-center justify-center bg-opacity-50 backdrop-blur-sm"
      >
        <div
          className={`w-full max-w-md rounded-lg bg-white shadow-sm transition-all duration-700 ease-in-out ${
            height && "h-3/4"
          } noScroll overflow-y-scroll p-4`}
        >
          {" "}
          <div className="flex justify-end">
            <IoClose className="cursor-pointer" onClick={handleClose} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
