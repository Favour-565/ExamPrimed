import React from 'react';

function Button({ label, type = "button", onClick }) {
  return (
    <button 
      type={type}
      onClick={onClick}
      className="flex gap-2.5 justify-center items-center self-stretch px-2.5 py-4 mt-8 text-xl font-semibold bg-teal-700 rounded-xl shadow-sm min-h-[74px] text-zinc-50 max-md:max-w-full w-full"
    >
      {label}
    </button>
  );
}

export default Button;

