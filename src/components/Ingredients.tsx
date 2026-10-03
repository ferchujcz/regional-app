"use client";

import { motion } from "framer-motion";
import { Leaf, Droplet } from "lucide-react";

const ingredients = [
  {
    name: "Fécula de Mandioca",
    description:
      "La base ancestral de nuestra receta. Le otorga a cada alfajor esa textura suave, que se deshace en la boca, honrando los cultivos de nuestra tierra.",
    icon: "🌾",
    accent: "border-oro",
  },
  {
    name: "Yerba Mate",
    description:
      "El alma de Misiones infusionada en cada capa. Un toque sutil que equilibra el dulzor y deja un retrogusto característico e inolvidable.",
    icon: "🍃",
    accent: "border-verde-claro",
  },
  {
    name: "Miel Pura",
    description:
      "Endulzamos naturalmente con miel cosechada de apiarios locales. Aporta humedad perfecta y un perfil de sabor floral y complejo.",
    icon: "🍯",
    accent: "border-oro",
  },
  {
    name: "Dulce de Leche",
    description:
      "Un corazón generoso y cremoso. El contraste ideal que une todos los sabores en un bocado de pura indulgencia argentina.",
    icon: "🥛",
    accent: "border-vino",
  },
];

export default function Ingredients() {
  return (
    <section className="relative py-24 md:py-36 bg-crema grain overflow-hidden">
      {/* Decorative borders top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-verde to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-sm tracking-[0.3em] uppercase text-verde font-semibold ornament block mb-4"
          >
            La Receta
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-vino mb-6 leading-tight"
          >
            Cuatro pilares <br className="hidden md:block" />
            <span className="italic text-verde">de sabor auténtico</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[1px] bg-oro mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-sans text-lg text-marron/70 max-w-2xl mx-auto leading-relaxed"
          >
            Cada ingrediente es seleccionado a mano de productores locales de
            Misiones. Sin atajos, sin artificiales.
          </motion.p>
        </div>

        {/* Ingredients — alternating layout */}
        <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
          {ingredients.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`flex gap-6 p-8 bg-blanco rounded-sm shadow-sm border-l-4 ${item.accent} hover:shadow-xl transition-all duration-500 group`}
            >
              <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display text-2xl text-verde mb-3">
                  {item.name}
                </h3>
                <p className="font-sans text-marron/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-verde to-transparent" />
    </section>
  );
}
