import React from 'react';
import Header from '../components/common/Header';
import PolicyContent from '../components/PolicyContent';
import Footer from '../components/common/Footer';


function Policy() {
  return (
    <section className="flex  overflow-hidden flex-col">
       
       <div>
       <img
          loading="lazy"
          src="\images\POLICY-SCREEN 1.png"
          alt="Background image"
          className="object-cover absolute  h-[250px] inset-0 size-full"
        />
      <Header/>
       </div>
      <main className='flex justify-around pb-24'>
        <h1 className="absolute top-[10rem]  mx-auto   text-4xl text-white max-md:mt-10">POLICY</h1>
        <PolicyContent/>
      </main>
       
      <Footer/>
    </section>
    
  );
}

export default Policy;
