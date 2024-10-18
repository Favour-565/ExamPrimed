import React from 'react';
import NavItem from '../../common/NavItem';
import AccountButton from '../../common/home/AccountButton';
import NavLists from './NavLists';




function NavHeader() {
  return (
    
    <header className="flex relative z-10 flex-wrap gap-8 justify-center bg-white items-center px-8 py-5 w-full text-base font-semibold text-green max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="\images\logo (2).svg"
        alt="Logo"
        className="absolute top-5 left-10 z-0 h-11 w-auto"
      />
      <nav className="flex gap-5 items-center ml-auto">
        {NavLists.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </nav>
      <AccountButton/>
    </header>
  );
}

export default NavHeader;