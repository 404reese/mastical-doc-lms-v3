import { Play } from "lucide-react";
import Image from "next/image";

export default function VideoPlayer() {
    return (
        <div className="w-full bg-black relative flex items-center justify-center shrink-0 h-[400px] lg:h-[580px]">
            {/* Mock Video Image */}
            <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1400"
                alt="Video Preview"
                fill
                className="object-cover opacity-70"
            />

            {/* Play Button Overlay */}
            <div className="absolute w-[85px] h-[85px] bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-white/25 border border-white/30 z-10 group">
                <Play
                    fill="white"
                    stroke="none"
                    size={38}
                    className="group-hover:scale-110 transition-transform duration-300"
                />
            </div>
        </div>
    );
}
