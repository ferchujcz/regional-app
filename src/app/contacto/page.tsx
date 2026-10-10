import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactate con Regional Alfajores. Estamos en Oberá, Misiones.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-crema selection:bg-vino-deep selection:text-crema font-sans overflow-x-clip">
      <PageHeader 
        eyebrow="Contacto"
        title={
          <>
            Comunicate con <span className="italic text-oro">nosotros</span>
          </>
        }
        crumb="Contacto"
        intro="Escribinos y te respondemos al instante."
      />
      <Contact />
      <Footer />
    </main>
  );
}
