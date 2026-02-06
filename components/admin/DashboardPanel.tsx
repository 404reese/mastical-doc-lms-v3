"use client";

import { ShieldCheck, BookOpen, Users } from "lucide-react";

export default function DashboardPanel() {
    const stats = [
        { label: "Admins", value: "04", icon: ShieldCheck },
        { label: "Courses", value: "12", icon: BookOpen },
        { label: "Total Users", value: "1,240", icon: Users },
    ];

    return (
        <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] flex items-center gap-5">
                        <div className="w-[60px] h-[60px] rounded-xl bg-[#1F308B]/5 text-[#1F308B] flex items-center justify-center">
                            <stat.icon size={28} />
                        </div>
                        <div>
                            <h3 className="text-[13px] text-slate-500 uppercase tracking-widest font-semibold">
                                {stat.label}
                            </h3>
                            <p className="text-3xl font-bold text-slate-800 mt-1">
                                {stat.value}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
