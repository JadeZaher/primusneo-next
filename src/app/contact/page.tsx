import Image from 'next/image';
import { MultiStepContactForm } from '../_components/ContactForms';

export const metadata = {
  title: 'Contact',
  description: 'Talk to the PrimusNeo team about governed deployments, fractionalization structures, and spatial OS integrations — pilots, partnerships, and integrations.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact PrimusNeo',
    description: 'Talk to the PrimusNeo team about pilots, partnerships, and integrations across the AMP / NEOS / OASIS / Fractal Engine stack.',
    url: '/contact',
    type: 'website',
  },
};

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen vite-grid pt-24 pb-16 px-4">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
              Contact PrimusNeo
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Tell us about your environment — we&apos;ll come back with a pilot path tailored to your stack.
            </p>
          </header>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <MultiStepContactForm />
            </div>

            <div className="order-1 lg:order-2 flex flex-col items-center">
              <Image
                src="/images/bheadd.png"
                alt=""
                role="presentation"
                width={800}
                height={800}
                priority
                className="rounded-2xl shadow-2xl max-w-full h-auto mb-8 border border-gray-800"
              />
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-xl font-semibold text-green-400">Why PrimusNeo?</h2>
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
