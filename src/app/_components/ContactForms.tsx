"use client";
import React, { useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";

import { SUBMISSION_LIMITS } from "@/lib/submission-limits";
import { submitLead, submitNotice, type SubmitResult } from "@/lib/submit-lead";

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

function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      className="pointer-events-none absolute top-auto left-[-10000px] h-px w-px overflow-hidden"
      aria-hidden="true"
    >
      <label>
        Company website
        <input
          type="text"
          name="pn_hp"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    </div>
  );
}

function Notice({ children }: { children: ReactNode }) {
  return (
    <p
      role="alert"
      className="border border-red-500/40 bg-red-950/30 px-4 py-3 text-sm text-gray-200"
    >
      {children}
    </p>
  );
}

function lines(parts: { label: string; value: string }[], message: string) {
  const preface = parts
    .filter((part) => part.value.trim())
    .map((part) => `${part.label}: ${part.value.trim()}`);
  return [...preface, message.trim()].filter(Boolean).join("\n\n");
}

export const MultiStepContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    interest: "",
    budget: "",
    source: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [phase, setPhase] = useState<"edit" | "pending" | "success">("edit");
  const [notice, setNotice] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return !!(
          formData.firstName &&
          formData.lastName &&
          formData.workEmail
        );
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (phase === "pending" || !validateStep()) return;
    const name = `${formData.firstName} ${formData.lastName}`
      .replace(/\s+/g, " ")
      .trim();
    const message = lines(
      [
        { label: "Job title", value: formData.jobTitle },
        { label: "Interest", value: formData.interest },
        { label: "Stage", value: formData.budget },
        { label: "Heard via", value: formData.source },
      ],
      formData.message,
    );
    if (
      name.length > SUBMISSION_LIMITS.name ||
      message.length > SUBMISSION_LIMITS.message
    ) {
      setNotice(submitNotice("invalid"));
      return;
    }
    setNotice(null);
    setPhase("pending");
    const result = await submitLead({
      name,
      email: formData.workEmail,
      org: formData.companyName,
      message,
      formId: "contact",
      honeypot,
    });
    if (result === "ok") {
      setPhase("success");
      return;
    }
    setPhase("edit");
    setNotice(submitNotice(result));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="animate-fadeIn space-y-4">
            <h4 className="mb-4 text-xl font-semibold text-green-400">
              Step 1: Personal Info
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-green-400 focus:outline-none"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                maxLength={80}
                required
              />
              <input
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-green-400 focus:outline-none"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                maxLength={80}
                required
              />
            </div>
            <input
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-green-400 focus:outline-none"
              type="email"
              name="workEmail"
              placeholder="Work Email"
              value={formData.workEmail}
              onChange={handleChange}
              maxLength={SUBMISSION_LIMITS.email}
              required
            />
          </div>
        );
      case 2:
        return (
          <div className="animate-fadeIn space-y-4">
            <h4 className="mb-4 text-xl font-semibold text-green-400">
              Step 2: Professional Details
            </h4>
            <input
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-green-400 focus:outline-none"
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              maxLength={SUBMISSION_LIMITS.org}
              required
            />
            <input
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-green-400 focus:outline-none"
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              maxLength={120}
              required
            />
          </div>
        );
      case 3:
        return (
          <div className="animate-fadeIn space-y-4">
            <h4 className="mb-4 text-xl font-semibold text-green-400">
              Step 3: Intent & Budget
            </h4>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white transition-all focus:ring-2 focus:ring-green-400 focus:outline-none"
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
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white transition-all focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            >
              <option value="">Project Stage / Budget</option>
              <option value="Exploring/Research">Exploring/Research</option>
              <option value="Planning (<$50k)">Planning (&lt;$50k)</option>
              <option value="Ready to Build ($50k-$200k)">
                Ready to Build ($50k-$200k)
              </option>
              <option value="Enterprise (>$200k)">
                Enterprise (&gt;$200k)
              </option>
            </select>
          </div>
        );
      case 4:
        return (
          <div className="animate-fadeIn space-y-4">
            <h4 className="mb-4 text-xl font-semibold text-green-400">
              Step 4: Final Details
            </h4>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white transition-all focus:ring-2 focus:ring-green-400 focus:outline-none"
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
              className="h-32 w-full resize-y rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-green-400 focus:outline-none"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              maxLength={4000}
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (phase === "success") {
    return (
      <div className="animate-fadeIn rounded-2xl border border-green-500/50 bg-green-900/30 p-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Got it.</h3>
        <p className="text-gray-300">
          A person reads these. The reply takes longer than the form did, and it
          will not be a newsletter.
        </p>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="bg-paper text-ink hover:bg-accent mt-6 px-6 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:text-white"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 shadow-xl backdrop-blur-sm">
      <div className="mb-8">
        <h3 className="text-gradient-overlay text-glow mb-2 text-3xl font-bold lg:text-4xl">
          Let&apos;s Build Together
        </h3>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                step <= currentStep ? "bg-green-400" : "bg-gray-700"
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-400">Step {currentStep} of 4</p>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-6">
        <Honeypot value={honeypot} onChange={setHoneypot} />
        {renderStep()}
        {notice ? <Notice>{notice}</Notice> : null}

        <div className="flex gap-4 pt-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              disabled={phase === "pending"}
              className="flex-1 rounded-lg border border-gray-700 px-6 py-3 font-semibold text-white transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Back
            </button>
          )}
          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={phase === "pending"}
              className="bg-paper text-ink hover:bg-accent flex-1 px-6 py-3 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={phase === "pending"}
              className="bg-paper text-ink hover:bg-accent flex-1 px-6 py-3 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {phase === "pending" ? "Sending" : "Send Inquiry"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

const defaultInterests = [
  "Spatial Explorer",
  "Fractal Engine",
  "Fractionalization",
  "Investment",
];

export const InlineContactForm = ({
  formId = "inline",
  interests = defaultInterests,
}: {
  formId?: string;
  interests?: string[];
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [phase, setPhase] = useState<"edit" | "pending" | "success">("edit");
  const [notice, setNotice] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (phase === "pending") return;
    const message = lines(
      [{ label: "Interest", value: formData.interest }],
      formData.message,
    );
    if (
      formData.name.trim().length > SUBMISSION_LIMITS.name ||
      message.length > SUBMISSION_LIMITS.message
    ) {
      setNotice(submitNotice("invalid"));
      return;
    }
    setNotice(null);
    setPhase("pending");
    const result: SubmitResult = await submitLead({
      name: formData.name.trim(),
      email: formData.email,
      message,
      formId,
      honeypot,
    });
    if (result === "ok") {
      setPhase("success");
      return;
    }
    setPhase("edit");
    setNotice(submitNotice(result));
  };

  if (phase === "success") {
    return (
      <div className="animate-fadeIn rounded-2xl border border-green-500/50 bg-green-900/20 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold text-white">Got it.</h3>
        <p className="text-gray-400">A person will read this. Not instantly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-4 rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
    >
      <Honeypot value={honeypot} onChange={setHoneypot} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          required
          maxLength={SUBMISSION_LIMITS.name}
          className="w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-white placeholder-gray-500 transition-all outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Work Email"
          value={formData.email}
          required
          maxLength={SUBMISSION_LIMITS.email}
          className="w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-white placeholder-gray-500 transition-all outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />
      </div>
      <select
        name="interest"
        value={formData.interest}
        required
        className="w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-white transition-all outline-none focus:ring-2 focus:ring-green-400"
        onChange={handleChange}
      >
        <option value="">I&apos;m interested in...</option>
        {interests.map((interest) => (
          <option key={interest} value={interest}>
            {interest}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="How can we help?"
        value={formData.message}
        required
        maxLength={4000}
        className="h-24 w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-white placeholder-gray-500 transition-all outline-none focus:ring-2 focus:ring-green-400"
        onChange={handleChange}
      />
      {notice ? <Notice>{notice}</Notice> : null}
      <button
        type="submit"
        disabled={phase === "pending"}
        className="bg-paper text-ink hover:bg-accent w-full py-3 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {phase === "pending" ? "Sending" : "Send Quick Message"}
      </button>
    </form>
  );
};
