import React from 'react';

import Hero from '../components/common/Home/Hero';
import ExamSection from '../components/common/home/ExamSection';
import SubjectsSection from '../components/common/home/SubjectsSection';
import PartnersSection from '../components/common/home/PartnersSection';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';








function LandingPage() {
  return (
    <main className="flex overflow-hidden flex-col">
      <div className="flex relative flex-col pt-2.5 w-full min-h-[720px] max-md:max-w-full">
        <img loading="lazy" src="\images\HomeBackground1.svg" alt="Background image" className="object-cover absolute inset-0 size-full" />
        <Header/>
        <Hero/>
      </div>
      <ExamSection/>
      <SubjectsSection/>
      <PartnersSection/>
                                   
      <Footer/>
    </main>
  );
}

export default LandingPage;