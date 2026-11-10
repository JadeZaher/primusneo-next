import Image from 'next/image';
import { MultiStepContactForm } from '../_components/ContactForms';
import { OperatorLine } from '../_components/OperatorLine';
import { operator } from '@/content/operator';

export const metadata = {
  title: 'Contact',
  description: 'Talk to the PrimusNeo team about governed deployments, fractionalization structures, and spatial OS integrations — pilots, partnerships, and integrations.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact PrimusNeo',
    description: 'Talk to the PrimusNeo team about pilots, partnerships, and integrations across the AMP / NEOS / AZOA / Fractal Engine stack.',
    url: '/contact',
    type: 'website',
  },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-ink px-4 pb-16 pt-28 text-paper">
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Contact</div>
            <h1 className="mt-4 max-w-[14ch] text-[clamp(40px,6vw,84px)] font-medium leading-[0.98] tracking-[-0.035em]">
              Tell us the environment.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
              We will say which layer applies, and which one does not. A pilot that cannot name its test is a tour.
            </p>
          </header>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <MultiStepContactForm />
              <p className="mt-6 text-sm leading-relaxed text-mist">
                The form is the path we read. The other way is email, phone, or the mailbox:{' '}
                <OperatorLine />. {operator.contactName}, {operator.entity}.
              </p>
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
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">What you are walking into</h2>
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
