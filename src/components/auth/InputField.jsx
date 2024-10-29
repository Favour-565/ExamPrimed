import React from 'react';

function InputField({ label, type, name, value, onChange, error }) {
  return (
    <div className="flex flex-col w-full mb-2">
      <label className="mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
      />
      {error && (
        <span className="mt-1 text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}

export default InputField;