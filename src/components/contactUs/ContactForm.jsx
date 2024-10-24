import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
     
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          acceptTerms: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section className="flex flex-col  w-[45%] max-md:ml-0 max-md:w-1/2">
      <form onSubmit={handleSubmit} className="flex flex-col w-full text-sm text-black min-h-[402px] max-md:mt-10 max-md:max-w-full">
        {submitStatus === 'success' && (
          <div className="text-green-600 mb-4">Message sent successfully!</div>
        )}
        {submitStatus === 'error' && (
          <div className="text-red-600 mb-4">Failed to send message. Please try again.</div>
        )}

        <div className="flex gap-2.5 items-center px-2.5 py-3 w-full whitespace-nowrap rounded-xl shadow-sm bg-zinc-50 min-h-[60px] max-md:max-w-full">
          <input 
            id="name" 
            name="name"
            type="text" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Name" 
            className="gap-2.5 self-stretch p-2.5 my-auto w-full bg-transparent" 
          />
        </div>
        {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}

        <div className="flex gap-2.5 items-center px-2.5 py-3 mt-5 w-full rounded-xl shadow-sm bg-zinc-50 min-h-[60px] max-md:max-w-full">
          <input 
            id="email" 
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address" 
            className="gap-2.5 self-stretch p-2.5 my-auto w-full bg-transparent" 
          />
        </div>
        {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}

        <div className="flex gap-10 items-center px-2.5 py-3 mt-5 w-full rounded-xl shadow-sm bg-zinc-50 min-h-[60px] max-md:max-w-full">
          <input 
            id="phone" 
            name="phone"
            type="tel" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number" 
            className="gap-2.5 self-stretch p-2.5 my-auto w-full bg-transparent" 
          />
        </div>
        {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}

        <div className="flex gap-10 items-start py-16 pr-2.5 pl-px mt-5 w-full rounded-xl shadow-sm bg-zinc-50 max-md:max-w-full">
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your text here" 
            className="gap-2.5 p-2.5 w-full h-full bg-transparent resize-none"
          ></textarea>
        </div>
        {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}

        <div className="flex flex-wrap gap-2.5 mt-5 text-sm text-justify text-teal-700 max-md:max-w-full">
          <input 
            type="checkbox" 
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="shrink-0 w-5 h-5 bg-white rounded border border-black border-solid" 
          />
          <label htmlFor="acceptTerms" className="flex-auto underline max-md:max-w-full">
            I agree to the <span className="text-base font-medium text-teal-700 underline">Terms</span> and{' '}
            <span className="text-base text-teal-700 underline">Conditions</span> as set out by the user agreement
          </label>
        </div>
        {errors.acceptTerms && <div className="text-red-500 text-xs mt-1">{errors.acceptTerms}</div>}

        <button 
          type="submit"
          disabled={isSubmitting}
          className="flex gap-2.5 justify-center items-center px-2.5 py-4 mt-5 text-xl font-semibold text-justify bg-teal-700 rounded-xl shadow-sm min-h-[74px] text-zinc-50 max-md:max-w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Form'}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;