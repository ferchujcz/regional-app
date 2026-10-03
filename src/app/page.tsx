import Hero from "@/components/Hero";
import Storytelling from "@/components/Storytelling";
import ReelsCarousel from "@/components/ReelsCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-crema selection:bg-vino-deep selection:text-crema font-sans overflow-hidden">
      <Hero />
      <Storytelling />
      <ReelsCarousel />
      <Footer />
    </main>
  );
}
