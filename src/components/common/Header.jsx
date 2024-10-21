import React, { useState, useEffect } from "react";
import NavItems from "./NavItems";
import NavItem from "./NavItem";
import AccountButton from "./home/AccountButton";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 w-full py-2 transition-colors duration-300 ease-in-out ${isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"}`}
    >
      <nav className="mx-auto flex max-w-[1300px] items-center justify-between px-2 text-base font-semibold">
        <img
          loading="lazy"
          src={`images/${!isScrolled ? "white-logo.svg" : "colored-logo.svg"}`}
          alt="Exam primed Logo"
        />
        <ul className="flex items-center gap-5">
          {NavItems.map((item, label) => (
            <NavItem key={label} item={item} />
          ))}
        </ul>
        <AccountButton />
      </nav>
    </header>
  );
}

export default Header;
