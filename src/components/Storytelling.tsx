"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ingredients = [
  {
    title: "Fécula de Mandioca",
    desc: "La base de nuestra textura inconfundible, suave y libre de gluten por naturaleza. Directo de la tierra colorada.",
    color: "bg-crema-dark",
    textColor: "text-marron",
  },
  {
    title: "Yerba Mate",
    desc: "El alma de Misiones. Un toque sutil que despierta los sentidos y equilibra la dulzura.",
    color: "bg-verde",
    textColor: "text-crema",
  },
  {
    title: "Miel Pura",
    desc: "El oro líquido de nuestros montes, aportando un brillo y sabor natural inigualable.",
    color: "bg-oro",
    textColor: "text-marron",
  },
  {
    title: "Dulce de Leche",
    desc: "El corazón cremoso. Abundante, intenso y perfectamente equilibrado.",
    color: "bg-marron",
    textColor: "text-crema",
  },
  {
    title: "Merengue",
    desc: "La corona perfecta. Un baño crujiente por fuera y que se deshace en la boca.",
    color: "bg-blanco",
    textColor: "text-vino-deep",
  },
];

export default function Storytelling() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-crema">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-4 md:px-20 w-max">
          
          <div className="w-[80vw] md:w-[40vw] h-[60vh] flex flex-col justify-center pr-10 shrink-0">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-vino-deep mb-4">
              Nuestra Esencia
            </h2>
            <p className="text-lg md:text-xl font-sans text-marron/80 max-w-md">
              Cada bocado es un viaje a Misiones. Seleccionamos cuidadosamente los tesoros de nuestra tierra para crear una experiencia única.
            </p>
          </div>

          {ingredients.map((ing, i) => (
            <div
              key={i}
              className={`w-[85vw] md:w-[45vw] h-[70vh] rounded-[2rem] p-10 flex flex-col justify-between shrink-0 relative overflow-hidden group ${ing.color}`}
            >
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <span className={`font-sans font-bold tracking-widest uppercase text-sm ${ing.textColor} opacity-60 mb-2 block`}>
                  Ingrediente {i + 1}
                </span>
                <h3 className={`text-4xl md:text-5xl font-display font-bold ${ing.textColor}`}>
                  {ing.title}
                </h3>
              </div>
              
              <div className="relative z-10">
                <p className={`font-sans text-lg md:text-xl md:w-3/4 ${ing.textColor} leading-relaxed`}>
                  {ing.desc}
                </p>
              </div>

              {/* Decorative element */}
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl ${ing.textColor === 'text-crema' ? 'bg-crema' : 'bg-vino-deep'}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
