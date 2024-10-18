import React from "react";

function Head() {
  return (
    <header className="flex gap-0.5 items-start self-start whitespace-nowrap">
      

      <img
        loading="lazy"
        src="/images/logo.png"
        alt=""
        className="object-contain shrink-0 aspect-[1.05] w-1/2"
      />
    </header>
  );
}

export default Head;