import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavItems = [
  { label: "HOME", component: Link, to: "/" },
  { label: "PRACTICE", component: Link, to: "/select-exam" },
  { label: "DAILY TEST", component: Link, to: "/practice-subject" },
  { label: "LEADER BOARD", component: Link, to: "/leader-board" },
  { label: "PRICING", component: Link, to: "/pricing" },
  { label: "BUY COINS", component: Link, to: "/buy-coins" },
  {
    label: "MORE",
    hasDropdown: true,
    dropdownItems: [
      { label: "Login", component: Link, to: "/login" },
      { label: "SignUp", component: Link, to: "/sign-up" },
      { label: "About Us", component: Link, to: "/about-us" },
      { label: "Contact Us", component: Link, to: "/contact-us" },
      { label: "FAQ", component: Link, to: "/faqs" },
      { label: "Instructions", component: Link, to: "/instructions" },
      { label: "Policy", component: Link, to: "/policy" },
      { label: "BuyCoin", component: Link, to: "/buy-coins" },
      { label: "Profile", component: Link, to: "/profile" },
      { label: "Review", component: Link, to: "/review" },
      { label: "PracticeSubjects", component: Link, to: "/practice-subject" },
      { label: "Logout", component: Link, to: "/" },
    ],
  },
];

export default NavItems;
