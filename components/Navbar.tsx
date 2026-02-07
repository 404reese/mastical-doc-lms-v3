"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between py-5 px-[5%]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <Image src="/main-logo.webp" alt="Logo" width={180} height={180} />
      </Link>

      {/* Center Nav Links (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10">
        <Link
          href="/"
          className="text-[#1F308B] font-semibold text-base tracking-wide uppercase hover:opacity-80"
        >
          Home
        </Link>
        <Link
          href="/courses"
          className="text-[#1F308B] font-semibold text-base tracking-wide uppercase hover:opacity-80"
        >
          Courses
        </Link>
        <Link
          href="/blog"
          className="text-[#1F308B] font-semibold text-base tracking-wide uppercase hover:opacity-80"
        >
          Blog
        </Link>
      </div>

      {/* Login Button (Right - Desktop) */}
      <div className="hidden md:block">
        <Link
          href="/login"
          className="bg-[#1F308B] text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide uppercase hover:opacity-80 transition"
        >
          Log In
        </Link>
      </div>

      {/* Hamburger (Mobile) */}
      <div
        className="flex flex-col gap-[5px] cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`w-[25px] h-[3px] bg-[#1F308B] rounded transition-all ${
            isOpen ? "translate-y-[8px] rotate-45" : ""
          }`}
        />
        <span
          className={`w-[25px] h-[3px] bg-[#1F308B] rounded transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-[25px] h-[3px] bg-[#1F308B] rounded transition-all ${
            isOpen ? "-translate-y-[8px] -rotate-45" : ""
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)} className="nav-link">
          Home
        </Link>
        <Link href="/courses" onClick={() => setIsOpen(false)} className="nav-link">
          Courses
        </Link>
        <Link href="/blog" onClick={() => setIsOpen(false)} className="nav-link">
          Blog
        </Link>
        <Link
          href="/login"
          onClick={() => setIsOpen(false)}
          className="bg-[#1F308B] text-white px-8 py-3 rounded-full text-base font-semibold uppercase"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
