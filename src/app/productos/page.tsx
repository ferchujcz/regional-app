import PageHeader from "@/components/PageHeader";
import Products from "@/components/Products";
import Ingredients from "@/components/Ingredients";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos",
  description: "Alfajores, mermelada de rosella y miel pura. Sabores auténticos de Misiones.",
};

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-crema selection:bg-vino-deep selection:text-crema font-sans overflow-x-clip">
      <PageHeader 
        eyebrow="Nuestros Productos"
        title={
          <>
            Sabores de la <span className="italic text-oro">tierra</span>
          </>
        }
        crumb="Productos"
        intro="Cada producto es elaborado cuidando cada detalle para ofrecerte la verdadera esencia de Oberá, Misiones."
      />
      <Products />
      <Ingredients />
      <Footer />
    </main>
  );
}
