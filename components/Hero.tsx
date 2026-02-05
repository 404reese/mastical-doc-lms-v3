import Link from "next/link";

const Hero = () => {
    return (
        <section className="text-center pt-20 px-[5%] pb-[80px] max-w-[1100px] mx-auto">
            <div className="flex items-center justify-center gap-[15px] text-[14px] tracking-[3px] text-[#1E293B] mb-[30px] font-medium font-inter">
                <div className="h-[1px] w-[50px] bg-[#cbd5e1]"></div>
                WELCOME TO
                <div className="h-[1px] w-[50px] bg-[#cbd5e1]"></div>
            </div>

            <h1 className="font-playfair text-[clamp(48px,9vw,100px)] leading-[1.1] mb-[30px] font-normal">
                <span className="text-[#1F308B]">Academy of</span> <br className="md:hidden" />
                <span className="italic md:whitespace-nowrap text-[#0F172A]">Classical Homeopathy</span>
            </h1>

            <p className="text-[clamp(16px,2vw,20px)] text-[#475569] max-w-[850px] mx-auto mb-[40px] leading-[1.6] font-inter">
                Led by Dr. Gaurang Gaikwad, offers clinically focused education across
                key specialties, along with advanced training in miasms, nosodes,
                sarcodes, and complex concepts. Blending classical and contemporary
                approaches, it provides evolving courses and short-term in-clinic
                observership programs.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[30px]">
                <Link
                    href="/courses"
                    className="bg-[#1F308B] text-white no-underline px-[40px] py-[18px] rounded-[50px] font-semibold text-[14px] shadow-[0_10px_15px_-3px_rgba(31,48,139,0.3)] font-inter hover:opacity-90 transition-opacity"
                >
                    EXPLORE COURSES
                </Link>
                <Link
                    href="#manifesto"
                    className="text-[#1F308B] font-semibold text-[14px] flex items-center gap-[8px] no-underline font-inter hover:opacity-80 transition-opacity"
                >
                    HOW TO USE COURSES &rarr;
                </Link>
            </div>
        </section>
    );
};

export default Hero;
