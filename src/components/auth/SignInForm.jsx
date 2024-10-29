import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{11}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      navigate('/select-exam');
    }
  };

  return (
    <section className="flex flex-col self-center w-full max-w-[30rem] px-6 py-8 mx-auto 
      bg-zinc-50 bg-opacity-80 rounded-[50px] shadow-[-2px_4px_6px_rgba(0,0,0,0.25)]
      md:mt-20 lg:mt-32
      sm:px-8 sm:w-[90%]
      md:w-[80%]
      lg:w-[30rem]">
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-teal-800">
        Sign In
      </h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col mt-auto md:mt-10 w-full">
        <div className="flex flex-col mb-4 w-full">
          <div className="flex items-center px-2.5 py-2.5 rounded-xl shadow-sm bg-zinc-50 min-h-[60px] w-full">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full p-2.5 bg-transparent outline-none text-base md:text-lg text-black text-opacity-50"
              aria-label="Phone Number"
            />
          </div>
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>

        <div className="flex flex-col mb-4 w-full">
          <div className="flex items-center px-2.5 py-2.5 rounded-xl shadow-sm bg-zinc-50 min-h-[60px] w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="flex-grow p-2.5 bg-transparent outline-none text-base md:text-lg text-black text-opacity-50"
              aria-label="Password"
            />
            <button 
              type="button"
              onClick={togglePasswordVisibility}
              className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <Link to="/forgot-password" className="self-end p-2.5 mt-3 md:mt-5 text-lg md:text-xl font-medium text-cyan-950">
          Forgot Password?
        </Link>

        <button 
          type="submit" 
          className="w-full flex gap-2.5 justify-center items-center px-4 py-4 mt-6 md:mt-8 
            text-lg md:text-xl font-semibold bg-teal-700 rounded-xl shadow-sm 
            min-h-[60px] md:min-h-[74px] text-zinc-50 
            hover:bg-teal-600 transition-colors"
        >
          Sign In
        </button>
      </form>

      <div className="flex gap-2 md:gap-4 justify-center items-center mt-6 md:mt-8 text-cyan-950">
        <p className="text-base md:text-xl font-medium">
          Don't have an account?
        </p>
        <Link to="/sign-up" className="text-base md:text-xl font-semibold hover:text-teal-700 transition-colors">
          Sign Up
        </Link>
      </div>
    </section>
  );
}

export default SignInForm;