"use client";

import React, { useState, useEffect, useCallback } from "react";

const testimonials = [
    {
        quote:
            "The humans of our family have now started to reap the benefit of the skill & dedication this institute possesses. They treat us as whole & complete entities.",
        name: "Dr. Elena Rodriguez",
        role: "ALUMNI & PRACTITIONER",
        image:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200",
        icon: "\"",
    },
    {
        quote:
            "Finding an institute that views healing through a classical lens while maintaining modern clinical standards has completely transformed my practice.",
        name: "Dr. James Smith",
        role: "SENIOR CLINICIAN",
        image:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200",
        icon: "\"",
    },
    {
        quote:
            "Deep immersion into miasms and complex nosodes provided the clinical breakthrough I was searching for. Highly recommended for dedicated learners.",
        name: "Dr. Sarah Chen",
        role: "PRACTITIONER",
        image:
            "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200",
        icon: "\"",
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 7000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-[5%] md:px-[10%] relative overflow-hidden bg-[var(--bg-color)]">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className={`transition-opacity duration-1000 ease-in-out absolute w-full max-w-[900px] flex flex-col items-center ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                    style={{
                        transform: index === activeIndex ? "translateY(0)" : "translateY(10px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out"
                    }}
                >
                    <span className="font-playfair text-[60px] text-[#C5A585] leading-none mb-5 font-bold block">
                        {testimonial.icon}
                    </span>
                    <blockquote className="font-playfair italic text-[clamp(24px,4vw,44px)] text-[var(--blue-accent)] leading-tight mb-12 font-normal">
                        "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-[85px] h-[85px] rounded-full object-cover grayscale mb-5"
                        />
                        <h4 className="font-playfair text-lg font-bold text-[var(--title-black)] mb-2">
                            {testimonial.name}
                        </h4>
                        <p className="font-inter text-[11px] font-bold uppercase tracking-[2px] text-[var(--blue-accent)]">
                            {testimonial.role}
                        </p>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-10 flex gap-3 z-20">
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${index === activeIndex
                                ? "bg-[var(--blue-accent)] scale-125"
                                : "bg-[#CBD5E1]"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
