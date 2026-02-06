"use client";

import Image from "next/image";
import { LayoutDashboard, Users, BookOpen, LogOut } from "lucide-react";

interface SidebarProps {
    activePanel: string;
    setActivePanel: (panel: string) => void;
}

export default function Sidebar({ activePanel, setActivePanel }: SidebarProps) {
    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "users", label: "Manage Users", icon: Users },
        { id: "courses", label: "Manage Courses", icon: BookOpen },
    ];

    return (
        <div className="w-[260px] bg-[#1F308B] text-white flex flex-col py-8 shrink-0 h-screen overflow-y-auto">
            <div className="px-6 pb-10 mb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <Image
                        src="/main-logo.webp"
                        alt="ACH Logo"
                        width={200}
                        height={200}
                        className="w-40 h-auto object-contain brightness-0 invert"
                    />
                    
                </div>
            </div>

            <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActivePanel(item.id)}
                        className={`
              w-full px-6 py-4 flex items-center gap-3 cursor-pointer transition-all duration-300
              font-medium text-sm text-white/70 hover:bg-white/10 hover:text-white
              ${activePanel === item.id ? "bg-white/10 text-white border-r-4 border-white" : ""}
            `}
                    >
                        <item.icon size={20} />
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="mt-auto pt-8">
                <button className="w-full px-6 py-4 flex items-center gap-3 cursor-pointer transition-all duration-300 font-medium text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </div>
    );
}
