import React from 'react';
import ExamCard from './ExamCard';


function SubjectsSection() {
  return (
    <section className="flex flex-col  w-full max-md:mt-10 max-md:max-w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/examSreen.png')` }}>
      <div className="relative" />
      <div className="flex flex-wrap gap-10 justify-between items-center self-center w-full max-w-[1270px] max-md:max-w-full">
        <div className="flex flex-col self-stretch pl-16 pr-2 pb-2 my-auto text-black rounded-none min-w-[240px] w-[486px] max-md:max-w-full">
          <h2 className="self-start text-3xl font-semibold">
            <span className="text-4xl text-teal-800">30</span>{" "}
            <span className="text-3xl">Subjects</span>{" "}
            <span className="text-3xl">covered</span>
          </h2>
          <p className="self-start mt-11 text-base max-md:mt-10 max-md:max-w-full">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
       
        <div className='pt-12 pr-14'>
        <img src="\images\subject1.png" alt="" />
        
        </div>
       
      </div>
      
      <div className="flex flex-wrap gap-9 items-center self-center mt-24 max-md:mt-10 max-md:max-w-full">
        <div className='pb-9 pr-10'>
        <img src="\images\subject2.svg" alt="" />
        </div>
        <div className="flex flex-col self-stretch px-0.5 pb-2 my-auto text-black rounded-none min-w-[240px] w-[545px] max-md:max-w-full">
          <h2 className="text-3xl font-semibold max-md:max-w-full">
            <span className="text-3xl">Over</span>{" "}
            <span className="text-4xl text-teal-800">40 years</span>{" "}
            <span className="text-3xl">of past examinations</span>
            <br />
            <span className="text-3xl">Questions Past Questions</span>
          </h2>
          <p className="self-start mt-11 text-base max-md:mt-10 max-md:max-w-full">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default SubjectsSection;