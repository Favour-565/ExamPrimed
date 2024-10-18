import React from 'react';
import BoughtCoinBtn from '../../screens/OutOfCoin.jsx/BoughtCoinBtn';




function BoughtCoin() {
  return (
   <section className=' flex justify-center mt-20 m-auto'>
    
     <main className="flex items-start text-base font-medium text-white whitespace-nowrap max-w-[756px]">
      <img
        loading="lazy"
        src="\images\boughtCoinFrame.png"
        alt=""
        className="object-contain grow shrink-0 self-end mt-4 mr-0 rounded-none aspect-[2.21] basis-0 w-fit max-md:max-w-full"
      />
      <h2 className="absolute pt-28 pl-[350px]   text-2xl font-semibold text-zinc-50">
        You have been given <br/> 80 coins
       </h2>
       <BoughtCoinBtn/>
      
    </main>
   </section>
  );
}

export default BoughtCoin;