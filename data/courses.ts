
import { LucideIcon } from "lucide-react";

export interface CourseFeature {
    label: string;
}

export interface Course {
    id: number;
    title: string;
    description: string;
    badge: string;
    badgeColor?: "certificate" | "specialization" | "fellowship" | "diploma";
    image: string;
    features: CourseFeature[];
    duration: string;
    type: string;
    typeIcon: "clock" | "graduation-cap" | "wifi" | "hospital";
}

export const COURSES: Course[] = [
    {
        id: 1,
        title: "Homeopathic Medicine & Surgery (DHMS)",
        description: "A comprehensive program covering anatomy, materia medica, and clinical practice. This course establishes a robust foundation for becoming a licensed practitioner.",
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
        typeIcon: "graduation-cap"
    },
    {
        id: 2,
        title: "Acute Prescribing for Beginners",
        description: "Start your journey with confidence. Learn the basics of acute case taking and remedy selection for common everyday ailments like colds, flu, and minor injuries.",
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
        typeIcon: "wifi"
    },
    {
        id: 3,
        title: "Pediatric Homeopathy",
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
        typeIcon: "hospital"
    },
    {
        id: 4,
        title: "Fellowship in Clinical Homeopathy",
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
        typeIcon: "graduation-cap"
    }
];

export const FILTERS = {
    level: ["Beginner", "Intermediate", "Advanced", "Post-Grad"],
    topic: ["Materia Medica", "Clinical Practice", "Pediatrics", "Research"]
};
