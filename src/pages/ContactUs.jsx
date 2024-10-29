import React from "react";
import Footer from "../components/common/Footer";

import ContactForm from "../components/contactUs/ContactForm";
import ContactInfo from "../components/contactUs/ContactInfo";
import Header from "../components/common/Header";


function ContactUs() {
  return (
    <section className=" relative flex overflow-hidden flex-col">
      <header className="flex relative flex-col  w-full min-h-[300px] max-md:max-w-full">
        <img
          loading="lazy"
          src="\images\contactUsBanner.png"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <Header className="absolute top-0 left-0 right-0 z-10" />
      </header>
      
      <main className="  w-full  max-md:mt-10 max-md:max-w-full" style={{ backgroundImage: `url('/images/examSreen.png')` }}>

      
        <div className="flex gap-2 justify-around pt-14 pb-52 max-md:flex-col">
          <ContactInfo />
          <ContactForm />
          
          
          
        </div>
        
       
       
      </main>
     <Footer />

      
     
    </section>
  );
}

export default ContactUs;
