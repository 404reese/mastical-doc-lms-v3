
import React from 'react';
import Link from 'next/link';
import { Play, Download, Infinity, Smartphone, Award, HelpCircle } from 'lucide-react';
import type { Course } from '@/data/courses';

const CourseSidebar = ({ course, className = "" }: { course: Course; className?: string }) => {
    if (!course.pricing) return null;

    return (
        <aside className={`lg:sticky lg:top-[120px] w-full max-w-[380px] mx-auto lg:mx-0 ${className}`}>
            <div className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-200">
                {/* Video Preview Area */}
                <div
                    className="relative h-[200px] bg-slate-900 flex items-center justify-center group cursor-pointer"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shadow-lg relative z-10 hover:scale-110 transition-transform">
                        <Play fill="#1F308B" className="text-[var(--blue-accent)] ml-1" size={24} />
                    </div>
                    <div className="absolute bottom-4 text-white text-xs font-bold text-center w-full drop-shadow-md">
                        Preview this course
                    </div>
                </div>

                <div className="p-[30px]">
                    {/* Pricing */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[32px] font-extrabold text-[#1E293B]">{course.pricing.current}</span>
                        <span className="text-lg text-slate-400 line-through decoration-slate-400/50">{course.pricing.original}</span>
                        <span className="text-[var(--accent-green)] font-bold">{course.pricing.discount}</span>
                    </div>

                    {/* Actions */}
                    <Link
                        href="#"
                        className="block w-full py-4 rounded-lg bg-[var(--blue-accent)] text-white text-center font-bold text-sm uppercase mb-3 hover:opacity-90 transition-opacity"
                    >
                        Apply Now
                    </Link>
                    <Link
                        href="#"
                        className="block w-full py-4 rounded-lg border border-slate-200 text-[#1E293B] text-center font-bold text-sm uppercase mb-6 hover:bg-slate-50 transition-colors"
                    >
                        Download Syllabus
                    </Link>

                    <p className="text-center text-xs text-slate-400 mb-[30px]">
                        {course.pricing.guarantee}
                    </p>

                    {/* Includes List */}
                    {course.includes && (
                        <div className="mb-6">
                            <h5 className="text-sm font-bold text-[#1E293B] mb-4">This course includes:</h5>
                            <div className="space-y-3">
                                {course.includes.map((inc, i) => {
                                    // Helper to get icon
                                    const getIcon = (name: string) => {
                                        switch (name) {
                                            case 'download': return <Download size={16} />;
                                            case 'infinity': return <Infinity size={16} />;
                                            case 'smartphone': return <Smartphone size={16} />;
                                            case 'award': return <Award size={16} />;
                                            default: return <Award size={16} />;
                                        }
                                    };

                                    return (
                                        <div key={i} className="flex items-center gap-3 text-[13px] text-slate-500">
                                            <span className="text-slate-400">{getIcon(inc.icon)}</span>
                                            {inc.label}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <Link href="#" className="flex justify-center items-center gap-2 pt-6 border-t border-slate-100 text-[13px] font-bold text-[var(--blue-accent)] underline hover:no-underline">
                        Have doubts? Talk to Our Team
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export default CourseSidebar;
