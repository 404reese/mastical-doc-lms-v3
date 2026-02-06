"use client";

interface TopBarProps {
    title: string;
}

export default function TopBar({ title }: TopBarProps) {
    return (
        <div className="h-[70px] bg-white border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-10">
            <h1 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1F308B]">
                {title}
            </h1>
            <div className="flex items-center gap-4">
                <span className="font-semibold text-sm text-slate-700">Admin User</span>
                <div className="w-9 h-9 rounded-full bg-slate-200 border border-slate-300"></div>
            </div>
        </div>
    );
}
