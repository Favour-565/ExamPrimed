import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FaqsItem from '../components/FaqsItem';


const faqData = [
  { question: "What is ExamPrimed? ExamPrimed is an educative platform that makes learning fun and revision easy. The platform combines entertainment with education and offers engaging, interactive exams across various subjects. It promotes critical thinking and problem-solving skills for different age groups." },
  { question: "What are the advantages of ExamPrimed? Flexibility: In the regular type of learning, students usually have a fixed routine of sitting together and learning from the instructor. Prompt Access to Varied Resources: Students need access to different kinds of resources. These resources can be information, notes, theories, diagrams etc. These resources are available to the students at all times of the day."},
  { question: "How are courses presented to the learners? Once users log into their account on the dashboard, they would click on Exam, Subject, then Year to access the questions. " },
  { question: "What are the features of ExamPrimed?  On ExamPrimed Students learn at their own speed and pace!. Students learn for their needs and interests.Geographical barriers to learning are eliminated.Subjects are syllabus-tailored and carefully designed to sustain Students’ interest!The resources are available at all times. Students can access them wherever, whenever!. The system is flexible. It inspires learning and creativity. Students test their learning outcomes immediately on completion of the subjects using Computer Based Testing (CBT) in the system. ExamPrimed prepare students for certain types of exams." },
  { question: "What do learners need to access ExamPrimed? To access the ExamPrimed system, learners need an internet-enabled device and an Internet browser such as Microsoft’s Internet Explorer 8.0, Mozilla Firefox 3.0 or Google Chrome, Apple Safari. (For the web users: www.examprimed.com). We do not offer support for the various generic, manufacturer, or service provider browsers that are pre-installed on many mobile devices. A supported browser app can be downloaded from your phone’s application provider. " },
  { question: "How does the price of ExamPrimed compare to the price of installed systems?  1. You don’t have any software purchase and installation costs.You don’t have any IT staff costs.Your maintenance contracts are zero.You don’t have to purchase and install complicated and expensive software to access training.ExamPrimed is available 24 hours a day and you don’t have to leave your computer or mobile devices. See how we can save you money. Contact sales today!Subscriptions are designed to fit your needs, offering the same service benefits across all plans. " }
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