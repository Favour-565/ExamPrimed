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


const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-20 flex h-fit w-full items-center justify-between bg-white px-4 py-3 shadow-md lg:hidden">
        <img
          loading="lazy"
          src="/images/colored-logo.svg"
          alt="Exam primed Logo"
        />

        {!isMenuOpen ? (
          <div className="inline-flex items-center gap-5">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2C8.60077 1.99974 7.22593 2.36649 6.01273 3.06363C4.79952 3.76077 3.79038 4.76392 3.08603 5.97295C2.38168 7.18199 2.00675 8.55462 1.99868 9.95383C1.9906 11.3531 2.34966 12.7299 3.04001 13.947C3.50662 13.3406 4.10644 12.8496 4.7931 12.512C5.47975 12.1744 6.23485 11.9992 7.00001 12H13C13.7652 11.9992 14.5203 12.1744 15.2069 12.512C15.8936 12.8496 16.4934 13.3406 16.96 13.947C17.6504 12.7299 18.0094 11.3531 18.0013 9.95383C17.9933 8.55462 17.6183 7.18199 16.914 5.97295C16.2096 4.76392 15.2005 3.76077 13.9873 3.06363C12.7741 2.36649 11.3993 1.99974 10 2ZM17.943 16.076C18.0683 15.9127 18.1883 15.7453 18.303 15.574C19.4116 13.9267 20.0026 11.9856 20 10C20 4.477 15.523 0 10 0C4.47701 0 1.02555e-05 4.477 1.02555e-05 10C-0.00314107 12.1968 0.72005 14.3329 2.05701 16.076L2.05201 16.094L2.40701 16.507C3.3449 17.6035 4.50939 18.4836 5.82024 19.0866C7.13109 19.6897 8.55711 20.0013 10 20C10.216 20 10.4307 19.9933 10.644 19.98C12.4484 19.8662 14.1877 19.2629 15.675 18.235C16.3863 17.7443 17.031 17.1635 17.593 16.507L17.948 16.094L17.943 16.076ZM10 4C9.20436 4 8.4413 4.31607 7.87869 4.87868C7.31608 5.44129 7.00001 6.20435 7.00001 7C7.00001 7.79565 7.31608 8.55871 7.87869 9.12132C8.4413 9.68393 9.20436 10 10 10C10.7957 10 11.5587 9.68393 12.1213 9.12132C12.6839 8.55871 13 7.79565 13 7C13 6.20435 12.6839 5.44129 12.1213 4.87868C11.5587 4.31607 10.7957 4 10 4Z"
                  fill="#008E90"
                />
              </svg>
            </span>

            <div onClick={() => setIsMenuOpen(true)}>
              <span>
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11H19M1 6H19M1 1H19"
                    stroke="#008E90"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        ) : (
          <span onClick={() => setIsMenuOpen(false)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM13.59 5L10 8.59L6.41 5L5 6.41L8.59 10L5 13.59L6.41 15L10 11.41L13.59 15L15 13.59L11.41 10L15 6.41L13.59 5Z"
                fill="#008E90"
              />
            </svg>
          </span>
        )}
      </nav>

      {isMenuOpen && <MobileMenus />}
    </>
  );
};

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