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
    window.open('https://wa.me/07043303000', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://web.facebook.com/profile.php?id=61569332769702', '_blank');
  };

  return (
    <section className="flex flex-col items-center w-[30%] max-md:w-[80%] max-md:mx-auto max-md:mt-6">
      <div className="flex flex-col items-start mt-2 w-full text-base font-medium text-black">
        <h1 className="text-2xl font-semibold">HOW CAN WE HELP YOU?</h1>
        <p className="self-stretch mt-2.5 text-xl">You can fill this form or drop an email to</p>
        <button 
          onClick={handleEmailClick}
          className="flex gap-5 justify-center items-center w-full px-8 py-3 mt-4  text-sm text-white bg-teal-700 rounded-full"
        >
          <img 
            loading="lazy" 
            src="/vectors/fluent_mail-24-filled.png" 
            alt="Email icon" 
            className="w-8 h-8"
          />
          <span>info@examprimed.com</span>
        </button>

        <div 
          onClick={() => handlePhoneClick('+2347043303000')}
          className="flex gap-5 justify-center items-center cursor-pointer w-full px-8 py-3 mt-6 border-2 border-teal-700 rounded-full"
        >
          <img 
            loading="lazy" 
            src="/vectors/ion_call.png" 
            alt="Phone icon" 
            className="w-6 h-6"
          />
          <div>
            +234 7043303000
          </div>
        </div>

        <div 
          onClick={handleWhatsAppClick}
          className="flex gap-5 justify-center items-center cursor-pointer w-full px-8 py-3 mt-5 border-2 border-teal-700 rounded-full"
        >
          <img 
            loading="lazy" 
            src="/vectors/whatssap.png" 
            alt="WhatsApp icon" 
            className="w-6 h-6"
          />
          <span>07043303000</span>
        </div>

        <div 
          onClick={handleFacebookClick}
          className="flex gap-5 justify-center items-center cursor-pointer w-full px-8 py-3 mt-5 border-2 border-teal-700 rounded-full"
        >
          <img 
            loading="lazy" 
            src="/vectors/facebook.png" 
            alt="Facebook icon" 
            className="w-6 h-6"
          />
          <span>ExamPrime</span>
        </div>

        <Socials />
      </div>
    </section>
  );
}

export default ContactInfo;