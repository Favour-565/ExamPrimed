import React from 'react';

function PracticeExam({ title, imageSrc }) {
  return (
    <div className="flex flex-col w-[320px]  max-md:ml-0 max-md:w-full">
      <div className="flex relative  flex-col grow text-lg font-bold text-white whitespace-nowrap rounded-xl aspect-[1.603]  max-md:mt-10">
        <img loading="lazy" src={imageSrc} alt={`${title} exam background`} className="object-cover absolute inset-0 size-full" />
        <div className="relative px-16 pt-36 pb-1.5  border-teal-700 border-solid shadow-sm max-md:px-5 max-md:pt-24">
          {title}
        </div>
      </div>
    </div>
  );
}

export default PracticeExam;