import React from 'react';
import About from '../components/About';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';


function AboutUs() {
  return (
    <div className="flex overflow-hidden flex-col">
      <div className="flex relative flex-col w-full text-base font-semibold text-white min-h-[240px] max-md:max-w-full">
        <img
          loading="lazy"
          src="\images\AboutUsFrame.png"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <Header/>
      </div>
     <div className='' style={{ backgroundImage: `url('/images/examSreen.png')` }}>
     
     <About/>
     </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;