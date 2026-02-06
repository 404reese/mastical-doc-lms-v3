import { HelpCircle, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VideoInfo() {
    return (
        <div className="p-8 md:p-12 max-w-4xl">
            <div className="mb-6">
                <h1 className="font-playfair text-3xl md:text-4xl text-blue-900 leading-tight mb-6">
                    Module 1.2: The Principles and Philosophy of Samuel Hahnemann
                </h1>
            </div>

            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
                    <Image
                        src="https://i.pravatar.cc/100?u=dr_sarah"
                        alt="Instructor"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="font-bold text-sm text-slate-800">
                    Dr. Sarah Mitchell, MD (Hom)
                </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
                <button className="px-7 py-3.5 bg-blue-900 text-white rounded-lg font-bold text-[13px] uppercase tracking-wide flex items-center gap-2.5 shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 hover:opacity-90 transition-all">
                    <HelpCircle size={18} /> Ask Question
                </button>
                <Link
                    href="#"
                    className="px-7 py-3.5 bg-white text-blue-900 border-2 border-blue-900 rounded-lg font-bold text-[13px] uppercase tracking-wide flex items-center gap-2.5 hover:-translate-y-0.5 hover:opacity-90 transition-all no-underline"
                >
                    <FileDown size={18} /> Download PDF Notes
                </Link>
            </div>

            <div className="border-t border-gray-200 pt-9 text-slate-600">
                <h3 className="font-playfair text-slate-800 text-2xl mb-4">
                    Lesson Overview
                </h3>
                <p className="mb-5 leading-7">
                    In this session, we delve into the foundational laws that define classical homeopathy. We will break down the 'Law of Similars' and discuss how Hahnemann’s experiments with Cinchona bark led to the creation of the Organon of Medicine.
                </p>
                <p className="leading-7">
                    We will also cover the transition from 'Heroic Medicine' to a holistic, vitalistic approach. It is essential to understand the mindset of 18th-century Europe to appreciate the radical shift homeopathy introduced.
                </p>
            </div>
        </div>
    );
}
