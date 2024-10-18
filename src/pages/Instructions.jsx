import React from 'react';
import Header from '../components/common/Header';
import MainContent from '../components/instructions/MainContent';
import Footer from '../components/common/Footer';


function Instructions() {
  return (
    <div className="flex overflow-hidden flex-col">
      <div className="flex relative flex-col w-full font-semibold text-white min-h-[240px] max-md:max-w-full">
        <img
          loading="lazy"
          src="\images\instruction frame.png"
          alt="Background image"
          className="object-cover absolute inset-0 size-full "
          
        />
        <h1 className='absolute mt-[12rem] ml-[33rem] text-3xl font-semibold  max-md:mt-10 '>INSTRUCTIONS</h1>
      <Header/>
      
        
     </div>
      <div className='flex justify-center' style={{ backgroundImage: `url('/images/examSreen.png')` }}>
      <MainContent/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default Instructions;
