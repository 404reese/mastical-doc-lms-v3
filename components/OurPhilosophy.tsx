const philosophyCards = [
    {
        title: "Comprehensive Duration",
        description:
            "Each course runs for 4-5 months, enabling in-depth understanding and Structured concept development.",
        variant: "light",
        icon: (
            <svg
                className="hidden md:block absolute top-[30px] right-[35px] h-8 w-8 opacity-40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    {
        title: "Online & Hybrid Learning",
        description:
            "Courses are conducted online through live lectures, with a hybrid format that combine real-time learning and recorded access.",
        variant: "dark",
        icon: (
            <svg
                className="hidden md:block absolute top-[30px] right-[35px] h-8 w-8 opacity-60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
            >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        title: "Extended Recording Access",
        description:
            "Recordings of all live sessions remain available beyond the course duration allowing self-paced study and repeated revision.",
        variant: "light",
        icon: (
            <svg
                className="hidden md:block absolute top-[30px] right-[35px] h-8 w-8 opacity-40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
        ),
    },
    {
        title: "Multiple Expert Faculty",
        description:
            "Learn from multiple experienced speakers, gaining diverse clinical perspectives and practical insights.",
        variant: "light",
        icon: (
            <svg
                className="hidden md:block absolute top-[30px] right-[35px] h-8 w-8 opacity-40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: "Flexible for Practitioners",
        description:
            "Designed to support students and practicing clinicians, allowing learning to be balanced alongside studies or clinical work.",
        variant: "dark",
        icon: (
            <svg
                className="hidden md:block absolute top-[30px] right-[35px] h-8 w-8 opacity-60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
            >
                <polyline points="17 11 12 6 7 11" />
                <polyline points="17 18 12 13 7 18" />
            </svg>
        ),
    },
    {
        title: "Clinical Case-Based Learning",
        description:
            "Structured learning through detailed clinical case presentations, emphasizing case analysis, remedy selection, and practical decision-making.",
        variant: "light",
        icon: (
            <svg
                className="hidden md:block absolute top-[30px] right-[35px] h-8 w-8 opacity-40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
];

const OurPhilosophy = () => {
    return (
        <section className="px-[5%] pb-[80px] pt-[80px] text-[var(--para-color)]">
            <div className="mx-auto max-w-[1200px]">
                <div className="relative mb-[60px] max-w-[800px]">
                    <h2 className="mb-5 font-playfair text-[48px] font-medium text-[var(--blue-accent)] max-sm:text-[36px]">
                        Our Philosophy
                    </h2>
                    <div className="mb-[15px] font-playfair text-[20px] italic text-[#94a3b8]">
                        "To treat the patient, not merely the disease."
                    </div>
                    <p className="text-[16px] text-[#64748b]">
                        We bridge the gap between ancient botanical wisdom and contemporary practice, fostering intuition
                        alongside intellect.
                    </p>
                    <div className="absolute top-10 -right-[200px] hidden opacity-30 lg:block">
                        <svg
                            width="80"
                            height="96"
                            viewBox="0 0 80 96"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M40 81.334C35.9444 80.834 31.9167 79.7368 27.9167 78.0423C23.9167 76.3479 20.3472 73.9173 17.2083 70.7506C14.0694 67.584 11.5278 63.584 9.58332 58.7506C7.63888 53.9173 6.66666 48.1118 6.66666 41.334V38.0006H9.99999C12.8333 38.0006 15.75 38.3618 18.75 39.084C21.75 39.8062 24.5555 40.8895 27.1667 42.334C27.8333 37.5562 29.3472 32.6534 31.7083 27.6256C34.0694 22.5979 36.8333 18.2784 40 14.6673C43.1667 18.2784 45.9305 22.5979 48.2917 27.6256C50.6528 32.6534 52.1667 37.5562 52.8333 42.334C55.4444 40.8895 58.25 39.8062 61.25 39.084C64.25 38.3618 67.1667 38.0006 70 38.0006H73.3333V41.334C73.3333 48.1118 72.3611 53.9173 70.4167 58.7506C68.4722 63.584 65.9306 67.584 62.7917 70.7506C59.6528 73.9173 56.0972 76.3479 52.125 78.0423C48.1528 79.7368 44.1111 80.834 40 81.334ZM39.8333 74.5007C39.2222 65.2784 36.4861 58.3062 31.625 53.584C26.7639 48.8618 20.7222 45.9451 13.5 44.834C14.1111 54.334 16.9305 61.4173 21.9583 66.084C26.9861 70.7506 32.9444 73.5562 39.8333 74.5007ZM40 53.334C40.8333 52.1118 41.8472 50.8479 43.0417 49.5423C44.2361 48.2368 45.3889 47.1118 46.5 46.1673C46.3889 43.0006 45.7639 39.6951 44.625 36.2506C43.4861 32.8062 41.9444 29.4451 40 26.1673C38.0555 29.4451 36.5139 32.8062 35.375 36.2506C34.2361 39.6951 33.6111 43.0006 33.5 46.1673C34.6111 47.1118 35.7778 48.2368 37 49.5423C38.2222 50.8479 39.2222 52.1118 40 53.334ZM46.5 73.0007C48.5555 72.334 50.6944 71.3618 52.9167 70.084C55.1389 68.8062 57.2083 67.0701 59.125 64.8756C61.0417 62.6812 62.6806 59.9451 64.0417 56.6673C65.4028 53.3895 66.2222 49.4451 66.5 44.834C61.2778 45.6118 56.6944 47.3479 52.75 50.0423C48.8055 52.7368 45.7778 56.1673 43.6667 60.334C44.3333 62.1118 44.9028 64.0562 45.375 66.1673C45.8472 68.2784 46.2222 70.5562 46.5 73.0007Z"
                                fill="#A3B18A"
                            />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
                    {philosophyCards.map((card) => {
                        const isDark = card.variant === "dark";
                        return (
                            <div
                                key={card.title}
                                className={`relative flex min-h-[320px] flex-col justify-center rounded-[40px] p-10 transition-transform duration-300 hover:-translate-y-[5px] max-sm:min-h-0 max-sm:p-[30px] ${isDark
                                        ? "bg-[var(--card-dark)] text-[#cbd5e1] shadow-[0_20px_40px_rgba(31,48,139,0.2)]"
                                        : "bg-[var(--card-light)] text-[var(--para-color)]"
                                    }`}
                            >
                                {card.icon}
                                <h3
                                    className={`mb-[15px] font-playfair text-[24px] leading-[1.2] ${isDark ? "text-white" : "text-[var(--blue-accent)]"
                                        }`}
                                >
                                    {card.title}
                                </h3>
                                <p className="text-[15px] leading-[1.5]">{card.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurPhilosophy;
