const ActionBtn = ({ text, iconSrc, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 justify-center items-center px-4 py-2.5 ${bgColor} rounded-lg 
                 text-white text-sm md:text-base hover:opacity-90 transition-opacity w-full md:w-auto`}
    >
      <span>{text}</span>
      <img 
        src={iconSrc} 
        alt="" 
        className="w-5 h-5 object-contain"
        loading="lazy" 
      />
    </button>
  );
};

export default ActionBtn;
