/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../data/stores/authStore";
import { useLogout } from "../../data/useFetcher";

const NavItem = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false),
    { isAuth } = useAuthStore(),
    { handleLogout } = useLogout();

  if (typeof item === "object" && item !== null) {
    if (item.hasDropdown) {
      return (
        <div className="relative">
          <div
            className="my-auto flex cursor-pointer items-center justify-center gap-2.5 self-stretch whitespace-nowrap p-2.5 hover:text-gray-300"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {item.label}
            <svg
              className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {item.dropdownItems &&
                  item.dropdownItems.map((dropdownItem, index) =>
                    dropdownItem?.label === "Logout" ? (
                      isAuth ? (
                        <Link
                          onClick={() => {
                            if (dropdownItem?.label === "Logout") {
                              setIsDropdownOpen(!isDropdownOpen);
                              handleLogout();
                            }
                          }}
                          key={index}
                          to={dropdownItem.to}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ) : null
                    ) : (
                      <Link
                        onClick={() => {
                          if (dropdownItem?.label === "Logout") {
                            setIsDropdownOpen(!isDropdownOpen);
                            handleLogout();
                          }
                        }}
                        key={index}
                        to={dropdownItem.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {dropdownItem.label}
                      </Link>
                    ),
                  )}
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <Link
          to={item.to}
          className="my-auto flex cursor-pointer items-center justify-center gap-2.5 self-stretch whitespace-nowrap p-2.5 hover:text-gray-300"
        >
          {item.label}
        </Link>
      );
    }
  }
  return null;
};

export default NavItem;
