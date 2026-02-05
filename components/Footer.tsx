import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface ContactInfo {
    address: string;
    phone: string;
    email: string;
}

const year = new Date().getFullYear();
const footerData: {
    social: FooterSection;
    helplinks: FooterSection;
    contact: ContactInfo;
} = {
    social: {
        title: "Social",
        links: [
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "Blog Website", href: "#" },
        ],
    },
    helplinks: {
        title: "Quick Links",
        links: [
            { label: "Terms & Conditions", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Disclaimer", href: "#" },
        ],
    },
    contact: {
        address: "123 Healing Way, Wellness City, HC 90210",
        phone: "+1 (555) 123-4567",
        email: "admissions@homeopathy.edu",
    },
};

const Footer = () => {
    return (
        <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] font-inter pt-[80px] px-[5%] pb-[40px]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-[40px] md:gap-y-[60px] mb-[60px] text-center lg:text-left">
                {/* Brand Column */}
                <div className="flex flex-col items-center lg:items-start">
                    <Link href="#" className="mb-[25px] inline-block">
                        <NextImage
                            src="/main-logo.webp"
                            alt="Academy of Classical Homeopathy"
                            width={200}
                            height={60}
                            className="h-auto w-auto max-w-[200px]"
                        />
                    </Link>
                    <p className="text-[14px] leading-[1.6] max-w-[280px]">
                        Dedicated to excellence in homeopathic education, research, and clinical practice.
                    </p>
                </div>

                {/* Education Column */}
                <div>
                    <h4 className="text-[var(--footer-heading)] text-[14px] uppercase tracking-[2px] mb-[30px] font-semibold">
                        {footerData.social.title}
                    </h4>
                    <ul className="list-none p-0">
                        {footerData.social.links.map((link, index) => (
                            <li key={index} className="mb-[15px]">
                                <Link href={link.href} className="text-[var(--footer-text)] no-underline text-[15px] transition-colors duration-300 hover:text-white">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Institute Column */}
                <div>
                    <h4 className="text-[var(--footer-heading)] text-[14px] uppercase tracking-[2px] mb-[30px] font-semibold">
                        {footerData.helplinks.title}
                    </h4>
                    <ul className="list-none p-0">
                        {footerData.helplinks.links.map((link, index) => (
                            <li key={index} className="mb-[15px]">
                                <Link href={link.href} className="text-[var(--footer-text)] no-underline text-[15px] transition-colors duration-300 hover:text-white">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h4 className="text-[var(--footer-heading)] text-[14px] uppercase tracking-[2px] mb-[30px] font-semibold">
                        Contact
                    </h4>
                    <div className="flex flex-col gap-[15px] leading-[1.5]">
                        <p>{footerData.contact.address}</p>
                        <p>{footerData.contact.phone}</p>
                        <p>
                            <a href={`mailto:${footerData.contact.email}`} className="text-[var(--footer-text)] no-underline text-[15px] transition-colors duration-300 hover:text-white">
                                {footerData.contact.email}
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto pt-[30px] border-t border-[rgba(255,255,255,0.05)] text-center">
                <p className="text-[12px] uppercase tracking-[1px] opacity-60">
                    © {year} Academy of Classical Homeopathy. All rights reserved.
                </p>
                <p className="mt-4">
                    <span className='text-[12px] uppercase tracking-[1px] opacity-60'>Developed and Maintained by</span> 
                    <span className='text-[12px] uppercase tracking-[1px] opacity-80'> <a href="https://mastical.com" target="_blank" rel="noopener noreferrer">Mastical</a></span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
