
import React from 'react';
import type { Course } from '@/data/courses';
import Description from './Description';
import Curriculum from './Curriculum';
import Instructors from './Instructors';
import CourseSidebar from './CourseSidebar';

const CourseMainContent = ({ course }: { course: Course }) => {
    return (
        <main className="w-full">
            {/* Hero / Intro Header */}
            <div className="mb-10 lg:pr-10">
                <h1 className="font-playfair text-4xl sm:text-[48px] text-[var(--blue-accent)] leading-[1.1] mb-6">
                    {course.title}
                </h1>
                <p className="text-lg text-[#475569] leading-relaxed max-w-[650px] mb-10">
                    {course.intro}
                </p>
                <hr className="border-t border-slate-100 mb-10" />
            </div>

            {/* Mobile Sidebar (Visible only on mobile) */}
            <div className="lg:hidden mb-10">
                <CourseSidebar course={course} />
            </div>

            {/* Description Section */}
            <Description
                description={course.description}
                longDescription={course.longDescription}
                features={course.descriptionFeatures}
            />

            {/* Curriculum Section */}
            <Curriculum modules={course.modules} />

            {/* Instructors Section */}
            <Instructors instructors={course.instructors} />
        </main>
    );
};

export default CourseMainContent;
