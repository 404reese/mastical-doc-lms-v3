"use client";

import React from 'react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        quote: "Goin fantastically....thanks alot Dr gaurang sir for opting this kind of sessions....i learned alot and improved my day to day practice....hope we will continue this same nd improving ourself...your are really working hard nd we wish you a very good luck...keep it up and enthusiast us by sharing your knowledge and wonderfully treated successful cases..Thank you",
        author: "Dr Sameer lohar",
    },
    {
        quote: "Homeopaediatric  course  gave  me  many  insights  ... for  study  . It  helped  me  to  get  confidence  to  treat  needy  .Most  important  is  I  could  meet  so  many  great  homeopaths  ,all  across  world  .  so  , both  as  a  new  learner  and  as  a  human  being  also  ..I'm  growing , improving  ,evolving  ....Thanks  a  lot",
        author: "Nisha Sagar Katkar",
    },
    {
        quote: "This course is such an eye opener for me very grateful for gaurang sir who has created this ideas and stuffs got to know many doctors worldwide learnt many techniques,answers, methodology and so on..i am really looking forward to attend more classes from this amazing group.A big thank you sir and the team.",
        author: "Subashine",
    },
    {
        quote: "Class was extraordinary.. Really impressed with practical tips of Dr.Gaurang sir.. Identifying personality wth nook and corners of minute details.This we can't get from any book's.. Especially Blocked cases of Autism ,Auto immune disease etc..Miasm plays a major role..I can see the difference in my practice day to day.Looking forward for more courses..I am not satisfied with foreign lectures compared to Indian lectures..So much Impressed with Dr .Gaurang ..Becoming a fan for his knowledge..",
        author: "Dr Aswini",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [fade, setFade] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 2) % TESTIMONIALS.length);
                setFade(true);
            }, 500); // Wait for fade out
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Get current 2 testimonials
    const currentTestimonials = [
        TESTIMONIALS[currentIndex % TESTIMONIALS.length],
        TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length]
    ];

    return (
        <section className="py-20 bg-[var(--bg-color)]">
            <div className="max-w-[1000px] mx-auto px-5 text-center">
                {/* Header */}
                <div className="flex flex-col items-center mb-16">
                    <Quote size={48} className="text-[#fce7d2] mb-4 fill-[#fce7d2]" />
                    <h2 className="font-playfair font-normal text-[32px] tracking-[0.1em] text-[var(--blue-accent)] uppercase">
                        Testimonials
                    </h2>
                </div>

                {/* Grid - 2 Columns Side by Side */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-left transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    {currentTestimonials.map((testimonial, idx) => (
                        <div key={idx}>
                            <p className="font-inter italic text-[15px] leading-relaxed text-[var(--para-color)] mb-6 opacity-80 min-h-[80px]">
                                "{testimonial.quote}"
                            </p>
                            <h4 className="font-bold text-sm text-[var(--title-black)]">
                                — {testimonial.author}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
