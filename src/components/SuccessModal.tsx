import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title = "Thank You!",
  message = "Your consultation request has been received. We'll call you within 2 hours."
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-[#28A745]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#28A745]" />
          </div>
          
          <h2 className="text-2xl font-bold text-[#1B365D] mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            {message}
          </p>
          
          <p className="text-gray-500 mb-8">
            Check your email for a confirmation and additional details about your consultation.
          </p>
          
          <button 
            onClick={onClose} 
            className="bg-[#1B365D] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#2a4a75] transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
