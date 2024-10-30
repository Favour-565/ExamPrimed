/* eslint-disable react/prop-types */

function PracticeExam({ title, imageSrc, onClick, className }) {
  return (
    <div
      className={`flex w-[320px] flex-col max-md:ml-0 max-md:w-full ${className || ""}`}
      onClick={onClick}
    >
      <div className="relative flex aspect-[1.603] grow flex-col whitespace-nowrap rounded-xl text-lg font-bold text-white max-md:mt-10">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${title} exam background`}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="relative border-solid border-teal-700 px-16 pb-1.5 pt-36 uppercase shadow-sm max-md:px-5 max-md:pt-24">
          {title}
        </div>
      </div>
    </div>
  );
}

export default PracticeExam;
