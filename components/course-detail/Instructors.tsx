
import React from 'react';
import Image from 'next/image';
import type { Instructor } from '@/data/courses';

const Instructors = ({ instructors }: { instructors?: Instructor[] }) => {
    if (!instructors || instructors.length === 0) return null;

    return (
        <section className="mb-[50px]">
            <h2 className="font-playfair text-[32px] text-[#1E293B] mb-6">Instructor{instructors.length > 1 ? 's' : ''}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {instructors.map((inst, idx) => (
                    <div key={idx} className="bg-[#f8f6f0] p-8 md:p-10 rounded-[40px] text-center">
                        <div className="relative w-[120px] h-[120px] mx-auto mb-5 rounded-full overflow-hidden border-[5px] border-white shadow-sm">
                            <Image
                                src={inst.image}
                                alt={inst.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h4 className="font-playfair text-xl text-[var(--blue-accent)] font-bold underline decoration-2 decoration-[var(--blue-accent)]/20 underline-offset-4 mb-2.5">
                            {inst.name}
                        </h4>
                        <span className="block text-[13px] font-bold text-slate-600 mb-4 uppercase tracking-wide">
                            {inst.role}
                        </span>
                        <p className="text-[13px] leading-relaxed text-slate-600">
                            {inst.bio}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Instructors;
