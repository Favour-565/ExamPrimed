import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import PasswordField from './PasswordField';
import CheckboxField from './CheckboxField';
import Button from './Button';
import Header from '../common/Header';
import { Link } from 'react-router-dom';

const inputFields = [
  { label: 'User Name', type: 'text', name: 'username' },
  { label: 'Email Address', type: 'email', name: 'email' },
  { label: 'Phone Number', type: 'tel', name: 'phone' },
];

function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      // Redirect to login page
      navigate('/login');
    }
  };

  return (
    <section className="flex relative flex-col min-h-[400px] max-md:max-w-full">
      <img loading="lazy" src="/images/SignupScreen.png" alt="" className="object-fit absolute inset-0 size-full" />
      <Header/>
      <div className="flex relative flex-col justify-center items-end p-20 w-full max-md:px-5 max-md:max-w-full"> 
        <form onSubmit={handleSubmit} className="flex flex-col items-center px-6 py-6 max-w-full bg-zinc-50 bg-opacity-80 rounded-[50px] w-[640px] max-md:px-5">
          <h1 className="text-4xl font-semibold text-cyan-950">Sign up</h1>
          <div className="flex flex-col self-stretch mt-10 text-lg text-black text-opacity-50 max-md:max-w-full">
            {inputFields.map((field, index) => (
              <InputField 
                key={index} 
                label={field.label} 
                type={field.type} 
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                error={errors[field.name]}
              />
            ))}
            <PasswordField 
              label="Password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
            />
            <PasswordField 
              label="Confirm Password" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={errors.confirmPassword}
            />
          </div>
          <CheckboxField 
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleInputChange}
            error={errors.agreeTerms}
          />
          <Button label="Sign-Up" type="submit" />
          <div className="flex gap-1.5 mt-5 max-w-full text-cyan-950 w-[332px]">
            <p className="grow my-auto text-xl font-medium">Already have an account?</p>
            <Link to="/login" className="text-3l font-semibold">SignIn</Link>
          </div>
        </form>
      </div> 
    </section>
  );
}

export default SignUpForm;