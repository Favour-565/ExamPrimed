import React from "react";

function SubjectCard({ name, image, onClick }) {
  return (
    <div 
      className="flex relative flex-col px-px pt-32 whitespace-nowrap rounded-lg aspect-square w-[170px] max-md:pt-24 cursor-pointer hover:opacity-90 transition-opacity"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <img 
        loading="lazy" 
        src={image} 
        alt={`${name} subject`} 
        className="object-cover absolute inset-0 size-full" 
      />
      <div className="relative gap-2.5 self-stretch px-4 py-2.5">
        {name}
      </div>
    </div>
  );
}

export default SubjectCard;