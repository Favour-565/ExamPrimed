
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
    <section className="flex flex-col items-center w-[80%] max-w-lg max-md:mx-auto max-md:w-full mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col w-full text-sm text-black">
        {submitStatus === 'success' && (
          <div className="text-green-600 mb-4">Message sent successfully!</div>
        )}
        {submitStatus === 'error' && (
          <div className="text-red-600 mb-4">Failed to send message. Please try again.</div>
        )}

        <div className="flex gap-2 items-center px-4 py-3 w-full rounded-xl shadow-sm bg-zinc-50">
          <input 
            id="name" 
            name="name"
            type="text" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Name" 
            className="w-full bg-transparent" 
          />
        </div>
        {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}

        <div className="flex gap-2 items-center px-3 py-3 mt-5 w-full rounded-xl shadow-sm bg-zinc-50">
          <input 
            id="email" 
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address" 
            className="w-full bg-transparent" 
          />
        </div>
        {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}

        <div className="flex gap-2 items-center px-3 py-3 mt-5 w-full rounded-xl shadow-sm bg-zinc-50">
          <input 
            id="phone" 
            name="phone"
            type="tel" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number" 
            className="w-full bg-transparent" 
          />
        </div>
        {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}

        <div className="flex gap-2 items-start py-16 px-3 mt-5 w-full rounded-xl shadow-sm bg-zinc-50">
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your text here" 
            className="w-full bg-transparent" 
            rows="4"
          />
        </div>
        {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}

        <label className="mt-5">
          <input 
            type="checkbox" 
            name="acceptTerms" 
            checked={formData.acceptTerms}
            onChange={handleChange}
          /> I accept terms & conditions.
        </label>
        {errors.acceptTerms && <div className="text-red-500 text-xs mt-1">{errors.acceptTerms}</div>}

        <button 
          type="submit" 
          className="w-full mt-6 px-8 py-3 text-lg text-white bg-teal-700 rounded-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
