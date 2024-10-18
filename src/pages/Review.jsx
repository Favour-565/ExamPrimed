import React from 'react';


import ReviewCarousel from '../components/review/ReviewCarousel';
import Header from '../components/common/Header';
import ReviewSection from '../components/review/ReviewSection';
import Footer from '../components/common/Footer';

const Review= () => (
  <main className="flex overflow-hidden flex-col">
    <div className="flex relative flex-col w-full font-semibold text-white min-h-[240px] max-md:max-w-full">
      <img loading="lazy" src="\images\user-experience-stars.png" alt="Background" className="object-cover absolute inset-0 size-full" />
      <Header/>
    </div>
    <div className='pb-20' style={{ backgroundImage: `url('/images/examSreen.png')` }}>
    <ReviewCarousel />
    </div>
    <ReviewSection/>
    <Footer/>
    
  </main>
);

export default Review;