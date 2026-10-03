"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura G.",
    location: "Buenos Aires",
    text: "Nunca probé un alfajor con esta textura. La masa de mandioca lo hace increíblemente suave y el toque de yerba mate es un viaje de ida. Se los regalé a toda mi familia.",
    stars: 5,
  },
  {
    name: "Martín R.",
    location: "Posadas, Misiones",
    text: "La mermelada de rosella es fantástica, pero los alfajores se llevan el premio. Los compro cada vez que puedo. Totalmente recomendados para regalar o darse un gusto.",
    stars: 5,
  },
  {
    name: "Sofía M.",
    location: "Oberá, Misiones",
    text: "Un orgullo misionero. El sabor es auténtico y la calidad de los ingredientes se nota desde el primer bocado. Los pedí para un evento y fueron un éxito total.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-crema-dark relative grain">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-oro to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-verde font-semibold ornament block mb-4">
            Testimonios
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-vino mb-6 leading-tight">
            Lo que dicen{" "}
            <span className="italic text-verde">nuestros clientes</span>
          </h2>
          <div className="w-24 h-[1px] bg-oro mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-blanco p-8 rounded-sm shadow-sm border border-crema-dark hover:shadow-xl hover:border-oro/30 transition-all duration-500 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-oro">
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} fill="currentColor" size={18} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-marron/80 leading-relaxed mb-8 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-crema-dark pt-4">
                <p className="font-display text-lg text-vino">{t.name}</p>
                <p className="font-sans text-sm text-verde">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
