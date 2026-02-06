"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="w-full max-w-[400px] bg-white p-[40px_35px] rounded-[20px] shadow-[0_20px_50px_rgba(31,48,139,0.08)] border border-[#f1f5f9] text-center relative flex flex-col items-center">
            {/* Logo Area */}
            <Link href="/" className="flex flex-col items-center mb-[25px] decoration-none hover:opacity-90 transition-opacity">
                <div className="mt-2">
                    <Image
                        src="/main-logo.webp"
                        alt="Academy of Classical Homeopathy"
                        width={160}
                        height={40}
                        className="h-auto w-auto max-w-[180px]"
                    />
                </div>
            </Link>

            <h1 className="font-playfair text-[40px] text-[var(--blue-accent)] mb-[5px] font-medium italic tracking-[0.5px]">
                Welcome Back
            </h1>
            <p className="text-[13px] mb-[30px] text-[var(--para-color)] opacity-80 font-inter">
                Enter your credentials to access your portal
            </p>

            <form onSubmit={handleSubmit} className="w-full text-left">
                {/* Email Field */}
                <div className="mb-[18px]">
                    <div className="flex items-center gap-[6px] mb-[6px]">
                        <Mail className="w-[14px] h-[14px] text-[var(--blue-accent)]" />
                        <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.5px] text-[var(--title-black)] font-inter">
                            Email Address
                        </label>
                    </div>
                    <div className="w-full">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. name@email.com"
                            required
                            className="w-full p-[10px_14px] border-[1.5px] border-[#e2e8f0] rounded-[8px] text-[14px] outline-none transition-all duration-200 font-inter text-[var(--title-black)] focus:border-[var(--blue-accent)] focus:bg-[#f8fafc]"
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="mb-[18px]">
                    <div className="flex items-center gap-[6px] mb-[6px]">
                        <Lock className="w-[14px] h-[14px] text-[var(--blue-accent)]" />
                        <label htmlFor="password" className="text-[11px] font-bold uppercase tracking-[0.5px] text-[var(--title-black)] font-inter">
                            Password
                        </label>
                    </div>
                    <div className="w-full">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full p-[10px_14px] border-[1.5px] border-[#e2e8f0] rounded-[8px] text-[14px] outline-none transition-all duration-200 font-inter text-[var(--title-black)] focus:border-[var(--blue-accent)] focus:bg-[#f8fafc]"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center text-[12px] m-[20px_0_25px]">
                    <label className="flex items-center gap-[6px] cursor-pointer text-[var(--para-color)] font-inter">
                        <input type="checkbox" className="cursor-pointer" /> Remember me
                    </label>
                    <Link href="#" className="text-[var(--blue-accent)] font-semibold font-inter hover:underline">
                        Forgot password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[var(--blue-accent)] text-white border-none p-[14px] rounded-[8px] text-[14px] font-bold cursor-pointer transition-all duration-300 font-inter hover:bg-[#16246e] hover:shadow-[0_8px_15px_rgba(31,48,139,0.2)]"
                >
                    Sign In
                </button>
            </form>

            <p className="text-[13px] mt-[20px] font-inter text-[var(--para-color)]">
                Don't have an account?{' '}
                <Link href="#" className="text-[var(--blue-accent)] font-bold decoration-none hover:underline">
                    Register Now
                </Link>
            </p>
        </div>
    );
};

export default LoginForm;
