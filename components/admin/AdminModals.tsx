"use client";

import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    actionText: string;
    onAction: () => void;
}

export function Modal({ isOpen, onClose, title, children, actionText, onAction }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white p-10 rounded-2xl w-full max-w-[500px] shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-6 text-[#1F308B]">
                    {title}
                </h2>

                {children}

                <div className="flex gap-3 mt-8">
                    <button
                        onClick={onAction}
                        className="flex-1 bg-[#1F308B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#152266] transition-colors"
                    >
                        {actionText}
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-slate-100 text-slate-800 py-3 px-6 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export function UserModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Create New User" actionText="Create Account" onAction={onClose}>
            <div className="space-y-5">
                <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#1F308B]" />
                </div>
                <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#1F308B]" />
                </div>
                <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Give Course Access</label>
                    <select multiple className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#1F308B] h-20">
                        <option>DHMS Diploma</option>
                        <option>Acute Prescribing</option>
                        <option>Pediatric Specialization</option>
                        <option>Clinical Fellowship</option>
                    </select>
                    <small className="text-[10px] text-slate-400">Hold Ctrl/Cmd to select multiple</small>
                </div>
            </div>
        </Modal>
    );
}

export function CourseModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Course" actionText="Publish Course" onAction={onClose}>
            <div className="space-y-5">
                <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Course Title</label>
                    <input type="text" placeholder="e.g. Masterclass in Repertory" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#1F308B]" />
                </div>
                <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Level / Category</label>
                    <select className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#1F308B]">
                        <option>Diploma</option>
                        <option>Certificate</option>
                        <option>Specialization</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Price ($)</label>
                    <input type="number" placeholder="99" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#1F308B]" />
                </div>
            </div>
        </Modal>
    );
}
