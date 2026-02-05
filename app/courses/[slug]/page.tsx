
import React from 'react';
import { notFound } from 'next/navigation';
import { COURSES } from '@/data/courses';
import CourseMainContent from '@/components/course-detail/CourseMainContent';
import CourseSidebar from '@/components/course-detail/CourseSidebar';
import Link from 'next/link';

// Helper to generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = COURSES.find(c => c.slug === slug);

    if (!course) {
        return {
            title: 'Course Not Found',
        };
    }

    return {
        title: `${course.title} | Academy of Classical Homeopathy`,
        description: course.description,
    };
}

const CourseDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const course = COURSES.find(c => c.slug === slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#FDFBF7F2]">
            <div className="max-w-[1250px] mx-auto px-5 py-10">
                {/* Breadcrumbs */}
                <nav className="text-[13px] text-slate-400 mb-[30px] flex items-center gap-2">
                    <Link href="/" className="hover:text-[var(--blue-accent)] transition-colors">Home</Link>
                    <span>&rsaquo;</span>
                    <Link href="/courses" className="hover:text-[var(--blue-accent)] transition-colors">Courses</Link>
                    <span>&rsaquo;</span>
                    <span className="text-slate-600 font-medium truncate max-w-[200px] sm:max-w-none">{course.title}</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-[60px] items-start">
                    <CourseMainContent course={course} />
                    <CourseSidebar course={course} className="hidden lg:block" />
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;
