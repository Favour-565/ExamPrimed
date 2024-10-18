import React from 'react';
import { useNavigate } from 'react-router-dom';

function AccountButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <div className="bg-[#00595F] bg-opacity-100 mr-10 border py-2 px-9 p-3 rounded-[25px]">
      <button 
        className="text-white hover:text-white-800"
        onClick={handleClick}
      >
        My Account
      </button>
    </div> 
  );
}

export default AccountButton;