import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurPhilosophy from "@/components/OurPhilosophy";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import ResidencySection from "@/components/ResidencySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-color)]">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <OurPhilosophy />
        <Courses />
        <Testimonials />
        <ResidencySection />
        <FAQSection />
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
