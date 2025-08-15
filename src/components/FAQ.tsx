import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [{
    question: 'How can you really save up to 60%?',
    answer: 'We leverage our extensive experience and relationships with creditors to negotiate significant reductions in your debt. Our team has a proven track record of securing settlements that reduce original debt amounts by up to 60%. The exact savings depend on your specific creditors, debt amounts, and financial situation.'
  }, {
    question: "What does 'Pay Only When You See Results' mean?",
    answer: "Unlike many debt relief companies, we don't charge upfront fees. Our performance-based fee structure means you only pay when we successfully negotiate a settlement with your creditors. We align our success with yours - if we don't deliver results, you don't pay."
  }, {
    question: 'How is this faster than minimum payments?',
    answer: 'Making minimum payments on high-interest debt can take decades to pay off. Our program focuses on reducing the principal amount owed through settlements, allowing you to become debt-free in 6-48 months. This approach can save you years of payments and thousands in interest compared to making minimum payments.'
  }, {
    question: "What makes your service have a 'human touch'?",
    answer: "We believe in personalized service. You'll work with a dedicated debt specialist who takes the time to understand your unique situation. We provide regular updates, one-on-one consultations, and ongoing support throughout your debt relief journey. You're never just an account number to us."
  }, {
    question: "How do I know if I can 'live free from debt drama'?",
    answer: "Our free consultation will help determine if our program is right for you. We'll analyze your debt, income, and financial goals to create a personalized plan. If you qualify, we can help you escape harassing creditor calls, reduce financial stress, and create a clear path to debt freedom."
  }, {
    question: "What's included in the free consultation?",
    answer: "Our comprehensive free consultation includes a review of your current debt situation, an analysis of potential savings, a timeline to debt freedom, explanation of all available options, and a personalized recommendation. There's no obligation, and it's completely confidential."
  }, {
    question: 'What are the terms and conditions?',
    answer: 'Our program is designed for unsecured debts like credit cards, personal loans, and medical bills. Success rates and timelines vary based on individual circumstances. While we strive for maximum savings, results cannot be guaranteed and depend on creditor cooperation. Our representatives can explain all terms during your free consultation.'
  }];
  return <section ref={ref} id="faq" className={`w-full bg-white py-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our debt relief program.
          </p>
        </div>
        <div className={`max-w-3xl mx-auto ${isVisible ? 'stagger-children' : ''}`}>
          {faqs.map((faq, index) => <div key={index} className="border-b border-gray-200 last:border-b-0 hover-lift">
              <button onClick={() => toggleAccordion(index)} className="flex justify-between items-center w-full py-4 px-2 text-left font-medium text-[#1B365D] hover:text-[#2E8B8B] transition-colors">
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 pb-4 px-2' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};