import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería",
  description: "Conocé cómo elaboramos nuestros alfajores desde adentro.",
};

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-crema selection:bg-vino-deep selection:text-crema font-sans overflow-x-clip">
      <PageHeader 
        eyebrow="Detrás de Escena"
        title={
          <>
            Nuestro <span className="italic text-oro">taller</span>
          </>
        }
        crumb="Galería"
        intro="Explorá cómo vivimos la experiencia de producir los mejores sabores de Misiones."
      />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
