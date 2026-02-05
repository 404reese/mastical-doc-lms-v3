import React from 'react';
import { ShieldCheck, Users, LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface Feature {
    icon: string; // We'll map string names to actual icons 
    title: string;
    text: string;
}

interface ResidencySectionProps {
    label?: string;
    title?: string;
    description?: string;
    features?: Feature[];
    imageSrc?: string;
    ctaText?: string;
    ctaLink?: string;
}

const iconMap: Record<string, LucideIcon> = {
    'shield-check': ShieldCheck,
    'users': Users,
};

const ResidencySection: React.FC<ResidencySectionProps> = ({
    label = "Experiential Learning",
    title = "Hands-on Clinical Residency",
    description = "We believe that the art of healing is best learned through experience. Our students don't just read about cases; they manage them under expert guidance in a supportive, real-world environment.",
    features = [
        {
            icon: 'shield-check',
            title: 'Extensive Practical Experience',
            text: 'Students graduate with profound confidence built on real patient interaction.'
        },
        {
            icon: 'users',
            title: 'Direct Mentorship',
            text: 'One-on-one guidance from master homeopaths throughout your residency.'
        }
    ],
    imageSrc = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    ctaText = "Explore Clinical Protocols",
    ctaLink = "#"
}) => {
    return (
        <section className="py-[100px] px-[5%] flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-[80px] max-w-[1300px] mx-auto text-center lg:text-left">
            <div className="relative flex-1 flex justify-center w-full max-w-[550px]">
                {/* Outline border */}
                <div className="absolute top-[20px] left-[20px] w-full h-full border border-[#d1d5db] rounded-[40px_180px_180px_40px] z-0 hidden md:block"></div>

                {/* Main Image */}
                <div className="relative z-10 w-full h-[350px] md:h-[450px] rounded-[180px_180px_40px_180px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    <Image
                        src={imageSrc}
                        alt="Clinical Learning"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="flex-1 max-w-[550px]">
                <span className="block text-[12px] font-bold text-[var(--accent-tan)] uppercase tracking-[2px] mb-[15px]">
                    {label}
                </span>
                <h2 className="font-playfair text-[36px] md:text-[52px] text-[var(--blue-primary)] leading-[1.1] mb-[25px] font-medium">
                    {title}
                </h2>
                <p className="text-[18px] text-[var(--text-gray)] leading-[1.6] mb-[40px] font-inter">
                    {description}
                </p>

                <div className="flex flex-col gap-[30px] mb-[30px]">
                    {features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon] || ShieldCheck;
                        return (
                            <div key={index} className="flex flex-col md:flex-row gap-[20px] items-center md:items-start text-center md:text-left">
                                <IconComponent className="text-[var(--blue-primary)] w-[24px] h-[24px] shrink-0 mt-[4px]" />
                                <div>
                                    <h4 className="text-[var(--blue-primary)] font-playfair text-[20px] mb-[5px] font-bold">
                                        {feature.title}
                                    </h4>
                                    <p className="text-[var(--text-gray)] text-[15px] leading-[1.5] font-inter">
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <a
                    href={ctaLink}
                    className="inline-block text-[var(--blue-primary)] no-underline font-bold text-[13px] uppercase tracking-[1.5px] border-b-2 border-[var(--blue-primary)] pb-[5px] mt-[20px] hover:opacity-70 transition-opacity font-inter"
                >
                    {ctaText}
                </a>
            </div>
        </section>
    );
};

export default ResidencySection;
