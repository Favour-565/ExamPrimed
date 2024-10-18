import React, { useState, useEffect } from 'react';
import NavItems from './NavItems';
import NavItem from './NavItem';
import AccountButton from './home/AccountButton';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 w-full text-base font-semibold
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-white text-black shadow-md h-16 md:h-18' : 'bg-transparent text-white h-20 md:h-24'}
        px-4 md:px-6 lg:px-8
      `}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <img
          loading="lazy"
          src="/images/logo.png"
          alt="Logo"
          className={`
            transition-all duration-300
            ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}
            w-auto
          `}
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-5 items-center">
          {NavItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </nav>

        {/* Desktop Account Button */}
        <div className="hidden lg:block">
          <AccountButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden fixed inset-x-0 top-[calc(var(--header-height,4rem))] bg-white shadow-lg
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          max-h-[calc(100vh-var(--header-height,4rem))] overflow-y-auto
          z-50
        `}
      >
        <nav className="flex flex-col p-4">
          {NavItems.map((item, index) => (
            <MobileNavItem
              key={index}
              item={item}
              onClose={() => setIsMobileMenuOpen(false)}
              isLast={index === NavItems.length - 1}
            />
          ))}
          <div className="mt-4 border-t pt-4">
            <AccountButton />
          </div>
        </nav>
      </div>
    </header>
  );
}

// Enhanced MobileNavItem component
function MobileNavItem({ item, onClose, isLast }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!item) return null;

  if (item.hasDropdown) {
    return (
      <div className={`relative ${!isLast ? 'border-b border-gray-100' : ''}`}>
        <button
          className="w-full flex justify-between items-center text-gray-800 py-4 hover:bg-gray-50 transition-colors px-2 rounded-lg"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-expanded={isDropdownOpen}
        >
          <span className="font-medium">{item.label}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={`
            overflow-hidden transition-all duration-200 ease-in-out
            ${isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="pl-4 py-2 space-y-1">
            {item.dropdownItems.map((dropdownItem, index) => (
              <Link
                key={index}
                to={dropdownItem.to}
                className="block py-3 px-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                {dropdownItem.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={item.to}
      className={`
        block py-4 px-2 text-gray-800 hover:bg-gray-50 transition-colors rounded-lg
        ${!isLast ? 'border-b border-gray-100' : ''}
      `}
      onClick={onClose}
    >
      <span className="font-medium">{item.label}</span>
    </Link>
  );
}

export default Header;