import React from 'react';
import { Shield, Award, Star, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const TrustIndicators = () => {
  const { ref, isVisible } = useScrollAnimation();

  return <section ref={ref} className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center text-[#1B365D] mb-8 transition-all duration-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          Trusted by Thousands
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? 'stagger-children' : ''}`}>
          <div className={`bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center hover-lift ${!isVisible ? 'opacity-0 translate-y-8' : ''}`}>
            <div className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
              <Award className="w-6 h-6 text-[#F4B942]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1B365D] mb-2">
              Industry Leaders
            </h3>
            <p className="text-gray-600">
              Recognized experts in debt settlement with proven results
            </p>
          </div>
          <div className={`bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center hover-lift ${!isVisible ? 'opacity-0 translate-y-8' : ''}`}>
            <div className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
              <Shield className="w-6 h-6 text-[#2E8B8B]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1B365D] mb-2">
              Secure & Confidential
            </h3>
            <p className="text-gray-600">
              Your financial information is always protected
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-[#F4B942]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1B365D] mb-2">
              4.8/5 Client Rating
            </h3>
            <p className="text-gray-600">
              Exceptional satisfaction from thousands of clients
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-[#28A745]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1B365D] mb-2">
              Proven Results
            </h3>
            <p className="text-gray-600">
              $500M+ in debt successfully settled for our clients
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="text-[#1B365D] font-medium">As Seen On:</div>
          <div className="text-[#1B365D] font-bold text-xl">FORBES</div>
          <div className="text-[#1B365D] font-bold text-xl">BLOOMBERG</div>
          <div className="text-[#1B365D] font-bold text-xl">CNBC</div>
          <div className="text-[#1B365D] font-bold text-xl">WSJ</div>
          <div className="text-[#1B365D] font-bold text-xl">
            BUSINESS INSIDER
          </div>
        </div>
      </div>
    </section>;
};