import NavItems from "./NavItems";
import NavItem from "./NavItem";
import AccountButton from "./home/AccountButton";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  
  const isAwardOrProfile = location.pathname === '/award' || location.pathname === '/profile';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const getHeaderBackground = () => {
    if (isAwardOrProfile) {
      return "bg-[#008E90]";
    }
    return isScrolled ? "bg-white" : "bg-transparent";
  };

  
  const getTextColor = () => {
    if (isAwardOrProfile) {
      return "text-white";
    }
    return isScrolled ? "text-black" : "text-white";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 w-full py-2 transition-colors duration-300 ease-in-out ${getHeaderBackground()} ${getTextColor()} ${isScrolled && !isAwardOrProfile ? "shadow-lg" : ""}`}
    >
      <nav className="mx-auto flex max-w-[1300px] items-center justify-between px-2 text-base font-semibold">
        <img
          loading="lazy"
          src={`images/${isAwardOrProfile || !isScrolled ? "white-logo.svg" : "colored-logo.svg"}`}
          alt="Exam primed Logo"
          className="h-12 w-auto"
        />
        <ul className="flex items-center gap-5">
          {NavItems.map((item, index) => (
            <NavItem 
              key={index} 
              item={{
                ...item,
                className: isAwardOrProfile ? "text-white hover:text-gray-200" : undefined
              }} 
            />
          ))}
        </ul>
        <AccountButton className={isAwardOrProfile ? "text-white" : undefined} />
      </nav>
    </header>
  );
}

export default Header;