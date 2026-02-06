"use client";

import { Plus } from "lucide-react";
import { CourseModal } from "./AdminModals";
import { useState } from "react";

export default function CoursesPanel() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8">
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-slate-800">
                    Curriculum Management
                </h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#1F308B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#152266] transition-colors flex items-center gap-2 text-sm"
                >
                    <Plus size={18} />
                    Add New Course
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="text-left py-4 px-6 text-xs uppercase tracking-wide text-slate-500 font-semibold">Course Name</th>
                            <th className="text-left py-4 px-6 text-xs uppercase tracking-wide text-slate-500 font-semibold">Category</th>
                            <th className="text-left py-4 px-6 text-xs uppercase tracking-wide text-slate-500 font-semibold">Duration</th>
                            <th className="text-left py-4 px-6 text-xs uppercase tracking-wide text-slate-500 font-semibold">Students</th>
                            <th className="text-left py-4 px-6 text-xs uppercase tracking-wide text-slate-500 font-semibold">Price</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr>
                            <td className="py-4 px-6 text-sm font-semibold text-slate-800">Diploma in Homeopathic Medicine (DHMS)</td>
                            <td className="py-4 px-6 text-sm text-slate-600">Diploma</td>
                            <td className="py-4 px-6 text-sm text-slate-600">4 Years</td>
                            <td className="py-4 px-6 text-sm text-slate-600">450</td>
                            <td className="py-4 px-6 text-sm font-semibold text-slate-800">$120</td>
                        </tr>
                        <tr>
                            <td className="py-4 px-6 text-sm font-semibold text-slate-800">Acute Prescribing for Beginners</td>
                            <td className="py-4 px-6 text-sm text-slate-600">Certificate</td>
                            <td className="py-4 px-6 text-sm text-slate-600">6 Months</td>
                            <td className="py-4 px-6 text-sm text-slate-600">120</td>
                            <td className="py-4 px-6 text-sm font-semibold text-slate-800">$45</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <CourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
