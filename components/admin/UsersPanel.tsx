"use client";

import { UserPlus } from "lucide-react";
import { UserModal } from "./AdminModals";
import { useState } from "react";

export default function UsersPanel() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8">
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-slate-800">
                    Users Registry
                </h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#1F308B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#152266] transition-colors flex items-center gap-2 text-sm"
                >
                    <UserPlus size={18} />
                    Create User
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="text-left py-4 px-6 text-xs uppercase tracking-wide text-slate-500 font-semibold">User Name</th>
                            <th className="text-left py-4 px-6 text-xs uppercase tracking-wide text-slate-500 font-semibold">Email</th>
                            <th className="text-left py-4 px-6 text-xs uppercase tracking-wide text-slate-500 font-semibold">Status</th>
                            <th className="text-left py-4 px-6 text-xs uppercase tracking-wide text-slate-500 font-semibold">Course Access</th>
                            <th className="text-left py-4 px-6 text-xs uppercase tracking-wide text-slate-500 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr>
                            <td className="py-4 px-6 text-sm font-semibold text-slate-800">Dr. Sarah Mitchell</td>
                            <td className="py-4 px-6 text-sm text-slate-600">sarah.m@homeo.edu</td>
                            <td className="py-4 px-6">
                                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-green-100 text-green-800">
                                    Active
                                </span>
                            </td>
                            <td className="py-4 px-6 text-sm">
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-[#1F308B]">DHMS</span>
                                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-[#1F308B]">Pediatrics</span>
                                </div>
                            </td>
                            <td className="py-4 px-6">
                                <button className="text-[#1F308B] font-bold text-sm hover:underline">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4 px-6 text-sm font-semibold text-slate-800">James Wilson</td>
                            <td className="py-4 px-6 text-sm text-slate-600">j.wilson@gmail.com</td>
                            <td className="py-4 px-6">
                                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-yellow-100 text-yellow-800">
                                    Pending
                                </span>
                            </td>
                            <td className="py-4 px-6 text-sm">
                                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-[#1F308B]">Beginners Acute</span>
                            </td>
                            <td className="py-4 px-6">
                                <button className="text-[#1F308B] font-bold text-sm hover:underline">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
