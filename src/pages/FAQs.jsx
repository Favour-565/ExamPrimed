import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FaqsItem from '../components/FaqsItem';


const faqData = [
  { question: "Do we need to install anything?" },
  { question: "Do we need to install anything?" },
  { question: "Do we need to install anything?" },
  { question: "Do we need to install anything?" },
  { question: "Do we need to install anything?" },
  { question: "Do we need to install anything?" }
];

function FAQs() {
  return (
    <main className=" relative flex overflow-hidden flex-col" style={{ backgroundImage: `url('/images/examSreen.png')` }}>
       <div className=''>
       <img
          loading="lazy"
          src="\images\FAQ 1.svg"
          alt="Background image"
          className="object-cover absolute   h-[220px] inset-0 size-full"
        />
      <Header/>
      
      
       </div>
       <h1 className="relative flex justify-center  mt-40 text-4xl text-white max-md:mt-10">FAQs</h1>
      <section className="flex flex-col self-center pb-40  pt-[6rem]  w-full text-lg font-medium max-w-[1000px] min-h-[484px] text-cyan-950 max-md:mt-10 max-md:max-w-full" >
        {faqData.map((faq, index) => (
          <FaqsItem key={index} question={faq.question} />
        ))}
      </section>
        <Footer/>
    </main>
  );
}

export default FAQs;