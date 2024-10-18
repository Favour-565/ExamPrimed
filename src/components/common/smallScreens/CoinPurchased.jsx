// import React from 'react';
// import PurchaseBtn from '../../components/screens/OutOfCoin.jsx/PurchaseBtn';
// import BackButton from '../../components/common/BackButton';



// function CoinPurchased() {
//   return (
//     <section className=" relative flex  m-auto mt-20  flex-col items-center
    
//      px-20 py-20 w-6/12 rounded-none min-h-[330px] max-md:px-5 max-md:max-w-full">
//       <BackButton/>
//      <main >
     
//       <img 
//         loading="lazy" 
//         src="\images\OutOfCoinFrame.svg" 
//         alt="" 
//         className="object-cover absolute rounded-[25px] inset-0 size-full" 
//       />
//       <h2 className="absolute pt-5 pl-[200px]  text-3xl font-semibold text-zinc-50">
//         You are out of coin!
//       </h2>
//       <PurchaseBtn/>
//      </main>
      
//     </section>
//   );
// }

// export default CoinPurchased;



import React from 'react';
import BackButton from '../BackButton';
import PurchaseBtn from '../../screens/OutOfCoin.jsx/PurchaseBtn';


function CoinPurchase() {
  return (
   <section className=' flex justify-center mt-20 m-auto'>
    <BackButton/>
     <main className="flex items-start text-base font-medium text-white whitespace-nowrap max-w-[756px]">
      <img
        loading="lazy"
        src="\images\OutOfCoinFrame.svg"
        alt=""
        className="object-contain grow shrink-0 self-end mt-4 mr-0 rounded-none aspect-[2.21] basis-0 w-fit max-md:max-w-full"
      />
      <h2 className="absolute pt-28 pl-[350px]  text-3xl font-semibold text-zinc-50">
         You are out of coin!
       </h2>
       <PurchaseBtn/>
      
    </main>
   </section>
  );
}

export default CoinPurchase;