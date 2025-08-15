import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
interface CTASectionProps {
  openModal: () => void;
}
export const CTASection: React.FC<CTASectionProps> = ({
  openModal
}) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return <section ref={ref} className={`w-full bg-gradient-to-r from-[#1B365D] to-[#2E8B8B] py-16 text-white transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-800 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-4">
            Ready to Live Free from Debt Drama?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands who chose the human touch approach to debt relief.
            Take the first step toward financial freedom today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button onClick={openModal} className="bg-white text-[#1B365D] px-6 py-3 rounded-md hover:bg-[#F4B942] hover:text-white transition-colors duration-300 text-lg font-medium flex items-center gap-2 w-full sm:w-auto justify-center">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="tel:8888889914" className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white hover:bg-white hover:text-[#1B365D] transition-colors duration-300 text-lg font-medium w-full sm:w-auto">
              <Phone className="w-4 h-4 animate-pulse" />
              (888) 888-9914
            </a>
          </div>
          <div className={`flex flex-wrap justify-center gap-4 ${isVisible ? 'stagger-children' : ''}`}>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-[#F4B942]" />
              <span>No upfront fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-[#F4B942]" />
              <span>Pay only for results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-[#F4B942]" />
              <span>Faster than minimum payments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-[#F4B942]" />
              <span>Trusted by thousands</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
// Helper component for the CheckCircle icon
const CheckCircleIcon = ({
  className
}: {
  className: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>;