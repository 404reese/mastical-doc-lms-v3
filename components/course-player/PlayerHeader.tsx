import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default function PlayerHeader() {
    return (
        <header className="h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-5 md:px-10 sticky top-0 z-50">
            {/* Left: Logo */}
            <div className="flex items-center">
                <Link href="/" className="flex items-center gap-2.5 no-underline">
                    <Image src="/main-logo.webp" alt="Logo" width={150} height={150} className="w-[140px] md:w-[160px] h-auto" />
                </Link>
            </div>

            {/* Right: User Profile Badge */}
            <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                    <div className="text-sm font-bold text-gray-800">John Doe</div>
                    <div className="text-xs text-gray-500 font-medium">Student</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm border-2 border-gray-100 shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
                    JD
                </div>
            </div>
        </header>
    );
}
