import React from 'react';
import Socials from './Socials';

function ContactInfo() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@examprimed.com';
  };

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/0812345678', '_blank');
  };

  return (
    <section className="flex flex-col  w-[25%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start mt-2 w-full text-base font-medium text-black max-md:mt-10">
        <h1 className="text-2xl font-semibold">HOW CAN WE HELP YOU?</h1>
        <p className="self-stretch mt-2.5 text-xl">You can fill this form or drop an email to</p>
        <button 
          onClick={handleEmailClick}
          className="flex gap-5 justify-center items-center self-stretch mr-20 px-8 py-3 mt-4 text-xl text-white whitespace-nowrap bg-teal-700 rounded-[100px] max-md:px-5 max-md:mr-0.5"
        >
          <img 
            loading="lazy" 
            src="\vectors\fluent_mail-24-filled.png" 
            alt="" 
            className="object-contain shrink-0 self-stretch   my-auto w-8 aspect-square" 
          />
          <span className="self-stretch my-auto">info@examprimed.com</span>
        </button>
        
        <div 
          onClick={() => handlePhoneClick('+2348092933330')}
          className="flex flex-wrap gap-5 justify-center items-center cursor-pointer px-3 py-0 mt-20 border-2 border-teal-700 border-solid rounded-[100px] max-md:px-5 max-md:mt-10"
        >
          <img 
            loading="lazy" 
            src="/vectors/ion_call.png" 
            alt="" 
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
          />
          <div className="self-stretch my-auto">
            +234 809 293 3330 <br /> +234 704 330 3000
          </div>
        </div>
        
        <div 
          onClick={handleWhatsAppClick}
          className="flex gap-5 justify-center items-center cursor-pointer px-8 py-2 mt-5 whitespace-nowrap border-2 border-teal-700 border-solid rounded-[100px] max-md:px-5"
        >
          <img 
            loading="lazy" 
            src="\vectors\whatssap.png" 
            alt="" 
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
          />
          <span className="self-stretch my-auto">0812345678</span>
        </div>
        
        <div className="flex gap-5 justify-center items-center px-8 py-2 mt-5 whitespace-nowrap border-2 border-teal-700 border-solid rounded-[100px] max-md:px-5">
          <img 
            loading="lazy" 
            src="\vectors\facebook.png" 
            alt="" 
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
          />
          <span className="self-stretch my-auto">ExamPrime</span>
        </div>
        
        <Socials />
      </div>
    </section>
  );
}

export default ContactInfo;