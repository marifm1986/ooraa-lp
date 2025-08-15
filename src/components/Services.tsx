import React, { useState } from 'react';
import { TrendingDown, DollarSign, ClipboardCheck, Phone, ChevronRight, Check, Star, ArrowRight } from 'lucide-react';

interface ServicesProps {
  openModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ openModal }) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 0,
      title: 'Debt Reduction Services',
      subtitle: 'Save up to 60% on Your Total Debt',
      icon: <TrendingDown className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Credit card debt reduction',
        'Personal loans negotiation',
        'Medical bills settlement',
        'Private student loans',
        'Business debt resolution'
      ],
      description: 'Our debt reduction services help you significantly reduce the amount you owe through expert negotiation with creditors. Our team of negotiation experts has years of experience working with creditors to secure the best possible settlements for our clients.',
      highlight: 'Up to 60% savings on total debt',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 1,
      title: 'Results-Based Pricing',
      subtitle: 'Pay Only When You See Results',
      icon: <DollarSign className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'No enrollment fees',
        'No monthly service fees until settlements',
        'Fees based on debt saved percentage',
        'Complete transparency',
        'Aligned interests with clients'
      ],
      description: 'Unlike many debt relief companies, we don\'t charge upfront fees. Our fee structure is transparent and based on performance. This approach ensures our interests are aligned with yours - we only succeed when you save money.',
      highlight: 'Zero upfront costs',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 2,
      title: 'Accelerated Resolution',
      subtitle: 'Debt-Free in 6-48 Months',
      icon: <ClipboardCheck className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        '24-36 months to debt freedom',
        'Up to 60% debt reduction',
        'Faster than minimum payments',
        'Structured payment plans',
        'Clear timeline milestones'
      ],
      description: 'Our accelerated debt resolution program helps you become debt-free much faster than making minimum payments. Instead of 25+ years paying minimums, achieve freedom in as little as 24 months.',
      highlight: '20x faster than minimum payments',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Personal Consultation',
      subtitle: 'Free Personalized Assessment',
      icon: <Phone className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Comprehensive debt assessment',
        'Personalized savings projection',
        'Custom program timeline',
        'Alternative options evaluation',
        'No pressure, no obligation'
      ],
      description: 'Our consultation process is designed to understand your unique situation and provide tailored solutions. Our certified debt specialists take the time to listen and understand your goals before recommending solutions.',
      highlight: '100% free consultation',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="services" className="w-full bg-gradient-to-br from-[#F8F9FA] to-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-2xl font-bold text-[#1B365D] mb-6">
            Comprehensive Debt Relief Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our tailored debt relief services are designed to address your specific financial situation 
            with proven strategies and personalized support.
          </p>
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`}></div>
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                    <div className="text-[#1B365D]">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.highlight}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#1B365D] mb-3">{service.subtitle}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#28A745] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(index)}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  selectedService === index 
                    ? 'transform scale-105 z-10' 
                    : 'hover:transform hover:scale-102'
                }`}
              >
                <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                  selectedService === index 
                    ? 'shadow-2xl ring-4 ring-[#1B365D]/20' 
                    : 'group-hover:shadow-xl'
                }`}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    
                    <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-lg">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
                        {service.highlight}
                      </p>
                    </div>
                    
                    {selectedService === index && (
                      <div className="absolute top-6 right-6">
                        <div className="bg-[#28A745] text-white rounded-full p-2 shadow-lg">
                          <Check className="w-5 h-5" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#1B365D] mb-2">{service.subtitle}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed View for Selected Service */}
          {selectedService !== null && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img 
                  src={services[selectedService].image} 
                  alt={services[selectedService].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${services[selectedService].color} opacity-60`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-4 mx-auto bg-white/20 backdrop-blur-sm rounded-full p-6 w-fit">
                      {services[selectedService].icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{services[selectedService].title}</h3>
                    <p className="text-xl opacity-90">{services[selectedService].highlight}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <h4 className="text-3xl font-bold text-[#1B365D] mb-4">
                  {services[selectedService].subtitle}
                </h4>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {services[selectedService].description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {services[selectedService].features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 transform transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="bg-[#28A745] rounded-full p-1 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={openModal}
                    className="flex-1 bg-[#1B365D] text-white py-4 px-8 rounded-xl font-semibold hover:bg-[#2a4a75] transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Book Free Consultation
                  </button>
                  <button className="px-6 py-4 border-2 border-[#1B365D] text-[#1B365D] rounded-xl font-semibold hover:bg-[#1B365D] hover:text-white transition-all duration-200 flex items-center gap-2">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>  
      </div>
    </section>
  );
};