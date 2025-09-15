
"use client";

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, id, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-md">
      <h3>
        <button
          onClick={onToggle}
          className="w-full flex justify-between items-center text-left py-5 px-6"
          aria-expanded={isOpen}
          aria-controls={`faq-content-${id}`}
        >
          <span className="text-lg text-soul-blue-dark font-bold">{title}</span>
          <span className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`faq-content-${id}`}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 px-6 text-gray-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      q: 'Is this really free for life?',
      a: 'Yes, absolutely! As one of our first 30 Soul Builders, your premium access is free forever. This is our way of saying thank you for helping us build a better platform.'
    },
    {
      q: 'Why only 100 people?',
      a: 'We are starting with a small, dedicated group to ensure we can listen to every piece of feedback and build a strong community foundation. This allows for a more personal and impactful development process.'
    },
    {
      q: 'What happens after I sign up?',
      a: 'After you sign up for the waitlist, you\'ll receive a confirmation email. Once we\'re ready to onboard our Soul Builders, you\'ll get an exclusive invitation to create your profile and start experiencing the platform.'
    },
    {
      q: 'Can I lose my lifetime access?',
      a: 'Your lifetime access is yours to keep, as long as you adhere to our community guidelines. We aim to build a respectful and safe space for everyone.'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <img 
        src="/section-bg.png" 
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover -z-1"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-soul-text">
            Frequently Asked <span className="text-soul-purple">Questions</span>
          </h2>
          <div className="w-20 h-1.5 bg-soul-purple mt-4 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index} 
              id={String(index)} 
              title={item.q}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              {item.a}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
