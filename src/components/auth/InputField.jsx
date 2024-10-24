import React from 'react';

function InputField({ label, type, name, value, onChange, error }) {
  return (
    <div className="flex flex-col w-full mb-4">
      <div className="flex items-center px-4 py-3 rounded-xl shadow-sm bg-zinc-50">
        <label htmlFor={name} className="sr-only">{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className="w-full bg-transparent outline-none text-base md:text-lg"
          aria-label={label}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
export default InputField;