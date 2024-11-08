import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FaqsItem from '../components/FaqsItem';


const faqData = [
  { question: "what is a LMS? A Learning Management System (LMS) is a learning portal—or an online learning platform—designed to automate the delivery of eLearning and mobile learning courses to its learners.  " },
  { question: "What are the advantages of ExamPrimed? Flexibility: In the regular type of learning, students usually have a fixed routine of sitting together and learning from the instructor. Prompt Access to Varied Resources: Students need access to different kinds of resources. These resources can be information, notes, theories, diagrams etc. These resources are available to the students at all times of the day."},
  { question: "How are courses presented to the learners? " },
  { question: "Can Users view which courses and tests they have taken?" },
  { question: "What do learners need to access ExamPrimed? " },
  { question: "DWhat language options are available? " }
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
       <h1 className="relative flex justify-center  mt-40 text-4xl text-white min-md- max-md:mt-10 ">FAQs</h1>
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