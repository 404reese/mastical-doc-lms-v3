import React from "react";
import PlayerHeader from "./PlayerHeader";
import VideoPlayer from "./VideoPlayer";
import VideoInfo from "./VideoInfo";
import CourseSidebar from "./CourseSidebar";

export default function CoursePlayerLayout() {
    return (
        <div className="min-h-screen bg-[#FDFBF7F2] flex flex-col font-inter">
            <PlayerHeader />

            <main className="grid grid-cols-1 lg:grid-cols-[1fr_380px] flex-1 lg:h-[calc(100vh-70px)] overflow-hidden">

                {/* Left Side: Video & Content */}
                <div className="flex flex-col overflow-y-auto bg-[#FDFBF7F2] custom-scrollbar">
                    <VideoPlayer />
                    <VideoInfo />
                </div>

                {/* Right Side: Sidebar */}
                <div className="w-full lg:w-[380px] lg:h-full border-t lg:border-t-0 lg:border-l border-gray-200">
                    <CourseSidebar />
                </div>

            </main>
        </div>
    );
}
