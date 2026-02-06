"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import TopBar from "@/components/admin/TopBar";
import DashboardPanel from "@/components/admin/DashboardPanel";
import UsersPanel from "@/components/admin/UsersPanel";
import CoursesPanel from "@/components/admin/CoursesPanel";

export default function AdminPage() {
    const [activePanel, setActivePanel] = useState("dashboard");

    const getPanelTitle = () => {
        switch (activePanel) {
            case "dashboard":
                return "Dashboard Overview";
            case "users":
                return "User Management";
            case "courses":
                return "Course Catalog Manager";
            default:
                return "Dashboard";
        }
    };

    return (
        <div className="flex h-screen bg-[#FDFBF7] font-[family-name:var(--font-inter)] overflow-hidden">
            <Sidebar activePanel={activePanel} setActivePanel={setActivePanel} />

            <div className="flex-grow flex flex-col h-full overflow-hidden">
                <TopBar title={getPanelTitle()} />

                <main className="flex-grow overflow-y-auto p-10">
                    {activePanel === "dashboard" && <DashboardPanel />}
                    {activePanel === "users" && <UsersPanel />}
                    {activePanel === "courses" && <CoursesPanel />}
                </main>
            </div>
        </div>
    );
}
