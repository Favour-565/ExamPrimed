import React from 'react';

function InputField({ label, type, name, value, onChange, error }) {
  return (
    <div className="flex flex-col gap-2.5 w-full mt-5">
      <div className="flex gap-2.5 items-center px-2.5 py-2.5 w-full rounded-xl shadow-sm bg-zinc-50 min-h-[60px] max-md:max-w-full">
        <label htmlFor={name} className="sr-only">{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className="gap-2.5 self-stretch p-2.5 my-auto w-full bg-transparent"
          aria-label={label}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default InputField;