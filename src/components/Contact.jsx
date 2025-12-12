import React, { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { trackFormSubmit, trackButtonClick } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Track form submission
    trackFormSubmit('Contact Form');
    
    // Your form submission logic
    try {
      const response = await fetch("https://getform.io/f/269929dc-4ab7-4bf5-ab85-0f621ed2eb18", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleScrollToTop = () => {
    trackButtonClick('Scroll To Top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div name="contact" className="w-full min-h-screen flex justify-center items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-[600px] flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <div className="pb-6 sm:pb-8">
            <p className="text-3xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Contact
            </p>
            <p className="text-gray-300 py-4 text-sm sm:text-base break-words">
              // Submit the form or shoot me an email - Shayanbhatkal786@gmail.com
            </p>
          </div>
          
          <input
            className="bg-[#ccd6f6] p-2 sm:p-3 text-sm sm:text-base rounded w-full"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input
            className="my-3 sm:my-4 p-2 sm:p-3 bg-[#ccd6f6] text-sm sm:text-base rounded w-full"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <textarea
            className="bg-[#ccd6f6] p-2 sm:p-3 text-sm sm:text-base rounded w-full resize-none"
            name="message"
            placeholder="Message"
            rows="8"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
          <button 
            type="submit"
            className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-6 py-3 my-6 sm:my-8 mx-auto flex items-center transition-all duration-300 rounded text-sm sm:text-base w-auto"
          >
            Let's Talk
          </button>
        </form>
        
        <div className="flex justify-center lg:justify-start lg:mt-20">
          <button 
            onClick={handleScrollToTop}
            className="text-white group border-2 px-4 sm:px-6 py-2 sm:py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 rounded text-sm sm:text-base whitespace-nowrap"
          >
            To Top
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowLeft className="ml-2 sm:ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
