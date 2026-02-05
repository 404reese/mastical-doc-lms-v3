import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurPhilosophy from "@/components/OurPhilosophy";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-color)]">
      <Navbar />
      <Hero />
      <OurPhilosophy />
    </main>
  );
}
