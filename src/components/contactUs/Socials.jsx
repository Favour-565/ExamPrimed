import React from 'react';

function Socials() {
  const handleSocialClick = (platform) => {
    const urls = {
      twitter: 'https://twitter.com/Exam_Prime',
      
    };
    window.open(urls[platform], '_blank');
  };

  const socialLinks = [
    { icon: "/vectors/twittter.png", text: "Exam_Prime", platform: 'twitter' },
    // { icon: "/vectors/instagram.png", text: "Exam_Prime", platform: 'instagram' }
  ];

  return (
    <section className="flex gap-5 justify-center w-full mt-5">
      {socialLinks.map((link, index) => (
        <div
          key={index}
          onClick={() => handleSocialClick(link.platform)}
          className="flex gap-5 justify-center items-center cursor-pointer w-full px-8 py-3 text-base font-medium text-black border-2 border-teal-700 rounded-full"
        >
          <img 
            loading="lazy" 
            src={link.icon} 
            alt={`${link.platform} icon`} 
            className="w-6 h-6"
          />
          <span>{link.text}</span>
        </div>
      ))}
    </section>
  );
}

export default Socials;
