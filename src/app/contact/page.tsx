"use client";
import { MultiStepContactForm } from '../_components/ContactForms';

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen vite-grid pt-24 pb-16 px-4">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <MultiStepContactForm />
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col items-center">
              <img
                src="/images/bheadd.png"
                loading="lazy"
                alt="Contact"
                className="rounded-2xl shadow-2xl max-w-full h-auto mb-8 border border-gray-800"
              />
              <div className="text-center lg:text-left space-y-4">
                <h4 className="text-xl font-semibold text-green-400">Why PrimusNeo?</h4>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Bespoke Spatial Computing Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Advanced Fractionalization Protocols
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Enterprise-Grade Governance Platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
