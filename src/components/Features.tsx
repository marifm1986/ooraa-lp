import React from 'react';
import { CheckCircle, DollarSign, Clock, Users } from 'lucide-react';

interface FeaturesProps {
  openModal: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ openModal }) => {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Save up to 60%",
      description: "Our negotiation experts work directly with creditors to reduce your debt by up to 60%, allowing you to live free from debt drama.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "No Upfront Fees",
      description: "We believe in results-first service. You only pay when you see actual debt reduction results from our negotiations.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Faster Results",
      description: "Become debt-free in just 6-48 months instead of decades with minimum payments. Our program accelerates your path to financial freedom.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Human Touch",
      description: "You're not just a number to us. Our certified debt specialists provide personalized support throughout your debt relief journey.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#F8F9FA] via-white to-[#F5E6D3] py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
            Why Thousands Trust Ooraa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our approach to debt relief is centered on transparency, results,
            and your financial wellbeing.
          </p>
        </div>

        {/* Features Grid - Mobile Stacked */}
        <div className="lg:hidden space-y-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl bg-white transform transition-all duration-500 hover:scale-105"
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-80`}></div>
                
                {/* Icon and Title Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                    <CheckCircle className="w-6 h-6 text-[#B8312F] mr-2 flex-shrink-0 bg-white rounded-full" />
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid - Desktop */}
        <div className="hidden lg:block">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {features.slice(0, 2).map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl bg-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="grid grid-cols-2 h-80">
                  {/* Image Side */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-70`}></div>
                    
                    {/* Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#1B365D] mb-4 flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#B8312F] mr-3 flex-shrink-0 mt-0.5" />
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Cards (Reversed Layout) */}
          <div className="grid grid-cols-2 gap-8">
            {features.slice(2, 4).map((feature, index) => (
              <div 
                key={index + 2}
                className="group relative overflow-hidden rounded-2xl shadow-xl bg-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="grid grid-cols-2 h-80">
                  {/* Content Side */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#1B365D] mb-4 flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#B8312F] mr-3 flex-shrink-0 mt-0.5" />
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Image Side */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-70`}></div>
                    
                    {/* Icon */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1B365D] mb-4">
                Experience the Ooraa Difference
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join thousands of satisfied clients who have chosen our proven approach to debt relief 
                and discovered what it means to live free from debt drama.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1B365D] mb-1">60%</div>
                  <div className="text-sm text-gray-600">Average Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1B365D] mb-1">$0</div>
                  <div className="text-sm text-gray-600">Upfront Fees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1B365D] mb-1">24</div>
                  <div className="text-sm text-gray-600">Months Average</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1B365D] mb-1">1000s</div>
                  <div className="text-sm text-gray-600">Clients Helped</div>
                </div>
              </div>
              
              <button 
                onClick={openModal}
                className="bg-[#1B365D] text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-[#2a4a75] transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Book Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};