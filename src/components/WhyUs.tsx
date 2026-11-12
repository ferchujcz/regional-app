"use client";

import { motion } from "framer-motion";
import { Shield, Award, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Calidad Certificada",
    desc: "Cumplimos con todas las normas bromatológicas provinciales y nacionales (RNE y RNPA). Cada lote es controlado.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Naturales",
    desc: "Sin conservantes ni esencias artificiales. Solo materias primas puras de Misiones seleccionadas a mano.",
  },
  {
    icon: Award,
    title: "Producto Regional",
    desc: "Elaborado íntegramente en Oberá, Misiones. Impulsamos la producción local y a los agricultores de nuestra zona.",
  },
  {
    icon: Heart,
    title: "Hecho con Pasión",
    desc: "Cada alfajor es terminado artesanalmente con dedicación. No somos una línea industrial, somos un taller con historia.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-verde text-crema relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMEwyMCA0ME0wIDIwTDQwIDIwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9zdmc+')] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-crema/15 gap-6"
        >
          <div>
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-oro font-semibold block mb-3">
              ¿Por qué elegirnos?
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-crema leading-tight">
              Nuestro{" "}
              <span className="italic text-oro-claro">compromiso</span>
            </h2>
          </div>
          <p className="font-sans text-crema/75 max-w-md text-base md:text-lg leading-relaxed">
            Cuidamos cada etapa del proceso en nuestro taller de Oberá para garantizar un producto noble, seguro y fiel a nuestra tierra.
          </p>
        </motion.div>

        {/* Open Architectural Columns with Dividers instead of 4 separate boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-crema/15">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group py-8 sm:py-4 ${
                i === 0 ? "sm:pr-8" : "sm:px-8"
              } last:sm:pr-0`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full border border-oro/40 bg-oro/10 flex items-center justify-center group-hover:bg-oro group-hover:text-vino-deep transition-colors duration-300 text-oro shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-display text-sm text-oro/60 tracking-widest">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl text-crema mb-3 group-hover:text-oro-claro transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-crema/70 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
