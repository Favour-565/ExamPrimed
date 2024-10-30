import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Password = () => {
  const navigate = useNavigate();
  
  
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    text: '',
    type: '' 
  });

  
  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  
  const validatePassword = (password) => {
    const validations = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    return validations;
  };

 
  const validateForm = () => {
    const newErrors = {};
    const passwordValidation = validatePassword(formData.newPassword);

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (!passwordValidation.length) {
      newErrors.newPassword = 'Password must be at least 8 characters long';
    } else if (!passwordValidation.uppercase || !passwordValidation.lowercase) {
      newErrors.newPassword = 'Password must contain both uppercase and lowercase letters';
    } else if (!passwordValidation.number) {
      newErrors.newPassword = 'Password must contain at least one number';
    } else if (!passwordValidation.special) {
      newErrors.newPassword = 'Password must contain at least one special character';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ text: '', type: '' });

    if (validateForm()) {
      try {
       
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setStatusMessage({
          text: 'Password successfully updated',
          type: 'success'
        });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } catch (error) {
        setStatusMessage({
          text: 'Failed to update password. Please try again.',
          type: 'error'
        });
      }
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="flex flex-col self-center w-full max-w-[30rem] px-6 py-8 mx-auto 
      bg-zinc-50 bg-opacity-80 rounded-[50px] shadow-[-2px_4px_6px_rgba(0,0,0,0.25)]
      md:mt-20 lg:mt-32 sm:px-8 sm:w-[90%] md:w-[80%] lg:w-[30rem]">
      
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-teal-800">
        Reset Password
      </h1>

      {statusMessage.text && (
        <div className={`mt-4 p-4 rounded-lg ${
          statusMessage.type === 'success' 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {statusMessage.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full">
       
        <div className="flex flex-col mb-4 w-full">
          <div className="flex items-center px-2.5 py-2.5 rounded-xl shadow-sm bg-zinc-50 min-h-[60px] w-full">
            <input
              type={showPassword.newPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="New Password"
              className="flex-grow p-2.5 bg-transparent outline-none text-base md:text-lg text-black text-opacity-50"
              disabled={isSubmitting}
            />
            <button 
              type="button"
              onClick={() => togglePasswordVisibility('newPassword')}
              className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword.newPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
          )}
        </div>

        
        <div className="flex flex-col mb-4 w-full">
          <div className="flex items-center px-2.5 py-2.5 rounded-xl shadow-sm bg-zinc-50 min-h-[60px] w-full">
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className="flex-grow p-2.5 bg-transparent outline-none text-base md:text-lg text-black text-opacity-50"
              disabled={isSubmitting}
            />
            <button 
              type="button"
              onClick={() => togglePasswordVisibility('confirmPassword')}
              className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword.confirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <button 
          type="submit" 
          className="w-full flex gap-2.5 justify-center items-center px-4 py-4 mt-6 md:mt-8 
            text-lg md:text-xl font-semibold bg-teal-700 rounded-xl shadow-sm 
            min-h-[60px] md:min-h-[74px] text-zinc-50 
            hover:bg-teal-600 transition-colors
            disabled:bg-teal-500 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Updating Password...' : 'Update Password'}
        </button>
      </form>
    </section>
  );
};

export default Password;