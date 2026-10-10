import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Storytelling from "@/components/Storytelling";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conocé la historia de Regional. Alfajores artesanales de Oberá, Misiones.",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-crema selection:bg-vino-deep selection:text-crema font-sans overflow-x-clip">
      <PageHeader 
        eyebrow="Nuestra Esencia"
        title={
          <>
            Nacidos en <span className="italic text-oro">Misiones</span>
          </>
        }
        crumb="Nosotros"
        intro="Una historia que empieza en la tierra colorada de Oberá."
      />
      <About />
      <Storytelling />
      <WhyUs />
      <Footer />
    </main>
  );
}
