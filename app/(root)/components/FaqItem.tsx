'use client';
import { FAQS } from '@/constant/content';
import React, { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}

interface FAQItemProps extends FAQ {
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ q, a, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left font-semibold text-white"
      >
        <span>{q}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && <div className="px-6 pb-6 text-gray-400">{a}</div>}
    </div>
  );
}

export default function FaqSection(){
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return(
    <section id="faq" className="w-full max-w-3xl mx-auto mt-24 sm:mt-32">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq: FAQ, idx: number) => (
              <FAQItem
                key={idx}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </section>
  )
}