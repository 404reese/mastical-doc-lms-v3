import React from 'react';
import Link from 'next/link';

interface CTASectionProps {
    title?: string;
    description?: string;
    primaryBtnText?: string;
    primaryBtnLink?: string;
    secondaryBtnText?: string;
    secondaryBtnLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
    title = "Begin Your Journey",
    description = "Admissions for the upcoming academic year are now open. Secure your place in our next cohort of healers.",
    primaryBtnText = "Apply Now",
    primaryBtnLink = "#",
    secondaryBtnText = "Prospectus",
    secondaryBtnLink = "#"
}) => {
    return (
        <section className="bg-[var(--blue-primary)] py-[120px] px-[5%] text-center text-white">
            <h2 className="font-playfair text-[48px] md:text-[72px] mb-[25px] font-medium leading-tight">
                {title}
            </h2>
            <p className="text-[20px] max-w-[600px] mx-auto mb-[50px] opacity-90 leading-[1.5] font-inter">
                {description}
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-[20px] items-center">
                <Link
                    href={primaryBtnLink}
                    className="bg-white text-[var(--blue-primary)] py-[18px] px-[45px] rounded-[50px] font-bold text-[14px] uppercase tracking-[1px] no-underline transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] w-full md:w-auto max-w-[300px]"
                >
                    {primaryBtnText}
                </Link>
                <Link
                    href={secondaryBtnLink}
                    className="border border-[rgba(255,255,255,0.4)] text-white py-[18px] px-[45px] rounded-[50px] font-bold text-[14px] uppercase tracking-[1px] no-underline transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] w-full md:w-auto max-w-[300px]"
                >
                    {secondaryBtnText}
                </Link>
            </div>
        </section>
    );
};

export default CTASection;
