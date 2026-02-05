"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What are the entry requirements?",
        answer: "We welcome applicants from diverse backgrounds. While academic excellence is valued, we prioritize passion, dedication, and a commitment to the healing arts. A personal interview and portfolio review are part of our holistic admissions process."
    },
    {
        question: "How long are the courses?",
        answer: "Our programs vary in length to suit different needs. We offer intensive 3-month certifications, 1-year diploma programs, and flexible part-time options for working professionals. Each course is designed to provide comprehensive training."
    },
    {
        question: "Is financial aid available?",
        answer: "Yes, we believe that education should be accessible to all deserving candidates. We offer a range of scholarships and flexible payment plans based on merit and financial need. Please contact our admissions office for more details."
    },
    {
        question: "Can I visit the campus?",
        answer: "Absolutely. We encourage prospective students to visit our campus, meet our faculty, and experience our learning environment firsthand. We hold regular open days and can also arrange private tours by appointment."
    }
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[var(--bg-cream)] py-[100px] px-[5%]">
            <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-[60px]">
                    <h2 className="font-playfair text-[48px] md:text-[56px] text-[var(--title-color)] mb-[20px] leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-inter text-[18px] text-[var(--para-color)] opacity-80 max-w-[600px] mx-auto">
                        Everything you need to know about joining our community.
                    </p>
                </div>

                <div className="space-y-[20px]">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-[12px] overflow-hidden transition-all duration-300 border border-transparent ${openIndex === index
                                ? 'shadow-[0_10px_30px_rgba(31,48,139,0.1)] border-[rgba(31,48,139,0.1)]'
                                : 'hover:shadow-[0_5px_15px_rgba(0,0,0,0.05)]'
                                }`}
                        >
                            <button
                                className="w-full flex justify-between items-center p-[25px] text-left focus:outline-none"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className={`font-playfair text-[20px] md:text-[22px] font-medium transition-colors duration-300 ${openIndex === index ? 'text-[var(--blue-primary)]' : 'text-[var(--title-color)]'
                                    }`}>
                                    {faq.question}
                                </span>
                                <span className={`ml-[20px] flex-shrink-0 text-[var(--blue-primary)] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'
                                    }`}>
                                    {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-[0_25px_30px_25px] text-[16px] leading-[1.6] text-[var(--para-color)] font-inter border-t border-dashed border-[rgba(0,0,0,0.05)] pt-[20px]">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
