import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Award, Play, Download, MessageCircle, Mail, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
    // Mock Data
    const courses = [
        {
            title: "Diploma in Homeopathic Medicine & Surgery (DHMS)",
            image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=600",
            progress: 68,
            resumeLabel: "Module 4"
        },
        {
            title: "Pediatric Homeopathy Specialization",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
            progress: 12,
            resumeLabel: "Introduction"
        }
    ];

    const certificates = [
        { title: "Acute Prescribing for Beginners", date: "October 12, 2023", grade: "A+" },
        { title: "Introductory Botanical Medicine", date: "August 05, 2023", grade: "A" }
    ];

    return (
        <main className="min-h-screen bg-[var(--bg-color)] font-inter">
            <Navbar />

            <div className="max-w-[1250px] mx-auto px-5 py-12 md:py-20">

                {/* User Meta / Welcome */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-gray-200 pb-8 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--blue-primary)] mb-3">My Dashboard</h1>
                        <p className="text-[var(--text-gray)] text-lg">Welcome back, Dr. Robert Fox</p>
                    </div>
                    
                </div>

                {/* Courses Section */}
                <section id="courses" className="mb-20">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="p-3 bg-blue-50 text-[var(--blue-primary)] rounded-xl">
                            <BookOpen className="w-6 h-6" />
                        </span>
                        <h2 className="font-playfair text-3xl md:text-4xl text-[var(--blue-primary)] font-bold">Enrolled Courses</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {courses.map((course, index) => (
                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-md group">
                                <div className="h-[240px] bg-cover bg-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${course.image}')` }}></div>
                                </div>
                                <div className="p-8">
                                    <h3 className="font-playfair text-2xl font-bold mb-4 text-[var(--foreground)] leading-tight min-h-[64px]">{course.title}</h3>
                                    <div className="mb-8">
                                        <div className="flex justify-between text-xs font-bold mb-2 text-[var(--text-gray)] uppercase tracking-wider">
                                            <span>Overall Progress</span><span>{course.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-out" style={{ width: `${course.progress}%` }}></div>
                                        </div>
                                    </div>
                                    <Link href="#" className="flex items-center justify-center gap-2.5 bg-[var(--blue-primary)] text-white py-4 px-6 rounded-xl font-bold text-sm tracking-wide uppercase hover:opacity-90 transition-opacity w-full">
                                        <Play className="w-4 h-4 fill-current" /> Resume: {course.resumeLabel}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certificates Section */}
                <section id="certificates" className="mb-20">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="p-3 bg-blue-50 text-[var(--blue-primary)] rounded-xl">
                            <Award className="w-6 h-6" />
                        </span>
                        <h2 className="font-playfair text-3xl md:text-4xl text-[var(--blue-primary)] font-bold">Earned Certificates</h2>
                    </div>

                    <div className="flex flex-col gap-5">
                        {certificates.map((cert, index) => (
                            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center border border-slate-100 shadow-sm hover:shadow-md transition-shadow gap-4 group">
                                <div>
                                    <h4 className="font-playfair text-xl font-bold mb-2 text-[var(--foreground)] group-hover:text-[var(--blue-primary)] transition-colors">{cert.title}</h4>
                                    <p className="text-sm text-[var(--text-gray)]">Completed on <span className="font-medium text-slate-700">{cert.date}</span> • Grade: <span className="font-bold text-green-600">{cert.grade}</span></p>
                                </div>
                                <Link href="#" className="text-[var(--blue-primary)] font-bold text-sm flex items-center gap-2 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                                    <Download className="w-4 h-4" /> Download PDF
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Help Section */}
                <section id="help">
                    <div className="bg-[var(--blue-primary)] text-white rounded-3xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

                        <div className="relative z-10">
                            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Need Assistance?</h2>
                            <p className="opacity-80 mb-8 font-inter text-lg leading-relaxed max-w-lg">Our academic support team is here to help you with course material, technical issues, or certification queries.</p>
                            <div className="text-sm font-semibold bg-white/10 inline-block px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                Response time: <span className="opacity-80 font-normal">Usually within 24 hours.</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 relative z-10">
                            {[
                                { icon: MessageCircle, label: "Chat with Academic Support" },
                                { icon: Mail, label: "Email Student Services" },
                                { icon: HelpCircle, label: "Browse Knowledge Base" }
                            ].map((item, i) => (
                                <Link key={i} href="#" className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-2xl flex items-center gap-4 font-semibold border border-white/20 transition-all hover:scale-[1.02] group">
                                    <span className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                        <item.icon className="w-5 h-5" />
                                    </span>
                                    <span className="text-lg">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </main>
    );
}
