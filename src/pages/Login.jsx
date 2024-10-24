import React from 'react';
import SignInForm from '../components/auth/SignInForm';
import Header from '../components/common/Header';

function Login() {
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
        <div className="flex-grow flex items-center justify-center px-4 pb-12 md:pb-0">
          <SignInForm />
        </div>
      </div>
    </main>
  );
}

export default Login;