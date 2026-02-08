
"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { COURSES, FILTERS } from '@/data/courses';
import { Search, ChevronRight, Calendar } from 'lucide-react';
import Testimonials from '@/components/Testimonials';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] font-inter text-[var(--para-color)]">
      <Navbar />

      <div className="max-w-[1300px] mx-auto px-5 py-10">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[60px] pb-[30px] border-b border-[rgba(0,0,0,0.05)] gap-5">
          <div className="md:max-w-xl">
            <h1 className="font-playfair font-bold text-[42px] text-[var(--blue-accent)] mb-2 leading-tight">
              Course Catalog
            </h1>
            <p className="text-[15px] text-[var(--para-color)]">
              Accredited education for aspiring healers and medical professionals. Browse our curriculum below.
            </p>
          </div>

          <div className="relative w-full md:w-[350px]">
            <Search className="absolute left-[15px] top-1/2 -translate-y-1/2 text-slate-400 w-[18px]" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-[45px] pr-[15px] py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[var(--blue-accent)] focus:ring-1 focus:ring-[var(--blue-accent)] transition-all placeholder:text-slate-400"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-12 h-fit space-y-[25px]">
            {/* Filter Header */}
            <div className="flex justify-between items-center">
              <h2 className="font-playfair font-bold text-2xl text-[var(--blue-accent)]">Filters</h2>
              <button className="text-sm font-medium text-slate-400 hover:text-[var(--blue-accent)] transition-colors">
                All
              </button>
            </div>

            {/* Level Filter */}
            <div className="bg-white rounded-xl p-6 shadow-[var(--card-shadow)] border-t-[3px] border-[var(--blue-accent)]">
              <h3 className="font-playfair font-bold text-xl text-[var(--blue-accent)] mb-5">Level</h3>
              <div className="flex flex-col gap-3">
                {FILTERS.level.map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2.5 text-sm font-medium text-[var(--title-black)] cursor-pointer hover:opacity-80 transition-opacity">
                    <input type="checkbox" className="w-4 h-4 accent-[var(--blue-accent)] rounded border-slate-300" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Language Filter */}
            <div className="bg-white rounded-xl p-6 shadow-[var(--card-shadow)] border-t-[3px] border-[var(--blue-accent)]">
              <h3 className="font-playfair font-bold text-xl text-[var(--blue-accent)] mb-5">Language</h3>
              <div className="flex flex-col gap-3">
                {FILTERS.language.map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2.5 text-sm font-medium text-[var(--title-black)] cursor-pointer hover:opacity-80 transition-opacity">
                    <input type="checkbox" className="w-4 h-4 accent-[var(--blue-accent)] rounded border-slate-300" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Promo Card */}
            <div className="bg-[var(--blue-accent)] text-white p-[30px_20px] rounded-xl text-center">
              <Calendar className="mx-auto mb-4 opacity-90 w-10 h-10" />
              <h4 className="font-playfair font-bold text-[22px] mb-3">Upcoming Webinars</h4>
              <p className="text-[13px] mb-5 opacity-80">Join our free introductory sessions starting next week.</p>
              <a href="#" className="inline-block bg-white text-[var(--blue-accent)] px-5 py-2.5 rounded-[5px] font-bold text-xs uppercase hover:bg-opacity-90 transition-all">
                View Schedule
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            <div className="flex flex-col gap-[30px]">
              {COURSES.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-[60px] flex justify-center gap-2.5">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-md text-[var(--para-color)] font-semibold hover:bg-slate-50 transition-colors">1</a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[var(--blue-accent)] border border-[var(--blue-accent)] rounded-md text-white font-semibold shadow-sm">2</a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-md text-[var(--para-color)] font-semibold hover:bg-slate-50 transition-colors">3</a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-md text-[var(--para-color)] font-semibold hover:bg-slate-50 transition-colors">
                <ChevronRight size={16} />
              </a>
            </div>

          </main>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <Testimonials />
        </div>
      </div>

      <Footer />
    </div>
  );
}