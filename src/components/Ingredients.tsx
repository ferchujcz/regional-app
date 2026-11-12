"use client";

import { motion } from "framer-motion";
import { Wheat, Leaf, Droplets, Cookie, Sparkles, CheckCircle2 } from "lucide-react";

const ingredients = [
  {
    number: "01",
    name: "Fécula de Mandioca",
    origin: "Cultivos de la Tierra Colorada · Misiones",
    badge: "Libre de Gluten",
    description:
      "La base ancestral de nuestra receta. Le otorga a cada tapa esa textura inconfundible, liviana y suave que se deshace en el paladar, honrando las raíces productivas de nuestra región.",
    notes: ["Textura extra suave", "Naturalmente Sin TACC", "Productores locales"],
    Icon: Wheat,
    accentText: "text-vino",
    iconBg: "bg-oro/15 text-marron border-oro/40",
  },
  {
    number: "02",
    name: "Yerba Mate Misionera",
    origin: "Secaderos Tradicionales · Zona Centro",
    badge: "Identidad Regional",
    description:
      "El alma de Misiones infusionada sutilmente en nuestra masa. Aporta un carácter herbal único que equilibra el dulzor y deja un retrogusto aromático e inolvidable.",
    notes: ["Infusión artesanal", "Aroma herbal auténtico", "Cosecha seleccionada"],
    Icon: Leaf,
    accentText: "text-verde",
    iconBg: "bg-verde/10 text-verde border-verde/30",
  },
  {
    number: "03",
    name: "Miel Pura de Monte",
    origin: "Apiarios Locales · Selva Paranaense",
    badge: "100% Pura",
    description:
      "Endulzamos naturalmente con miel multifloral cosechada por apicultores vecinos. Aporta la humedad exacta a la masa y un perfil floral y complejo imposible de imitar.",
    notes: ["Miel multifloral nativa", "Humedad natural", "Sin jarabes artificiales"],
    Icon: Droplets,
    accentText: "text-oro",
    iconBg: "bg-oro/20 text-marron border-oro/50",
  },
  {
    number: "04",
    name: "Dulce de Leche & Merengue",
    origin: "Elaboración Artesanal · Taller de Oberá",
    badge: "Corazón & Corona",
    description:
      "Un corazón generoso de dulce de leche repostero de alta densidad, abrazado por un baño de merengue italiano que aporta una corteza crujiente por fuera y tierna por dentro.",
    notes: ["Relleno abundante", "Merengue italiano", "Terminación a mano"],
    Icon: Cookie,
    accentText: "text-vino",
    iconBg: "bg-vino/10 text-vino border-vino/30",
  },
];

export default function Ingredients() {
  return (
    <section className="relative py-24 md:py-36 bg-crema grain overflow-hidden">
      {/* Decorative borders top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-verde to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-20 pb-10 border-b border-marron/15">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-verde font-semibold flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-4 h-4 text-oro" />
              <span>La Receta de Regional</span>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl text-vino leading-tight"
            >
              Cuatro pilares <br className="hidden md:block" />
              <span className="italic text-verde">de sabor auténtico</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5"
          >
            <p className="font-sans text-lg text-marron/80 leading-relaxed">
              Cada materia prima es seleccionada a mano de productores locales de
              Misiones. Sin atajos, sin esencias artificiales: solo el sabor real
              de nuestra tierra en una receta registrada y libre de gluten.
            </p>
          </motion.div>
        </div>

        {/* Ingredients — Open Editorial Ledger Layout (No boxy cards or emojis) */}
        <div className="divide-y divide-marron/15">
          {ingredients.map((item, i) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Left column: Number + Icon + Origin */}
              <div className="lg:col-span-4 flex items-start gap-5">
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105 ${item.iconBg}`}
                >
                  <item.Icon className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-display text-sm font-bold tracking-widest text-oro">
                      PILAR {item.number}
                    </span>
                    <span className="text-marron/30">•</span>
                    <span className="font-sans text-xs uppercase tracking-wider font-semibold text-verde bg-verde/10 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-vino group-hover:text-verde transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-marron/60 mt-1.5">
                    {item.origin}
                  </p>
                </div>
              </div>

              {/* Middle column: Detailed description */}
              <div className="lg:col-span-5">
                <p className="font-sans text-base md:text-lg text-marron/85 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Right column: Tasting & Quality Attributes */}
              <div className="lg:col-span-3 flex flex-col gap-2.5 lg:pl-6 lg:border-l lg:border-marron/10">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-marron/50 font-semibold mb-1">
                  Aporte a la receta
                </span>
                {item.notes.map((note) => (
                  <div
                    key={note}
                    className="flex items-center gap-2.5 font-sans text-sm text-verde font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-oro shrink-0" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-verde to-transparent" />
    </section>
  );
}
