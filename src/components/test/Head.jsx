import React from "react";
import { useNavigate } from "react-router-dom";

function Head() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="flex gap-0.5 items-start self-start whitespace-nowrap">
      <img
        loading="lazy"
        src="/images/logo.png"
        alt=""
        className="object-contain shrink-0 aspect-[1.05] w-1/2 cursor-pointer"
        onClick={handleLogoClick}
      />
    </header>
  );
}

export default Head;