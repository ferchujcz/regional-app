"use client";

import { motion } from "framer-motion";
import { Wheat, Leaf, Droplets, Cookie, Sparkles } from "lucide-react";

const layers = [
  {
    step: "01",
    role: "La Masa",
    title: "Fécula de Mandioca",
    origin: "Chacras de Misiones",
    desc: "La base de nuestra textura inconfundible: liviana, suave y libre de gluten por naturaleza. Amasada en pequeñas tandas para lograr que cada bocado se deshaga suavemente.",
    tasting: "Suavidad aérea · Sin TACC",
    Icon: Wheat,
  },
  {
    step: "02",
    role: "El Carácter",
    title: "Yerba Mate",
    origin: "Zona Centro · Oberá",
    desc: "El alma de Misiones infusionada en nuestras tapas. Un toque herbal sutil y noble que despierta los sentidos y equilibra la dulzura del relleno.",
    tasting: "Notas herbales · Identidad local",
    Icon: Leaf,
  },
  {
    step: "03",
    role: "El Aroma",
    title: "Miel Pura de Monte",
    origin: "Apiarios Misioneros",
    desc: "El oro líquido de nuestros montes nativos. Aporta humedad natural a la masa, brillo propio y un perfume floral imposible de replicar con azúcares refinados.",
    tasting: "Dulzor floral · 100% Natural",
    Icon: Droplets,
  },
  {
    step: "04",
    role: "El Corazón",
    title: "Dulce de Leche",
    origin: "Tradición Argentina",
    desc: "Un centro generoso, cremoso e intenso que une las tapas de mandioca y yerba mate en un equilibrio perfecto de textura y sabor.",
    tasting: "Cremosidad intensa · Relleno abundante",
    Icon: Cookie,
  },
  {
    step: "05",
    role: "La Corona",
    title: "Merengue Italiano",
    origin: "Terminación Artesanal",
    desc: "El baño clásico que sella nuestra receta: una fina capa blanca, crujiente por fuera y tierna por dentro, aplicada cuidando cada detalle en nuestro taller.",
    tasting: "Corteza crujiente · Sello artesanal",
    Icon: Sparkles,
  },
];

export default function Storytelling() {
  return (
    <section className="relative py-24 md:py-32 bg-crema-dark overflow-hidden grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-verde font-semibold block mb-4">
            Anatomía de Nuestro Alfajor
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-vino-deep mb-6 leading-tight">
            Nuestra <span className="italic text-verde font-normal">Esencia</span>, capa por capa
          </h2>
          <p className="text-lg md:text-xl font-sans text-marron/80 leading-relaxed">
            Cada bocado es un viaje a Misiones. En lugar de fórmulas industriales, combinamos cinco elementos nobles de nuestra tierra para crear una experiencia única desde el primer corte.
          </p>
        </div>

        {/* Architectural / Timeline Anatomy — No empty square cards */}
        <div className="relative">
          {/* Vertical connecting line on desktop */}
          <div className="hidden lg:block absolute left-[240px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-vino/30 via-oro to-verde/30" />

          <div className="space-y-12 lg:space-y-0">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start lg:py-10 border-b border-marron/10 last:border-b-0 group"
              >
                {/* Step & Role (Left of timeline) */}
                <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start items-center lg:items-start lg:pr-8">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl md:text-4xl font-bold text-vino/80 group-hover:text-vino transition-colors">
                      {layer.step}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-verde bg-crema px-3 py-1 rounded-full border border-marron/10">
                      {layer.role}
                    </span>
                  </div>
                  <span className="font-sans text-xs text-marron/60 uppercase tracking-widest mt-0 lg:mt-3">
                    {layer.origin}
                  </span>
                </div>

                {/* Timeline Node Icon + Title & Description */}
                <div className="lg:col-span-6 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-crema border-2 border-oro text-vino-deep flex items-center justify-center shrink-0 shadow-md group-hover:bg-vino group-hover:text-crema group-hover:border-vino transition-all duration-300 relative z-10">
                    <layer.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-vino-deep mb-2 group-hover:text-verde transition-colors">
                      {layer.title}
                    </h3>
                    <p className="font-sans text-base md:text-lg text-marron/80 leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </div>

                {/* Sensory note pill (Right column) */}
                <div className="lg:col-span-3 lg: flex lg:justify-end items-center self-center pl-17 lg:pl-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-crema/70 border border-marron/10 text-xs font-sans font-semibold uppercase tracking-wider text-verde">
                    <span className="w-2 h-2 rounded-full bg-oro" />
                    <span>{layer.tasting}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
