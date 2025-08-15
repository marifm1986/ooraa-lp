import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose
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
  const [isSuccess, setIsSuccess] = useState(false);
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors">
          <X className="w-6 h-6" />
        </button>
        {isSuccess ? <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#28A745]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#28A745]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1B365D] mb-2">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your consultation request has been received. We'll call you within
              2 hours.
            </p>
            <p className="text-gray-500 mb-8">
              Check your email for a confirmation and additional details about
              your consultation.
            </p>
            <button onClick={onClose} className="bg-[#1B365D] text-white px-6 py-3 rounded-md hover:bg-[#F4B942] transition-colors duration-300">
              Close
            </button>
          </div> : <div className="p-6 md:p-8">
            <div className="mb-6 text-center">
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
                    <option value="5000_10000">$5,000 - $10,000</option>
                    <option value="10001_20000">$10,001 - $20,000</option>
                    <option value="20001_30000">$20,001 - $30,000</option>
                    <option value="30001_50000">$30,001 - $50,000</option>
                    <option value="50001_100000">$50,001 - $100,000</option>
                    <option value="100001_plus">$100,001+</option>
                  </select>
                </div>
                {/* Line 4: State */}
                <div>
                  <select id="state" name="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#2E8B8B] focus:border-[#2E8B8B] transition-colors">
                    <option value="" disabled>
                      Select Your State*
                    </option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="DC">District of Columbia</option>
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
          </div>}
      </div>
    </div>;
};