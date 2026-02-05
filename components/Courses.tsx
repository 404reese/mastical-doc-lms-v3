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
                <a
                    href="#"
                    className="text-[var(--blue-accent)] font-semibold border-b border-[var(--blue-accent)] pb-0.5 text-[15px] hover:opacity-70 transition-opacity"
                >
                    View Course Catalog
                </a>
            </div>

            {/* Scrollable Container Wrapper */}
            <div className="relative">

                {/* Scrollable Area */}
                <div className="overflow-x-auto pb-8 -mx-5 px-5 md:mx-0 md:px-0 custom-scrollbar">
                    <div className="flex gap-6 w-max px-4 md:px-8">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="group relative flex-none w-[320px] md:w-[480px] h-[260px] md:h-[300px] rounded-[40px] p-6 md:p-9 flex flex-col justify-between overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 text-white bg-gradient-to-br from-[#cbd5e1] to-[var(--blue-accent)] via-[#cbd5e100]"
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

                                <div className="mt-auto">
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
                        ))}

                        {/* Explore All Card */}
                        <div className="flex-none w-[300px] bg-white border-2 border-dashed border-[#cbd5e1] rounded-[40px] flex flex-col items-center justify-center text-center p-8 text-[var(--blue-accent)] transition-all duration-300 hover:bg-slate-50 hover:border-[var(--blue-accent)] group cursor-pointer">
                            <ArrowRightCircle className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="font-playfair text-2xl mb-2">Explore All Courses</h4>
                            <p className="text-sm opacity-80">
                                Browse our full catalog of specialized training
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile Swipe Indicator */}
                <div className="flex md:hidden justify-center items-center gap-2 mt-4 text-[var(--blue-accent)] opacity-80 animate-pulse px-5">
                    <span className="text-sm font-medium">Swipe to explore more</span>
                    <MoveRight className="w-4 h-4" />
                </div>
            </div>
        </section >
    );
};

export default Courses;
