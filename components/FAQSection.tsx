"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Are certificates provided for all courses?",
        answer: "Yes, upon successful completion of any course, you will receive a certificate of accomplishment."
    },
    {
        question: "Are recordings provided?",
        answer: "Yes, high-quality recordings of all live sessions are made available on our website for your review."
    },
    {
        question: "For how long are recordings accessible?",
        answer: "Course recordings remain accessible for a period of 2 years, allowing you ample time to revisit and reinforce your learning."
    },
    {
        question: "How is course material accessed?",
        answer: "All course materials, including lecture notes and session recordings, are conveniently accessible through our dedicated student portal on the website."
    },
    {
        question: "What happens if a participant misses a live session?",
        answer: "If you miss a live session, you can easily access the full recording and associated course materials on our website at your convenience."
    },
    {
        question: "Are doubts and questions encouraged?",
        answer: "Absolutely. We dedicate the final 15 minutes of every session to a Q&A with Dr. Gaurang Gaikwad. Additionally, you are welcome to email us any further questions."
    },
    {
        question: "How can one enroll in courses?",
        answer: "To enroll in a course, please send an email to gauranghg@gmail.com, and our admissions team will guide you through the registration process."
    },
    {
        question: "What platforms are used for live sessions?",
        answer: "All live sessions are conducted via Zoom to ensure a stable and interactive learning experience."
    },
    {
        question: "Who teaches at the academy?",
        answer: "Our faculty consists of distinguished experts, including renowned national and international practitioners."
    },
    {
        question: "Are the courses live, recorded, or hybrid?",
        answer: "Our courses generally follow a hybrid model, featuring a majority of live interactive lectures complemented by select pre-recorded sessions."
    },
    {
        question: "Are the courses suitable for beginners as well as experienced practitioners?",
        answer: "Yes, our curriculum is designed to accommodate all levels. We offer foundational courses for beginners as well as advanced modules for experienced practitioners, ensuring a comprehensive learning path from basic to advanced concepts."
    },
    {
        question: "What kinds of courses does the academy offer?",
        answer: "The Academy offers a wide range of courses covering key specialties such as Endocrinology, Ophthalmology, Pediatrics, Gynecology, and Geriatrics. We also provide advanced training in Miasms, Nosodes, Sarcodes, lesser-known remedies, and complex homeopathic concepts."
    },
    {
        question: "Is the teaching more theoretical or clinically oriented?",
        answer: "Our teaching is highly clinically oriented. We focus on clinical case presentations, offering detailed explanations of analysis, evaluation, remedy selection, and potency. This is complemented by in-depth theoretical teaching on advanced concepts and remedy differentiation."
    }
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-[100px] px-[5%]">
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
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
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
