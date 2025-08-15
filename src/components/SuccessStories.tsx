import React from 'react';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export const SuccessStories = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const testimonials = [{
    id: 1,
    name: 'Sarah M.',
    title: 'Saved 58% of total debt',
    quote: 'I was drowning in credit card debt after my medical emergency. Ooraa helped me negotiate with creditors and I saved 58% of my total debt. Now I can finally sleep at night!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5,
    savedAmount: '$32,450'
  }, {
    id: 2,
    name: 'Mike T.',
    title: 'No payment until results',
    quote: 'What impressed me most was their no-upfront-fee policy. They only got paid after they delivered real results. I saved over $20,000 and became debt-free in just 14 months.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5,
    savedAmount: '$20,780'
  }, {
    id: 3,
    name: 'Jennifer R.',
    title: 'Debt-free in 14 months',
    quote: 'At my current minimum payments, I would have been paying for 8+ years! With Ooraa, I was completely debt-free in just 14 months. Their team was professional and supportive throughout the process.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5,
    savedAmount: '$18,325'
  }, {
    id: 4,
    name: 'David L.',
    title: 'They treated me like family',
    quote: 'Other companies made me feel like just another number. Ooraa treated me like family. They genuinely cared about my situation and worked tirelessly to get me the best settlements possible.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 4,
    savedAmount: '$15,640'
  }, {
    id: 5,
    name: 'Maria S.',
    title: 'Finally sleeping peacefully again',
    quote: "The constant calls from creditors were causing me so much anxiety. Ooraa stepped in, handled everything professionally, and now I'm finally sleeping peacefully again. I'm so grateful!",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5,
    savedAmount: '$22,970'
  }, {
    id: 6,
    name: 'Robert J.',
    title: 'Professional and efficient',
    quote: "The team at Ooraa was incredibly professional and efficient. They explained everything clearly and kept me informed throughout the process. I saved over $25,000 and couldn't be happier.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    stars: 5,
    savedAmount: '$25,120'
  }];
  return <section ref={ref} id="success-stories" className={`w-full bg-[#F8F9FA] py-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">
            Real People, Real Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from clients who have transformed their financial lives with
            our debt relief program.
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'stagger-children' : ''}`}>
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow hover-lift">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold text-[#1B365D]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-[#2E8B8B]">
                      {testimonial.title}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < testimonial.stars ? 'text-[#F4B942] fill-[#F4B942]' : 'text-gray-300'}`} />)}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Amount Saved:</span>
                    <span className="text-xl font-bold text-[#28A745]">
                      {testimonial.savedAmount}
                    </span>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};