
import React from 'react';
import { PlayCircle } from 'lucide-react';
import type { Module } from '@/data/courses';

const Curriculum = ({ modules }: { modules?: Module[] }) => {
    if (!modules || modules.length === 0) return null;

    return (
        <section className="mb-[50px]">
            <h2 className="font-playfair text-[32px] text-[#1E293B] mb-6">Course Content</h2>
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                {modules.map((module, idx) => (
                    <details
                        key={idx}
                        className="border-b border-slate-200 last:border-b-0 group"
                        open={module.isOpen}
                    >
                        <summary className="p-5 flex justify-between items-center cursor-pointer font-bold text-[#1E293B] bg-[#fcfcfc] list-none select-none">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                <span>{module.title}</span>
                                <span className="text-xs font-normal text-slate-400 block sm:inline mt-1 sm:mt-0">
                                    {module.subtitle}
                                </span>
                            </div>
                            <span className="transform group-open:rotate-180 transition-transform duration-200">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </span>
                        </summary>
                        <div className="px-5 pb-5">
                            {module.lectures ? (
                                <div>
                                    {module.lectures.map((lecture, lIdx) => (
                                        <div key={lIdx} className="flex justify-between py-3 border-b border-dashed border-slate-200 last:border-b-0 text-sm">
                                            <div className="flex items-center gap-2.5">
                                                <PlayCircle size={16} className="text-slate-400" />
                                                <span>{lecture.title}</span>
                                            </div>
                                            <div className="text-slate-500">{lecture.duration}</div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="p-2.5 text-[13px] text-slate-500">{module.content}</p>
                            )}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default Curriculum;
