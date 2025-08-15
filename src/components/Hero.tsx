import React from 'react';
import { CheckCircle } from 'lucide-react';
interface HeroProps {
  openModal: () => void;
}
export const Hero: React.FC<HeroProps> = ({
  openModal
}) => {
  return <section className="w-full bg-gradient-to-b from-[#F5E6D3] to-[#E8D5B7] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B365D] leading-tight">
              Save up to 60% - Live Free from Debt Drama
            </h1>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#B8312F] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#333333]">
                  <span className="font-semibold">Save up to 60%</span> - Live
                  Free from Debt Drama
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#B8312F] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#333333]">
                  <span className="font-semibold">No Upfront Fees</span> - Pay
                  Only When You See Results
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#B8312F] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#333333]">
                  <span className="font-semibold">
                    Faster Than Minimum Payments
                  </span>{' '}
                  - Debt-Free in 6-48 Months
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#B8312F] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#333333]">
                  <span className="font-semibold">Trusted by Thousands</span> -
                  With a Human Touch
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={openModal} className="bg-[#1B365D] text-white px-6 py-3 rounded-md hover:bg-[#F4B942] transition-colors duration-300 text-lg font-medium">
                Book a Free Consultation
              </button>
                <a
                  href="tel:(888)888-9914"
                  className="bg-[#2E8B8B] text-white px-6 py-3 rounded-md hover:bg-[#1B365D] transition-colors duration-300 text-lg font-medium flex items-center justify-center"
                  style={{ textDecoration: 'none' }}
                >
                  Contact us
                </a>
            </div>
            <p className="text-sm text-[#333333] opacity-70">
              *Terms & Conditions Apply
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-[#1B365D]/10 rounded-xl blur-xl"></div>
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden p-6">
                <img src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Debt relief consultation" className="w-full h-auto rounded-lg" />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-[#1B365D]">
                      10,000+
                    </div>
                    <div className="text-sm text-gray-600">Clients Helped</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#1B365D]">
                      $500M+
                    </div>
                    <div className="text-sm text-gray-600">Debt Settled</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#1B365D]">15+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};