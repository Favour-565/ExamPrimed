import React from 'react';
import ExamCard from './ExamCard';

function ExamSection() {
  return (
    <section
      className="flex flex-col items-center pb-32  w-full max-md:pb-24 max-md:max-w-full relative"
      
    >
      {/* inset-0 bg-teal-800 bg-opacity-10 */}
      <div className="absolute " />

      <img
        className="absolute h-full top-[0px] bottom-[0px]  max-h-full max-w-full object-fit"
        alt=""
        src="\images\examSreen.png"
      />
      <div className="relative  flex z-10 self-stretch mt-0 w-full min-h-[86px] max-md:max-w-full" />
      <div className="relative z-10 ml-4 w-full max-w-[1160px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
            <h2 className="mt-52 text-3xl font-semibold text-black max-md:mt-10">
              <span className="text-3xl">Practice with over</span>{" "}
              <span className="text-4xl text-teal-800">10,000</span>{" "}
              <span className="text-3xl">Examination Past Questions</span>
            </h2>
          </div>
          <ExamCard
            imageSrc="/images/examSectionImage1.svg"
            text="Lorem ipsum dolor sit amet"
            
          />
        </div>
      </div>
      <div className="relative z-10 mt-10 mb-0 ml-12 w-full  max-w-[1160px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className=" pt-6 flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
            <p className="text-base text-black max-md:mt-16 max-md:max-w-full">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          
          <ExamCard 
            imageSrc="/images/examSectionImage2.svg"
            text="Lorem ipsum dolor sit amet"
            
            
          />
          
        </div>
      </div>
    </section>
  );
}

export default ExamSection;