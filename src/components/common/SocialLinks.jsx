import React from 'react';

function SocialLinks() {
  const socialIcons = [
    { src: "/vectors/facebook.png", alt: "Facebook" },
    { src: "/vectors/twittter.png", alt: "Twitter" },
    { src: "/vectors/instagram.png", alt: "Instagram" },
    { src: "/vectors/ion_call.png", alt: "LinkedIn" }
  ];

  return (
    <div className="flex gap-5 items-center py-2.5 mt-4">
      {socialIcons.map((icon, index) => (
        <a key={index} href="#" aria-label={`Visit our ${icon.alt} page`}>
          <img 
            loading="lazy" 
            src={icon.src} 
            alt={icon.alt} 
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
          />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;