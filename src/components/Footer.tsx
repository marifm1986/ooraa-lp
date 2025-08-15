import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';

interface FooterProps {
  openModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openModal }) => {
  return <footer className="w-full bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/ooraa-logo.png" 
                alt="Ooraa Debt Relief" 
                className="h-8 w-auto sm:h-10"
              />
            </div>
            <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-md">
              Helping thousands live free from debt drama with our
              human-centered approach to debt relief.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#1B365D] transition-colors p-2 hover:bg-gray-100 rounded-md">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#1B365D] transition-colors p-2 hover:bg-gray-100 rounded-md">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#1B365D] transition-colors p-2 hover:bg-gray-100 rounded-md">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#1B365D] transition-colors p-2 hover:bg-gray-100 rounded-md">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#success-stories" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Legal Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F4B942] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Call Us:</p>
                  <a href="tel:8888889914" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline">
                    (888) 888-9914
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F4B942] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Email Us:</p>
                  <a href="mailto:support@ooraa.org" className="text-gray-600 hover:text-[#1B365D] transition-colors text-sm sm:text-base hover:underline break-all">
                    support@ooraa.org
                  </a>
                </div>
              </li>
            </ul>
            
            {/* Simple CTA Button */}
            <div className="mt-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button 
                onClick={openModal}
                className="bg-[#1B365D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a4a75] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 hover-glow"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 text-center text-gray-500 text-xs sm:text-sm">
          <p className="mb-2">
            *Terms & Conditions Apply. Results may vary. See website for
            details.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Ooraa Debt Relief. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};