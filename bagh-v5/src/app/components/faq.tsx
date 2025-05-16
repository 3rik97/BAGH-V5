'use client'; // Only if using Next.js App Router

import { useState } from 'react';

const faqs = [
  {
    question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    answer: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
  },
  {
    question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    answer: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
  },
  {
    question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    answer: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-[1440px]  px-[20px] lg:px-[90px] mx-auto py-[100px]">
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

      <p className="faq-text font-extrabold text-[28px] leading-[44px] text-[#E8E6E3] text-center mb-[10px]"><span>Frequently Asked Questions</span></p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-[#444] bg-[#3C3B39] p-[20px]">
            <button
              onClick={() => toggleFAQ(index)}
              className="font-400 text-[18px] leading-[24px] text-[#E8E6E3] font-['Nunito'] w-[100%] flex justify-between"
            >
              <span className='flex gap-[12px]'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.7333C8.4 18.7333 6.93333 18.3444 5.6 17.5667C4.26667 16.7889 3.21111 15.7333 2.43333 14.4C1.65556 13.0667 1.26667 11.6 1.26667 10C1.26667 8.4 1.65556 6.93333 2.43333 5.6C3.21111 4.26667 4.26667 3.21111 5.6 2.43333C6.93333 1.65555 8.4 1.26667 10 1.26667C11.6 1.26667 13.0667 1.65555 14.4 2.43333C15.7333 3.21111 16.7889 4.26667 17.5667 5.6C18.3444 6.93333 18.7333 8.4 18.7333 10C18.7333 11.6 18.3444 13.0667 17.5667 14.4C16.7889 15.7333 15.7333 16.7889 14.4 17.5667C13.0667 18.3444 11.6 18.7333 10 18.7333ZM10 20C11.8222 20 13.5 19.5556 15.0333 18.6667C16.5667 17.7778 17.7778 16.5667 18.6667 15.0333C19.5556 13.5 20 11.8222 20 10C20 8.17778 19.5556 6.5 18.6667 4.96667C17.7778 3.43333 16.5667 2.22222 15.0333 1.33333C13.5 0.444443 11.8222 -1.90735e-06 10 -1.90735e-06C8.17778 -1.90735e-06 6.5 0.444443 4.96667 1.33333C3.43333 2.22222 2.22222 3.43333 1.33333 4.96667C0.444444 6.5 0 8.17778 0 10C0 11.8222 0.444444 13.5 1.33333 15.0333C2.22222 16.5667 3.43333 17.7778 4.96667 18.6667C6.5 19.5556 8.17778 20 10 20ZM6.6 7.2C6.55556 7.28889 6.56667 7.36667 6.63333 7.43333C6.7 7.5 6.77778 7.53333 6.86667 7.53333H7.93333C7.97778 7.53333 8.03333 7.5 8.1 7.43333C8.16667 7.36667 8.22222 7.28889 8.26667 7.2C8.31111 6.8 8.47778 6.46667 8.76667 6.2C9.05556 5.93333 9.43333 5.8 9.9 5.8C10.3667 5.8 10.7556 5.92222 11.0667 6.16667C11.3778 6.41111 11.5333 6.77778 11.5333 7.26667C11.5333 7.62222 11.4222 7.93333 11.2 8.2C11.0667 8.37778 10.7667 8.64444 10.3 9C9.83333 9.35555 9.48889 9.68889 9.26667 10C9 10.4444 8.86667 10.9333 8.86667 11.4667V11.7333C8.86667 11.8222 8.9 11.9 8.96667 11.9667C9.03333 12.0333 9.11111 12.0667 9.2 12.0667H10.2C10.2889 12.0667 10.3667 12.0333 10.4333 11.9667C10.5 11.9 10.5333 11.8222 10.5333 11.7333V11.6C10.5333 11.2 10.6111 10.8889 10.7667 10.6667C10.9222 10.4444 11.2556 10.1444 11.7667 9.76667C12.2778 9.38889 12.6444 9.04444 12.8667 8.73333C13.1778 8.28889 13.3333 7.77778 13.3333 7.2C13.3333 6.26667 13.0111 5.56667 12.3667 5.1C11.7222 4.63333 10.9444 4.4 10.0333 4.4C9.12222 4.4 8.35556 4.6 7.73333 5C7.02222 5.48889 6.64444 6.22222 6.6 7.2ZM8.53333 14.4667C8.53333 14.7778 8.64444 15.0444 8.86667 15.2667C9.08889 15.4889 9.38889 15.6 9.76667 15.6C10.1444 15.6 10.4556 15.4889 10.7 15.2667C10.9444 15.0444 11.0667 14.7667 11.0667 14.4333C11.0667 14.1 10.9444 13.8222 10.7 13.6C10.4556 13.3778 10.1444 13.2667 9.76667 13.2667C9.38889 13.2667 9.08889 13.3778 8.86667 13.6C8.64444 13.8222 8.53333 14.1111 8.53333 14.4667Z" fill="#E8E6E3" />
              </svg>
                {faq.question}</span>
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden px-6 text-[14px] text-[#E8E6E3] font-normal font-['Inter'] leading-[22px] ${activeIndex === index ? 'max-h-[500px] pb-4' : 'max-h-0 pb-0'
                }`}
            >
              <div className="pt-2">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
