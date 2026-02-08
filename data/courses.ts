
import { LucideIcon } from "lucide-react";

export interface CourseFeature {
    label: string;
}

export interface Lecture {
    title: string;
    duration: string;
    icon?: string;
}

export interface Module {
    title: string;
    subtitle: string;
    lectures?: Lecture[];
    content?: string;
    isOpen?: boolean;
}

export interface Instructor {
    name: string;
    role: string;
    bio: string;
    image: string;
}

export interface CoursePricing {
    current: string;
    original: string;
    discount: string;
    guarantee: string;
}

export interface CourseInclude {
    icon: string;
    label: string;
}

export interface Course {
    id: number;
    slug: string;
    title: string;
    intro: string;
    description: string;
    longDescription?: string[];
    descriptionFeatures?: string[];
    badge: string;
    badgeColor?: "certificate" | "specialization" | "fellowship" | "diploma";
    image: string;
    features: CourseFeature[];
    duration: string;
    type: string;
    typeIcon: "clock" | "graduation-cap" | "wifi" | "hospital";
    modules?: Module[];
    instructors?: Instructor[];
    pricing?: CoursePricing;
    includes?: CourseInclude[];
    language?: string;
}

export const COURSES: Course[] = [
    {
        id: 1,
        slug: "diploma-homeopathic-medicine",
        title: "Diploma in Homeopathic Medicine & Surgery",
        intro: "A comprehensive 4-year undergraduate journey combining traditional holistic wisdom with modern medical sciences. Build a prestigious career in alternative healthcare.",
        description: "A comprehensive program covering anatomy, materia medica, and clinical practice. This course establishes a robust foundation for becoming a licensed practitioner.",
        longDescription: [
            "The Diploma in Homeopathic Medicine & Surgery (DHMS) offers a deep dive into the principles of Homeopathy. This program is designed to create competent practitioners capable of addressing health challenges with natural, safe, and effective remedies.",
            "Throughout the course, students will gain extensive practical experience in clinical settings, engaging with real patients under expert supervision. From understanding Materia Medica to mastering Repertory and Surgery, the curriculum ensures a well-rounded medical education."
        ],
        descriptionFeatures: [
            "Clinical training from Year 1",
            "Expert faculty practitioners",
            "Modern research methodology",
            "Hospital rotations included",
        ],
        badge: "Diploma",
        badgeColor: "diploma",
        image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=600",
        features: [
            { label: "Materia Medica & Repertory" },
            { label: "Clinical Diagnostics" },
            { label: "Case Management" },
            { label: "Ethics & Jurisprudence" },
        ],
        duration: "4 Years",
        type: "Certification",
        typeIcon: "graduation-cap",
        modules: [
            {
                title: "Module 1: Foundations of Medicine",
                subtitle: "6 lectures • Year 1",
                isOpen: true,
                lectures: [
                    { title: "Anatomy & Physiology Basics", duration: "45:00" },
                    { title: "Introduction to Homeopathy Principles", duration: "01:15:00" },
                    { title: "Pharmacy & Pharmacology", duration: "55:00" },
                ]
            },
            {
                title: "Module 2: Pathology & Materia Medica",
                subtitle: "6 lectures • Year 2",
                content: "Content for Year 2 curriculum."
            },
            {
                title: "Module 3: Advanced Clinical Specialization",
                subtitle: "8 lectures • Year 3",
                content: "Content for Year 3 curriculum."
            }
        ],
        instructors: [
            {
                name: "Dr. Sarah Mitchell, MD (Hom)",
                role: "Senior Homeopathic Consultant & Educator",
                bio: "Dr. Mitchell is a renowned practitioner with over 15 years of experience in classical homeopathy. She has served as Head of Department at prestigious institutions.",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
            },
            {
                name: "Dr. James Carter, MD",
                role: "Guest Lecturer",
                bio: "Specialist in integrating modern pathology with homeopathic therapeutics. Bringing 10+ years of clinical excellence.",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
            }
        ],
        pricing: {
            current: "$120",
            original: "$4,500",
            discount: "97% off",
            guarantee: "30-Day Money-Back Guarantee"
        },
        includes: [
            { icon: "download", label: "Downloadable resources" },
            { icon: "infinity", label: "Full lifetime access" },
            { icon: "smartphone", label: "Access on mobile and TV" },
            { icon: "award", label: "Certificate of completion" }
        ],
        language: "English"
    },
    {
        id: 2,
        slug: "acute-prescribing-beginners",
        title: "Acute Prescribing for Beginners",
        intro: "Master the basics of homeopathy for everyday ailments. Perfect for home users and beginners.",
        description: "Start your journey with confidence. Learn the basics of acute case taking and remedy selection for common everyday ailments like colds, flu, and minor injuries.",
        longDescription: [
            "This course is designed to empower you with the knowledge to handle day-to-day health issues using safe and effective homeopathic remedies.",
            "Learn how to quickly select the right remedy for fever, injuries, colds, and more."
        ],
        badge: "Certificate",
        badgeColor: "certificate",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
        features: [
            { label: "Home First-Aid Kits" },
            { label: "Potency & Dosage" },
            { label: "Acute vs. Chronic" },
        ],
        duration: "6 Months",
        type: "Online",
        typeIcon: "wifi",
        instructors: [], // Placeholder
        pricing: {
            current: "$49",
            original: "$200",
            discount: "75% off",
            guarantee: "14-Day Money-Back Guarantee"
        },
        language: "English"
    },
    {
        id: 3,
        slug: "pediatric-homeopathy",
        title: "Pediatric Homeopathy",
        intro: "Specialized care for the little ones. Understanding child development through the lens of homeopathy.",
        description: "Master the delicate art of treating children. This specialized course focuses on constitutional types, growth milestones, and safe remedies for infants through adolescents.",
        badge: "Specialization",
        badgeColor: "specialization",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
        features: [
            { label: "Child Development" },
            { label: "Fevers & Teething" },
            { label: "Emotional Health" },
        ],
        duration: "1 Year",
        type: "Clinical",
        typeIcon: "hospital",
        pricing: {
            current: "$250",
            original: "$1,000",
            discount: "75% off",
            guarantee: "30-Day Money-Back Guarantee"
        },
        language: "English"
    },
    {
        id: 4,
        slug: "fellowship-clinical-homeopathy",
        title: "Fellowship in Clinical Homeopathy",
        intro: "Advanced training for established practitioners. Deepen your understanding of miasms and complex cases.",
        description: "Designed for existing practitioners looking to specialize. Engage in advanced clinical training, complex case management, and research methodologies.",
        badge: "Fellowship",
        badgeColor: "fellowship",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
        features: [
            { label: "Miasmatic Prescribing" },
            { label: "Autoimmune Protocols" },
            { label: "Peer Review" },
        ],
        duration: "2 Years",
        type: "Post-Grad",
        typeIcon: "graduation-cap",
        pricing: {
            current: "$4,500",
            original: "$6,000",
            discount: "25% off",
            guarantee: "30-Day Money-Back Guarantee"
        },
        language: "English"
    }
];

export const FILTERS = {
    level: ["Beginner", "Intermediate", "Advanced", "Post-Grad"],
    language: ["English", "Hindi", "French", "German", "Spanish"]
};
