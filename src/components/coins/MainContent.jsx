import React from 'react';

function MainContent() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="relative self-center mt-12 text-4xl max-md:mt-10">BUY COINS</h1>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6839cbf9a2435b75288a67c5a8efb1f04b2f881211dbceddc03ae8cdf48296ac?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345" 
        alt="Buy Coins Illustration" 
        className="object-contain self-center mt-28 w-full rounded-3xl aspect-[1.75] max-w-[1174px] max-md:mt-10 max-md:max-w-full" 
      />
    </main>
  );
}

export default MainContent;