"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

        {/* Open Editorial Quotes with Dividers instead of white boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-marron/15 border-t border-b border-marron/15">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`py-10 md:py-12 flex flex-col justify-between ${
                i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-oro">
                    {[...Array(t.stars)].map((_, idx) => (
                      <Star key={idx} fill="currentColor" size={16} />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-vino/20" />
                </div>

                <p className="font-display text-lg md:text-xl text-marron/90 leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <footer className="flex items-center gap-3 pt-4 border-t border-marron/10">
                <div className="w-2 h-8 bg-vino rounded-full" />
                <div>
                  <p className="font-display text-lg text-vino font-bold leading-none">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs uppercase tracking-widest text-verde mt-1">
                    {t.location}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
