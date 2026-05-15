"use client";
import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  companyName: string;
  jobTitle: string;
  interest: string;
  budget: string;
  source: string;
  message: string;
}

export const MultiStepContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    workEmail: '',
    companyName: '',
    jobTitle: '',
    interest: '',
    budget: '',
    source: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => setCurrentStep(prev => prev - 1);

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.workEmail);
      case 2:
        return !!(formData.companyName && formData.jobTitle);
      case 3:
        return !!(formData.interest && formData.budget);
      case 4:
        return !!(formData.source && formData.message);
      default:
        return true;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    console.log('Multi-step form submitted:', formData);
    setSubmitStatus({ submitted: true, success: true });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 animate-fadeIn">
            <h4 className="text-xl font-semibold mb-4 text-green-400">Step 1: Personal Info</h4>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              type="email"
              name="workEmail"
              placeholder="Work Email"
              value={formData.workEmail}
              onChange={handleChange}
              required
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-fadeIn">
            <h4 className="text-xl font-semibold mb-4 text-green-400">Step 2: Professional Details</h4>
            <input
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <input
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-fadeIn">
            <h4 className="text-xl font-semibold mb-4 text-green-400">Step 3: Intent & Budget</h4>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              required
            >
              <option value="">Primary Interest</option>
              <option value="Spatial Explorer">Spatial Explorer</option>
              <option value="Fractal Engine">Fractal Engine</option>
              <option value="Fractionalization">Fractionalization</option>
              <option value="Governance Platform">Governance Platform</option>
              <option value="Investment/ICO">Investment/ICO</option>
              <option value="Partnership">Partnership</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              required
            >
              <option value="">Project Stage / Budget</option>
              <option value="Exploring/Research">Exploring/Research</option>
              <option value="Planning (<$50k)">Planning (&lt;$50k)</option>
              <option value="Ready to Build ($50k-$200k)">Ready to Build ($50k-$200k)</option>
              <option value="Enterprise (>$200k)">Enterprise (&gt;$200k)</option>
            </select>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 animate-fadeIn">
            <h4 className="text-xl font-semibold mb-4 text-green-400">Step 4: Final Details</h4>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              required
            >
              <option value="">How did you hear about us?</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Event">Event</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all h-32 resize-vertical"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (submitStatus.submitted) {
    return (
      <div className={`p-8 rounded-2xl text-center animate-fadeIn ${submitStatus.success ? 'bg-green-900/30 border border-green-500/50' : 'bg-red-900/30 border border-red-500/50'}`}>
        <h3 className="text-2xl font-bold mb-4">
          {submitStatus.success ? "Inquiry Received!" : "Submission Failed"}
        </h3>
        <p className="text-gray-300">
          {submitStatus.success
            ? "Thank you for reaching out. A member of the PrimusNeo team will review your project details and contact you shortly."
            : "Oops! Something went wrong while submitting the form. Please try again later."}
        </p>
        {submitStatus.success && (
          <button 
            onClick={() => window.location.href = '/'}
            className="mt-6 bg-gradient-to-r from-emerald-300 via-lime-300 to-cyan-300 text-black font-bold py-2 px-6 rounded-lg shadow-[0_0_32px_rgba(74,222,128,0.22)] hover:scale-105 transition-all"
          >
            Return Home
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-sm">
      <div className="mb-8">
        <h3 className="text-3xl lg:text-4xl font-bold text-gradient-overlay text-glow mb-2">
          Let&apos;s Build Together
        </h3>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                step <= currentStep ? 'bg-green-400' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-400 mt-2 text-sm">Step {currentStep} of 4</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {renderStep()}
        
        <div className="flex gap-4 pt-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 py-3 px-6 rounded-lg border border-gray-700 text-white font-semibold hover:bg-gray-800 transition-all"
            >
              Back
            </button>
          )}
          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex-1 bg-gradient-to-r from-emerald-300 via-lime-300 to-cyan-300 text-black font-bold py-3 px-6 rounded-lg shadow-[0_0_32px_rgba(74,222,128,0.22)] hover:scale-[1.02] hover:opacity-95 transition-all transform"
            >
              Next
            </button>
          ) : (
            <button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-emerald-300 via-lime-300 to-cyan-300 text-black font-bold py-3 px-6 rounded-lg shadow-[0_0_32px_rgba(74,222,128,0.22)] hover:scale-[1.02] hover:opacity-95 transition-all transform"
            >
              Send Inquiry
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export const InlineContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Inline form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-green-900/20 border border-green-500/50 rounded-2xl animate-fadeIn">
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400">Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-gray-900/50 border border-gray-800 rounded-2xl backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          required
          className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 outline-none transition-all"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Work Email"
          value={formData.email}
          required
          className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 outline-none transition-all"
          onChange={handleChange}
        />
      </div>
      <select
        name="interest"
        value={formData.interest}
        required
        className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:ring-2 focus:ring-green-400 outline-none transition-all"
        onChange={handleChange}
      >
        <option value="">I&apos;m interested in...</option>
        <option value="Spatial Explorer">Spatial Explorer</option>
        <option value="Fractal Engine">Fractal Engine</option>
        <option value="Fractionalization">Fractionalization</option>
        <option value="Investment">Investment Opportunities</option>
      </select>
      <textarea
        name="message"
        placeholder="How can we help?"
        value={formData.message}
        required
        className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 outline-none transition-all h-24"
        onChange={handleChange}
      />
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-emerald-300 via-lime-300 to-cyan-300 text-black font-bold py-3 rounded-lg shadow-[0_0_32px_rgba(74,222,128,0.22)] hover:scale-[1.01] hover:opacity-95 transition-all transform"
      >
        Send Quick Message
      </button>
    </form>
  );
};
