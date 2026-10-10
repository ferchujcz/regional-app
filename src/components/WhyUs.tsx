"use client";

import { motion } from "framer-motion";
import { Shield, Award, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Calidad Certificada",
    desc: "Cumplimos con todas las normas bromatológicas provinciales y nacionales. Cada lote es controlado.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Naturales",
    desc: "Sin conservantes ni colorantes artificiales. Solo materias primas puras, seleccionadas a mano.",
  },
  {
    icon: Award,
    title: "Producto Regional",
    desc: "Elaborado íntegramente en Oberá, Misiones. Apoyamos la economía local y a nuestros productores.",
  },
  {
    icon: Heart,
    title: "Hecho con Pasión",
    desc: "Cada alfajor es elaborado artesanalmente con amor y dedicación. No es una fábrica, es un taller familiar.",
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
          className="text-center mb-16"
        >
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-oro font-semibold ornament block mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-crema mb-6 leading-tight">
            Nuestro{" "}
            <span className="italic text-oro-claro">compromiso</span>
          </h2>
          <div className="w-24 h-[1px] bg-oro mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center p-8 rounded-lg border border-crema/10 hover:border-oro/40 bg-verde-claro/10 hover:bg-verde-claro/20 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-oro/10 flex items-center justify-center group-hover:bg-oro/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-oro group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-xl text-crema mb-3">{item.title}</h3>
              <p className="font-sans text-crema/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
