import React from 'react';
import { Phone, ClipboardCheck, Handshake, PartyPopper, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  openModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ openModal }) => {
  const steps = [
    {
      id: 1,
      title: "Free Consultation",
      description: "Book your free consultation with certified debt specialists who understand your situation.",
      icon: <Phone className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Custom Assessment", 
      description: "We evaluate your debt for potential 60% savings and create a personalized plan.",
      icon: <ClipboardCheck className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Results-Based Service",
      description: "Pay only when you see real results. No upfront fees, just genuine debt reduction.",
      icon: <Handshake className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Debt Freedom",
      description: "Achieve financial freedom in 6-48 months instead of decades with minimum payments.",
      icon: <PartyPopper className="w-8 h-8" />
    }
  ];

  return (
    <section id="how-it-works" className="w-full bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B365D] mb-4">
            Your Path to Financial Freedom
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process helps you achieve debt freedom faster than
            making minimum payments.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-0">
          {/* Mobile - Vertical Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div className="flex flex-col items-center">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-[#1B365D] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#1B365D]">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#1B365D] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 max-w-sm">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="w-px h-8 bg-gray-200 mx-auto mt-8"></div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop - Horizontal Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-6 left-0 right-0 h-px bg-gray-200"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={step.id} className="relative text-center">
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-[#1B365D] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto relative z-10">
                      {step.id}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#1B365D] mx-auto">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-[#1B365D] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-6 -right-4 text-gray-400">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={openModal}
            className="bg-[#2E8B8B] text-white px-8 py-3 rounded-lg hover:bg-[#1B365D] transition-colors duration-300 text-lg font-medium"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};