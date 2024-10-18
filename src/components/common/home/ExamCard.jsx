import React from 'react';

// eslint-disable-next-line react/prop-types
function ExamCard({ imageSrc, text}) {
  return (
    <div className="flex flex-col ml-[14px] w-[60%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col pt-80 w-full text-base text-white rounded-3xl min-h-[355px] max-md:pt-24 max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src={imageSrc} alt="Exam preparation" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-wrap gap-5 justify-between px-8 py-3.5 bg-teal-800 rounded-none border-t-2 border-solid border-t-sky-300 max-md:px-5 max-md:max-w-full">
          <div>{text}</div>
           {/* <img loading="lazy" src="\images\examSectionImage1.svg" alt="" className="object-contain shrink-0 w-4 rounded-none aspect-square" />
          <img loading="lazy" src="\images\examSectionImage2.svg" alt="" className="object-contain shrink-0 w-4 rounded-none aspect-square" />  */}
        </div>
      </div>
    </div>
  );
}

export default ExamCard;