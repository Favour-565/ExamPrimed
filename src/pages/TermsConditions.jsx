import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Content from '../components/terms-and-conditions/Content';


function TermsConditions() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="relative flex flex-col w-full font-semibold text-white min-h-[240px]">
        <img 
          loading="lazy" 
          src="/images/terms and conditions.png" 
          alt="Background image" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Header />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-semibold
          lg:mt-48
          md:mt-36
          sm:mt-24
          mt-20">
          TERMS AND CONDITIONS
        </h1>
      </div>
      
      <div className="flex-grow flex justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url('/images/examScreen.png')` }}>
        <Content />
      </div>
      
      <Footer />
    </div>
  );
}

export default TermsConditions;