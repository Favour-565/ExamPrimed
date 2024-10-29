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
      console.log("Form submitted:", formData);
      navigate('/login');
    }
  };
  return (
    <section className="relative flex flex-col min-h-screen w-full">
      
      <img 
        loading="lazy" 
        src="/images/SignupScreen.png" 
        alt="" 
        className="object-cover fixed inset-0 w-full h-full"
      />
      
      
      <Header />

      
      <div className="relative flex justify-center md:justify-end px-4 py-8 md:px-8 lg:px-16 w-full min-h-[calc(100vh-64px)]">
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col w-full max-w-[440px] md:max-w-[500px] bg-zinc-50 bg-opacity-80 rounded-[40px] p-6  md:p-8 mt-10  md:mt-20 md:mr-8 lg:mr-20"
        >
         
          <h1 className="text-2xl md:text-3xl font-semibold text-[#007273] text-center mb-6">
            Sign up
          </h1>

          
          <div className="flex flex-col gap-4 w-full">
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

          
          <div className="mt-6">
            <CheckboxField 
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              error={errors.agreeTerms}
            />
          </div>

          <div className="mt-6">
            <Button label="Sign-Up" type="submit" />
          </div>

          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4 text-cyan-950">
            <p className="text-base font-semibold">Already have an account?</p>
            <Link 
              to="/login" 
              className="text-lg md:text-xl font-semibold hover:text-cyan-800 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
export default SignUpForm;
