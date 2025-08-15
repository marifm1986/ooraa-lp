import React from 'react';
import { AlertCircle, X } from 'lucide-react';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  onClose,
  title = "Something Went Wrong",
  message = "We're sorry, but there was an error sending your request. Please try again or call us directly."
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
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-[#1B365D] mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            {message}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={onClose} 
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Again
            </button>
            
            <a 
              href="tel:8888889914" 
              className="bg-[#1B365D] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2a4a75] transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
            >
              Call Us Now
            </a>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Call us at <span className="font-semibold">(888) 888-9914</span>
          </p>
        </div>
      </div>
    </div>
  );
};
