"use client";
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your backend
    // For now, we'll just simulate a successful submission
    setSubmitStatus({
      submitted: true,
      success: true
    });
  };

  return (
    <div className="bg-black text-white min-h-screen vite-grid pt-24 pb-16 px-4">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {!submitStatus.submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-8">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gradient-overlay text-glow">
                      Connect And Learn How We Can Work Together
                    </h3>
                  </div>
                  
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <textarea
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 h-32 resize-vertical"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full gradient text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                  >
                    Send
                  </button>
                </form>
              ) : (
                <div className={`p-6 rounded-lg ${submitStatus.success ? 'bg-green-900 border border-green-400' : 'bg-red-900 border border-red-400'}`}>
                  <div className="text-center">
                    {submitStatus.success
                      ? "Thank you! Your submission has been received!"
                      : "Oops! Something went wrong while submitting the form."}
                  </div>
                </div>
              )}
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="/images/bheadd.png"
                loading="lazy"
                alt="Contact"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
