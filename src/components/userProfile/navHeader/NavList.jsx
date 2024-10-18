import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavList = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (typeof item === 'object' && item !== null) {
    if (item.hasDropdown) {
      return (
        <div className="relative">
          <div 
            className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto whitespace-nowrap cursor-pointer hover:text-gray-300"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {item.label}
            <svg 
              className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {item.dropdownItems && item.dropdownItems.map((dropdownItem, index) => (
                  <Link 
                    key={index} 
                    to={dropdownItem.to} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {dropdownItem.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <Link 
          to={item.to}
          className="flex gap-2.5 justify-center items-center self-stretch p-2.5 my-auto whitespace-nowrap cursor-pointer hover:text-gray-300"
        >
          {item.label}
        </Link>
      );
    }
  }
  return null; 
};

export default NavList;