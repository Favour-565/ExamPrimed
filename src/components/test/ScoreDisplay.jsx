import React from 'react';

const ScoreDisplay = ({ score }) => {
  return (
    <div className="absolute top-4 left-4 bg-red-600 text-white py-1 px-3 rounded-lg">
      {score}
    </div>
  );
};

export default ScoreDisplay;
