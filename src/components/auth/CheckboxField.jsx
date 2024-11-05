import React from 'react';
import { Link } from 'react-router-dom';

function CheckboxField({ name, checked, onChange, error }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mt-1 w-4 h-4 text-cyan-950 border-gray-300 rounded focus:ring-cyan-500"
        />
        <label className="text-sm text-gray-700">
          I agree to the{' '}
          <Link to="/terms-and-conditions" className="text-cyan-600 hover:text-cyan-700 hover:underline">
            Terms and Conditions
          </Link>
          {' '}and Privacy Policy
        </label>
      </div>
      {error && (
        <span className="mt-1 text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}

export default CheckboxField;