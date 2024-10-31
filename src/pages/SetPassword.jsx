import React from 'react';

import Header from '../components/common/Header';
import Create from '../components/auth/Create';



function SetPassword() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      <img 
        loading="lazy" 
        src="/images/SignupScreen.png" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative w-full min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center px-4 sm:px-6 md:px-8 pb-12 md:pb-0">
          <Create/>
        </div>
      </div>
    </main>
  );
}

export default SetPassword;