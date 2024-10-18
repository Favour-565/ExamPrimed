import React from 'react';

function Socials() {
  const handleSocialClick = (platform) => {
    const urls = {
      twitter: 'https://twitter.com/Exam_Prime',
      instagram: 'https://instagram.com/Exam_Prime'
    };
    window.open(urls[platform], '_blank');
  };

  const socialLinks = [
    { icon: "/vectors/twittter.png", text: "Exam_Prime", platform: 'twitter' },
    { icon: "/vectors/instagram.png", text: "Exam_Prime", platform: 'instagram' }
  ];

  return (
    <section className="flex flex-wrap gap-5 justify-between px-0 py-1  mt-2.5 w-full max-w-[1105px] max-md:max-w-full">
      {socialLinks.map((link, index) => (
        <div
          key={index}
          onClick={() => handleSocialClick(link.platform)}
          className="flex gap-5 justify-center items-center cursor-pointer px-8 py-2 my-auto text-base font-medium text-black whitespace-nowrap border-2 border-teal-700 border-solid rounded-[100px] max-md:px-5"
        >
          <img 
            loading="lazy" 
            src={link.icon} 
            alt="" 
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
          />
          <span className="self-stretch my-auto">{link.text}</span>
        </div>
      ))}
    </section>
  );
}

export default Socials;