import React, { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { usStates, debtAmounts } from '../constants/formOptions';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onError: () => void;
}
export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  onError
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    debtAmount: '',
    state: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your User ID
      emailjs.init('9KI5ZG83KdT1nrTVk');

      // Prepare template parameters
      const templateParams = {
        subject: `New Consultation Request from ${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        debtAmount: formData.debtAmount,
        state: formData.state,
        to_email: 'ooraalp@gmail.com', // Your receiving email
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_bpv4mt9', 
        'template_vlbp4ue', 
        templateParams
      );

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        debtAmount: '',
        state: ''
      });

      setIsSubmitting(false);
      onSuccess(); // Show success modal
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      onError(); // Show error modal
    }
  };
  if (!isOpen) return null;

  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity animate-fade-in">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto animate-scale-in hover-glow" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all duration-300 transform hover:scale-110 hover:rotate-90">
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-6 md:p-8">
          <div className="mb-6 text-center animate-fade-in-up">
            <h2 className="text-2xl font-bold text-[#1B365D] mb-2">
              Book Your Free Consultation
            </h2>
            <p className="text-gray-600 mb-6">
              Take the first step toward financial freedom with a
              no-obligation consultation.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Line 1: First name and last name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name*" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#2E8B8B] focus:border-[#2E8B8B] transition-colors" />
                  </div>
                  <div>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name*" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#2E8B8B] focus:border-[#2E8B8B] transition-colors" />
                  </div>
                </div>
                {/* Line 2: Email and phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address*" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#2E8B8B] focus:border-[#2E8B8B] transition-colors" />
                  </div>
                  <div>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number*" required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#2E8B8B] focus:border-[#2E8B8B] transition-colors" />
                  </div>
                </div>
                {/* Line 3: Debt amount */}
                <div>
                  <select id="debtAmount" name="debtAmount" value={formData.debtAmount} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#2E8B8B] focus:border-[#2E8B8B] transition-colors">
                    <option value="" disabled>
                      Select Your Debt Amount*
                    </option>
                    {debtAmounts.map((amount, index) => (
                      <option key={index} value={amount}>
                        {amount}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Line 4: State */}
                <div>
                  <select id="state" name="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#2E8B8B] focus:border-[#2E8B8B] transition-colors">
                    <option value="" disabled>
                      Select Your State*
                    </option>
                    {usStates.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pt-2">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" required className="mt-1 w-4 h-4 text-[#1B365D] focus:ring-[#2E8B8B]" />
                    <span className="text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-[#1B365D] hover:underline">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-[#1B365D] hover:underline">
                        Terms of Service
                      </a>
                      . I consent to being contacted by phone, email, or text.
                    </span>
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <button type="submit" className={`w-full py-3 bg-[#1B365D] text-white rounded-md hover:bg-[#F4B942] transition-colors flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`} disabled={isSubmitting}>
                  {isSubmitting ? <>
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                      <span>Processing...</span>
                    </> : <span className="font-medium">
                      Book My Free Consultation
                    </span>}
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>;
};