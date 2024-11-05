/* eslint-disable react/prop-types */

function InputField({ label, type, name, value, onChange, error, maxLength }) {
  return (
    <div className="mb-2 flex w-full flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
        maxLength={maxLength}
      />
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
}

export default InputField;
