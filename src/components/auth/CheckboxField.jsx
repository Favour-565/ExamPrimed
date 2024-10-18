import React from 'react';

function CheckboxField({ name, checked, onChange, error }) {
  return (
    <div className="flex flex-col gap-2.5 mt-20 max-w-full text-sm text-teal-700 w-[499px] max-md:mt-10">
      <div className="flex items-center">
        <input 
          type="checkbox" 
          id={name} 
          name={name}
          checked={checked}
          onChange={onChange}
          className="shrink-0 w-5 h-5 bg-white rounded border border-black border-solid" 
        />
        <label htmlFor={name} className="ml-2 flex-auto underline w-[465px] max-md:max-w-full">
          I agree to the <span className="text-base font-medium text-teal-700 underline">Terms</span> and <span className="text-base text-teal-700 underline">Conditions</span> as set out by the user agreement
        </label>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default CheckboxField;