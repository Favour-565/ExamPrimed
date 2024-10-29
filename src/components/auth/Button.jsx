import React from 'react';

function Button({ label, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full px-6 py-3 text-base md:text-lg font-semibold text-white bg-[#007273] rounded-lg hover:bg-cyan-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
    >
      {label}
    </button>
  );
}


export default Button;

