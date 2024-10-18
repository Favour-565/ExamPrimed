import React from 'react';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer className="flex overflow-hidden flex-wrap gap-5 justify-between items-start px-20 py-20 w-full max-md:px-5 max-md:max-w-1/2 bg-cover bg-center "
      style={{ backgroundImage: `url('/images/footerbg.svg')` }}>
      <div className="flex flex-col text-white">
        <div className="flex flex-col text-lg font-semibold">
          <span className="text-base leading-5">A Product of Martad Education</span>{" "}
          <span className="text-sm leading-6"> & Skills Development Ltd.</span>
        </div>
        <address className="mt-2 text-base w-[244px] not-italic">
          3b Alegbe Close Mende, Maryland<br />
          Lagos, Nigeria.
        </address>
      </div>
      <nav className="flex flex-col text-base text-white">
        <a href="/about-us">About Us</a>
        <a href="/about-us" className="mt-2.5">Company</a>
        <a href="/faqs" className="self-start mt-2.5">FAQs</a>
      </nav>
      <nav className="flex flex-col items-start text-base text-white">
        <a href="/policy">Policy</a>
        <a href="/instructions" className="mt-2.5">Instructions</a>
        <a href="/terms-and-conditions" className="self-stretch mt-2.5">Terms & Conditions</a>
      </nav>
      <nav className="flex flex-col items-start text-base text-white">
        {/* <h3 className="text-xl font-semibold text-white">Contact Us</h3> */}
        <a href="/contact-us">Contact Us</a>
        <a href="tel:+2347043303000" className="mt-2.5 text-base text-white">+234 704 330 3000</a>
        <a href="tel:+2348092933330" className="mt-2.5 text-base text-white">+234 809 293 3330</a>
        <a href="mailto:info@examprimed.com" className="self-stretch mt-2.5 text-base text-white">
          info@examprimed.com
        </a>
        {/* <SocialLinks /> */}
      </nav>
    </footer>
  );
}

export default Footer;