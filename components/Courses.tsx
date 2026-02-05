"use client";

import React from "react";
import { Calendar, ShieldCheck, ArrowRightCircle, MoveRight } from "lucide-react";

const courses = [
    {
        title: "HOMEOPATHIC STRATEGIES FOR GERIATRICS- WITH SPECIAL FOCUS ON OPHTHALMOLOGY",
        type: "Advanced | English",
        badge: "Undergraduate",
    },
    {
        title: "CHRONIC DISEASE MANAGEMENT & ADVANCED MIASMATIC ANALYSIS",
        type: "Advanced | English",
        badge: "Postgraduate",
    },
    {
        title: "PEDIATRIC PRESCRIBING & CONSTITUTIONAL THERAPEUTICS",
        type: "Advanced | English",
        badge: "Practitioner",
    },
    {
        title: "MATERIA MEDICA VIVA: MASTERING THE RED LINE SYMPTOMS",
        type: "Advanced | English",
        badge: "Undergraduate",
    },
];

const Courses = () => {
    const [startIndex, setStartIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Listener
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const visibleCount = isMobile ? 1 : 2;

    // Combine courses + explore card for carousel logic
    const allItems = [
        ...courses.map((c, i) => ({ ...c, type: 'course' as const, id: i })),
        { type: 'explore' as const, id: 'explore' }
    ];

    const maxIndex = Math.max(0, allItems.length - visibleCount);

    // Reset index if out of bounds on resize
    React.useEffect(() => {
        if (startIndex > maxIndex) {
            setStartIndex(maxIndex);
        }
    }, [maxIndex, startIndex]);

    const nextSlide = () => {
        setStartIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section className="max-w-[1250px] mx-auto py-20 px-5">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div className="space-y-2">
                    <h2 className="font-playfair text-[36px] md:text-[48px] text-[var(--blue-accent)] font-medium leading-tight">
                        Academic Offerings
                    </h2>
                    <p className="text-[var(--para-color)] text-lg">
                        Curated paths for every aspiring healer.
                    </p>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={startIndex === 0}
                        className="w-12 h-12 rounded-full border border-[var(--blue-accent)] flex items-center justify-center text-[var(--blue-accent)] hover:bg-[var(--blue-accent)] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Previous slide"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={startIndex >= maxIndex}
                        className="w-12 h-12 rounded-full border border-[var(--blue-accent)] flex items-center justify-center text-[var(--blue-accent)] hover:bg-[var(--blue-accent)] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Next slide"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out gap-6"
                    style={{
                        transform: `translateX(calc(-${startIndex * (isMobile ? 100 : 50)}% - ${startIndex * (isMobile ? 24 : 12)}px))`
                    }}
                >
                    {allItems.map((item, index) => {
                        if (item.type === 'course') {
                            const course = item as typeof courses[0];
                            return (
                                <div
                                    key={`course-${index}`}
                                    className="flex-none w-full md:w-[calc(50%-12px)] h-[260px] md:h-[350px] group relative rounded-[40px] p-6 md:p-9 flex flex-col justify-between overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 text-white"
                                    style={{
                                        background: "linear-gradient(135deg, #cbd5e1 0%, #1F308B 80%)",
                                    }}
                                >
                                    {/* Pattern Overlay */}
                                    <div
                                        className="absolute inset-0 opacity-10 z-0"
                                        style={{
                                            backgroundImage:
                                                "url('https://www.transparenttextures.com/patterns/cubes.png')",
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="font-playfair italic text-xl mb-4 text-white/90">
                                            {course.type}
                                        </div>
                                        <h3 className="text-[22px] md:text-[28px] font-extrabold uppercase leading-[1.1] tracking-tighter text-[#1E293B] max-w-[90%] mb-auto">
                                            {course.title}
                                        </h3>
                                    </div>

                                    <div className="mt-auto relative z-10">
                                        <span className="inline-block bg-white/30 border border-white/50 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase mb-5">
                                            {course.badge}
                                        </span>

                                        <div className="flex gap-5 text-xs font-semibold">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                Full-Time Curriculum
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <ShieldCheck className="w-3.5 h-3.5" />
                                                Accredited
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div key="explore" className="flex-none w-full md:w-[calc(50%-12px)] h-[260px] md:h-[350px] bg-white border-2 border-dashed border-[#cbd5e1] rounded-[40px] flex flex-col items-center justify-center text-center p-8 text-[var(--blue-accent)] transition-all duration-300 hover:bg-slate-50 hover:border-[var(--blue-accent)] group cursor-pointer">
                                    <ArrowRightCircle className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-playfair text-3xl mb-2">Explore All Courses</h4>
                                    <p className="text-base opacity-80 max-w-[250px]">
                                        Browse our full catalog of specialized training
                                    </p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>

            {/* Mobile Controls (optional fallback) */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-8">
                <button
                    onClick={prevSlide}
                    disabled={startIndex === 0}
                    className="w-10 h-10 rounded-full border border-[var(--blue-accent)] flex items-center justify-center text-[var(--blue-accent)] disabled:opacity-30"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                    onClick={nextSlide}
                    disabled={startIndex >= maxIndex}
                    className="w-10 h-10 rounded-full border border-[var(--blue-accent)] flex items-center justify-center text-[var(--blue-accent)] disabled:opacity-30"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
            </div>
        </section >
    );
};

export default Courses;
