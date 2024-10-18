import React from "react";

function ResultCard({ value, label, valueColor }) {
  return (
    <div className="gap-2.5 self-stretch p-4 bg-white rounded-xl">
      <span className={`text-lg ${valueColor}`}>{value}</span>{" "}
      <span className="text-base">{label}</span>
    </div>
  );
}

export default ResultCard;