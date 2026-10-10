import type { Metadata } from "next";
import { ShieldCheck, Wheat, ClipboardCheck } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Calidad y Normativas",
  description:
    "Calidad de los alfajores artesanales Regional de Oberá, Misiones: fécula de mandioca naturalmente sin gluten, registros RNPA/RNE y control bromatológico.",
  alternates: { canonical: "/calidad" },
};

const items = [
  {
    icon: Wheat,
    title: "Base libre de gluten",
    text: "Nuestros alfajores se elaboran con fécula de mandioca, naturalmente libre de gluten. Consultanos por las variedades aptas para celíacos y su certificación Sin TACC vigente.",
    list: ["Fécula de mandioca misionera", "Procesos de limpieza controlados", "Consultá certificación vigente"],
  },
  {
    icon: ClipboardCheck,
    title: "Registros nacionales",
    text: "Alfajores, miel pura y mermelada de rosella elaborados conforme al Código Alimentario Argentino, con sus registros RNPA y RNE.",
    list: ["RNE — Misiones", "RNPA por producto", "Rotulado nutricional"],
  },
  {
    icon: ShieldCheck,
    title: "Trazabilidad local",
    text: "Trabajamos con productores de Misiones y controlamos cada lote, desde la chacra hasta la caja que llega a tu mesa.",
    list: ["Proveedores de la provincia", "Control por lote", "Elaboración en pequeñas tandas"],
  },
];

export default function Calidad() {
  return (
    <main className="min-h-screen bg-crema text-marron overflow-x-clip">
      <header className="relative bg-vino-deep text-crema pt-40 pb-24 text-center grain">
        <div className="relative z-10 max-w-3xl mx-auto px-4 animate-[fadeUp_0.9s_ease-out_both]">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-oro font-semibold block mb-4">
            Certificaciones y calidad
          </span>
          <h1 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
            Calidad en cada <span className="italic text-oro">alfajor artesanal</span>
          </h1>
          <p className="font-sans text-lg text-crema/75">
            En Regional nos tomamos muy en serio la calidad y la seguridad alimentaria. Cumplimos las normativas
            nacionales para llevar lo mejor de Oberá, Misiones, a tu mesa.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-3 gap-8">
        {items.map((it) => (
          <article
            key={it.title}
            className="bg-blanco rounded-2xl p-8 md:p-10 border border-marron/10 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-oro transition-all duration-500"
          >
            <span className="w-14 h-14 rounded-full bg-verde text-crema flex items-center justify-center mb-6">
              <it.icon className="w-6 h-6" />
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-vino mb-4">{it.title}</h2>
            <p className="font-sans text-marron/75 leading-relaxed mb-6">{it.text}</p>
            <ul className="space-y-2 font-sans text-sm text-verde">
              {it.list.map((l) => (
                <li key={l}>✓ {l}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
