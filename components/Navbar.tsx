"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center py-5 px-[5%] bg-transparent relative z-50">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 no-underline">
                <Image src="/main-logo.webp" alt="Logo" width={180} height={180} />
            </Link>

            {/* Hamburger Menu (Mobile) */}
            <div
                className="flex flex-col gap-[5px] cursor-pointer z-[1001] md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span
                    className={`w-[25px] h-[3px] bg-[#1F308B] rounded-[2px] transition-all duration-300 ${isOpen ? "transform translate-y-[8px] rotate-45" : ""
                        }`}
                ></span>
                <span
                    className={`w-[25px] h-[3px] bg-[#1F308B] rounded-[2px] transition-all duration-300 ${isOpen ? "opacity-0" : ""
                        }`}
                ></span>
                <span
                    className={`w-[25px] h-[3px] bg-[#1F308B] rounded-[2px] transition-all duration-300 ${isOpen ? "transform -translate-y-[8px] -rotate-45" : ""
                        }`}
                ></span>
            </div>

            {/* Navigation Links */}
            <div
                className={`fixed inset-0 h-screen w-screen bg-white flex flex-col justify-center items-center shadow-none transition-transform duration-300 ease-in-out z-[1000] md:static md:h-auto md:w-auto md:bg-transparent md:flex-row md:transform-none md:transition-none md:gap-[30px] md:flex ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
                    }`}
            >
                {["Philosophy", "Academics", "Faculty", "Journal"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-[#1F308B] font-semibold text-[13px] tracking-[1px] uppercase no-underline mb-6 md:mb-0 hover:opacity-80 transition-opacity font-inter"
                        onClick={() => setIsOpen(false)}
                    >
                        {item}
                    </Link>
                ))}
                <Link
                    href="#apply"
                    className="bg-[#1F308B] text-white px-[25px] py-[12px] rounded-[50px] font-inter text-[13px] font-semibold tracking-[1px] uppercase transition-opacity hover:opacity-80"
                    onClick={() => setIsOpen(false)}
                >
                    Apply Now
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
