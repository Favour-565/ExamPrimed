/* eslint-disable react/prop-types */

import NavItems from "./NavItems";
import NavItem from "./NavItem";
import AccountButton from "./home/AccountButton";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isAwardOrProfile =
    location.pathname === "/award" || location.pathname === "/profile";

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
    <>
      <div className="relative">
        <DesktopHeader
          isScrolled={isScrolled}
          isAwardOrProfile={isAwardOrProfile}
        />
        <MobileHeader isAwardOrProfile={isAwardOrProfile} />
      </div>
    </>
  );
}

const DesktopHeader = ({ isScrolled, isAwardOrProfile }) => {
  const getHeaderClasses = () => {
    if (isAwardOrProfile) {
      return "bg-white text-[#008E90]";
    }
    return isScrolled ? "bg-white text-black" : "bg-transparent text-white";
  };

  const getLogoSource = () => {
    if (isAwardOrProfile) {
      return "images/colored-logo.svg";
    }
    return `images/${!isScrolled ? "white-logo.svg" : "colored-logo.svg"}`;
  };

  return (
    <header
      className={`fixed inset-0 z-20 hidden h-fit w-full py-2.5 transition-colors duration-300 ease-in-out lg:block ${getHeaderClasses()} ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-[1300px] items-center justify-between px-2 text-base font-semibold">
        <Link to="/">
          <img loading="lazy" src={getLogoSource()} alt="Exam Prime Logo" />
        </Link>

        <ul className="hidden items-center gap-5 lg:flex">
          {NavItems.map((item, label) => (
            <NavItem
              key={label}
              item={{
                ...item,
                className: isAwardOrProfile
                  ? "text-[#008E90]"
                  : item.className,
              }}
            />
          ))}
        </ul>

        <div className="hidden lg:block">
          <AccountButton />
        </div>
      </nav>
    </header>
  );
};

const MobileHeader = ({ isAwardOrProfile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerClass = isAwardOrProfile ? "bg-white" : "bg-white";
  const iconColor = isAwardOrProfile ? "#008E90" : "#008E90";

  return (
    <nav
      className={`fixed top-0 z-20 flex h-fit w-full items-center justify-between ${headerClass} px-4 py-3 shadow-md lg:hidden`}
    >
      <Link to="/">
        <img
          loading="lazy"
          src="/images/colored-logo.svg"
          alt="Exam Prime Logo"
        />
      </Link>

      {/* Remaining code for the menu toggle button */}
    </nav>
  );
};55

const MobileMenus = ({ isMenuOpen }) => {
  const navLinks = [
    { label: "HOME", component: Link, to: "/" },
    { label: "PRACTICE", component: Link, to: "/select-exam" },
    { label: "DAILY TEST", component: Link, to: "/practice-subject" },
    { label: "LEADER BOARD", component: Link, to: "/leader-board" },
    { label: "PRICING", component: Link, to: "/pricing" },
    { label: "BUY COINS", component: Link, to: "/buy-coins" },
    { label: "CONTACT US", component: Link, to: "/contact-us" },
    { label: "INSTRUCTIONS", component: Link, to: "/instructions" },
    { label: "ABOUT US", component: Link, to: "/about-us" },
    { label: "FAQs", component: Link, to: "/faqs" },
    { label: "POLICY", component: Link, to: "/policy" },
    { label: "TERMS & CONDITIONS", component: Link, to: "/terms-conditions" },
  ];

  return (
    <>
      <div
        className={`fixed right-0 top-[68px] z-20 h-screen w-full bg-white bg-opacity-90 px-8 py-7 font-Poppins font-semibold text-[#00393A] transition-transform duration-1000 ease-in-out ${
          isMenuOpen ? "transform-translate-x-0" : "transform-translate-x-full"
        }`}
      >
        <ul className="flex h-full w-full flex-col items-start gap-6 overflow-scroll">
          {navLinks.map((item) => (
            <Link to={item.to} key={item.label}>
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
