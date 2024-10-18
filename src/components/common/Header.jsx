import React, { useState, useEffect } from 'react';
import NavItems from './NavItems';
import NavItem from './NavItem';
import AccountButton from './home/AccountButton';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 flex flex-wrap gap-8 justify-between items-center  w-full text-base font-semibold
        transition-colors duration-300 ease-in-out
        ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}
        max-md:px-5 max-md:max-w-full
      `}
    >
      <img
        loading="lazy"
        src="/images/logo.png"
        alt="Logo"
        className="h-11 w-auto"
      />
      <nav className="flex gap-5 items-center">
        {NavItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </nav>
      <AccountButton />
    </header>
  );
}

export default Header;