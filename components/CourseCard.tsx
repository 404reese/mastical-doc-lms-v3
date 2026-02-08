import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Clock, Globe } from 'lucide-react';
import type { Course } from '@/data/courses';

const CourseCard = ({ course }: { course: Course }) => {

    return (
        <div className="bg-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[320px_1fr] shadow-sm hover:-translate-y-1 transition-transform duration-300 border border-slate-100">
            <div className="relative h-64 lg:h-full w-full">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-8 flex flex-col h-full text-left">
                <h2 className="font-playfair font-bold text-2xl lg:text-[28px] text-[var(--blue-accent)] mb-3 leading-tight">
                    {course.title}
                </h2>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3">
                    {course.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[13px] font-semibold text-slate-800">
                            <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                            <span>{feature.label}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-auto flex justify-between items-center border-t border-slate-100 pt-5">
                    <div className="flex gap-5">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                            <Clock size={14} />
                            {course.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                            <Globe size={14} />
                            {course.language}
                        </div>
                    </div>

                    <Link
                        href={`/courses/${course.slug}`}
                        className="bg-[var(--blue-accent)] text-white px-6 py-3 rounded-md font-bold text-[13px] uppercase tracking-wide hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
