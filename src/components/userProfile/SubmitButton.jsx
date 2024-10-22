function SubmitButton({ text, icon, className = "", onClick }) {
    return (
      <button
        onClick={onClick}
        className={`flex justify-center items-center px-16 py-5 mt-8 w-full md:w-[42rem] text-2xl font-semibold whitespace-nowrap rounded-md bg-cyan-950 text-zinc-50 max-md:px-5 ${className}`}
      >
        <div className="flex gap-2.5">
          <span>{text}</span>
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 w-8 aspect-square"
          />
        </div>
      </button>
    );
  }
  
  export default SubmitButton;