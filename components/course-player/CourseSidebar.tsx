import { ChevronDown, PlayCircle, BookText, Lock, CheckCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CourseSidebar() {
    return (
        <aside className="bg-white border-l border-gray-200 flex flex-col h-full overflow-hidden">
            {/* Progress Bar Container */}
            <div className="p-6 bg-slate-50 border-b border-gray-200">
                <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-blue-900 transition-colors mb-5 no-underline"
                >
                    <ChevronLeft size={14} /> Back to Dashboard
                </Link>

                <div className="flex justify-between text-xs font-bold text-blue-900 uppercase tracking-wide mb-2.5">
                    <span>Overall Course Progress</span>
                    <span>65%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[65%] rounded-full"></div>
                </div>
            </div>

            <div className="p-5 border-b border-gray-200">
                <h2 className="font-playfair text-lg text-slate-800 font-bold leading-tight">
                    Diploma in Homeopathic Medicine & Science
                </h2>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {/* Module 1 */}
                <details className="group border-b border-slate-100" open>
                    <summary className="p-5 cursor-pointer list-none bg-white flex justify-between items-center font-bold text-sm hover:bg-slate-50 transition-colors">
                        Module 1: Foundations & History
                        <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="bg-[#fcfcfc]">
                        <div className="p-4 px-6 flex items-center gap-4 text-[13px] text-slate-500 cursor-pointer border-b border-gray-50 hover:bg-slate-100 hover:text-blue-900 transition-colors">
                            <CheckCircle size={16} className="text-green-500" />
                            1.1 Course Orientation
                        </div>
                        <div className="p-4 px-6 flex items-center gap-4 text-[13px] text-blue-900 font-bold bg-blue-50 border-l-4 border-blue-900 cursor-pointer border-b border-gray-50">
                            <PlayCircle size={16} />
                            1.2 Hahnemann's Principles
                        </div>
                        <div className="p-4 px-6 flex items-center gap-4 text-[13px] text-slate-500 cursor-pointer border-b border-gray-50 hover:bg-slate-100 hover:text-blue-900 transition-colors">
                            <BookText size={16} className="opacity-50" />
                            1.3 Reading: The Organon §1-10
                        </div>
                        <div className="p-4 px-6 flex items-center gap-4 text-[13px] text-slate-500 cursor-pointer border-b border-gray-50 hover:bg-slate-100 hover:text-blue-900 transition-colors">
                            <PlayCircle size={16} className="opacity-50" />
                            1.4 The Concept of Vital Force
                        </div>
                    </div>
                </details>

                {/* Module 2 */}
                <details className="group border-b border-slate-100">
                    <summary className="p-5 cursor-pointer list-none bg-white flex justify-between items-center font-bold text-sm hover:bg-slate-50 transition-colors">
                        Module 2: Basic Materia Medica
                        <ChevronDown size={14} className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="bg-[#fcfcfc]">
                        <div className="p-4 px-6 flex items-center gap-4 text-[13px] text-slate-500 cursor-pointer border-b border-gray-50 hover:bg-slate-100 hover:text-blue-900 transition-colors">
                            <PlayCircle size={16} className="opacity-50" />
                            2.1 Intro to Provings
                        </div>
                        <div className="p-4 px-6 flex items-center gap-4 text-[13px] text-slate-500 cursor-pointer border-b border-gray-50 hover:bg-slate-100 hover:text-blue-900 transition-colors">
                            <PlayCircle size={16} className="opacity-50" />
                            2.2 Study of Aconite & Belladonna
                        </div>
                    </div>
                </details>

                {/* Module 3 */}
                <details className="group border-b border-slate-100">
                    <summary className="p-5 cursor-pointer list-none bg-white flex justify-between items-center font-bold text-sm hover:bg-slate-50 transition-colors">
                        Module 3: Pharmacy
                        <Lock size={14} className="opacity-50" />
                    </summary>
                    <div className="bg-[#fcfcfc]">
                        <div className="p-4 px-6 flex items-center gap-4 text-[13px] text-slate-400 cursor-pointer border-b border-gray-50 opacity-60">
                            <Lock size={16} />
                            3.1 Dilution & Potentization
                        </div>
                    </div>
                </details>
            </div>
        </aside>
    );
}
