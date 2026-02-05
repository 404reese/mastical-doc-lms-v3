import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurPhilosophy from "@/components/OurPhilosophy";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-color)]">
      <Navbar />
      <Hero />
      <OurPhilosophy />
      <Courses />
      <Testimonials />
    </main>
  );
}
