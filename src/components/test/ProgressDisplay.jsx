import React from 'react';

const ProgressDisplay = ({ progress }) => {
  return (
    <div className="absolute top-4 right-4 bg-red-600 text-white py-1 px-3 rounded-lg">
      {progress}
    </div>
  );
};

export default ProgressDisplay;
