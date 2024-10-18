import React from 'react';

import SignInForm from '../components/auth/SignInForm';
import Header from '../components/common/Header';



function Login() {
  return (
    <main className="flex overflow-hidden flex-col">
      <div className="flex relative flex-col w-full min-h-[1024px] max-md:max-w-full">
        <img loading="lazy" src="\images\SignupScreen.png" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col pb-52 w-full max-md:pb-24 max-md:max-w-full">
          <Header/>
          <SignInForm/>
        </div>
      </div>
    </main>
  );
}

export default Login;