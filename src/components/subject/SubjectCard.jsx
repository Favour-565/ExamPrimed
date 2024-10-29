import React from "react";

function SubjectCard({ subject, onClick }) {
  if (!subject) {
    return null; // Or some fallback UI
  }

  return (
    <button 
      onClick={() => onClick && onClick(subject)}
      className="relative w-full max-w-[320px] aspect-[1.6] rounded-xl overflow-hidden transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-700"
    >
      <img 
        loading="lazy" 
        src={subject.image} 
        alt={`${subject.name} background`} 
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.src = '/images/subject-placeholder.png';
          e.target.className = 'absolute inset-0 w-full h-full object-cover opacity-50';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <span className="text-base sm:text-lg font-bold text-white">
            {subject.name}
          </span>
        </div>
      </div>
    </button>
  );
}

export default SubjectCard;