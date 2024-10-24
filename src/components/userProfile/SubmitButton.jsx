function SubmitButton({ text, icon, className = "", onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center px-16 py-5 mt-8 w-full md:w-[42rem] text-2xl font-semibold whitespace-nowrap rounded-md bg-cyan-950 text-zinc-50 max-md:px-5 
      ${disabled ? 'opacity-70 cursor-not-allowed' : 'hover:bg-cyan-900 transition-colors'} 
      ${className}`}
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