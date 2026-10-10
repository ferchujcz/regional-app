"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="relative py-24 bg-crema overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-vino-deep mb-4">
          Nuestra Esencia
        </h2>
        <p className="text-lg md:text-xl font-sans text-marron/80 max-w-2xl">
          Cada bocado es un viaje a Misiones. Seleccionamos cuidadosamente los tesoros de nuestra tierra para crear una experiencia única.
        </p>
      </div>

      <div className="relative w-full pb-10">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-8 pb-10 hide-scrollbar" style={{ scrollPaddingLeft: "1rem" }}>
          {ingredients.map((ing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`w-[85vw] md:w-[450px] aspect-[4/5] md:aspect-square rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shrink-0 relative overflow-hidden group snap-center cursor-pointer ${ing.color} shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className={`font-sans font-bold tracking-widest uppercase text-xs md:text-sm ${ing.textColor} opacity-60 mb-2 block`}>
                  Ingrediente {i + 1}
                </span>
                <h3 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold ${ing.textColor}`}>
                  {ing.title}
                </h3>
              </div>
              
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                <p className={`font-sans text-base md:text-lg ${ing.textColor} leading-relaxed opacity-90`}>
                  {ing.desc}
                </p>
              </div>

              {/* Decorative element */}
              <div className={`absolute -bottom-20 -right-20 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-10 blur-3xl ${ing.textColor === 'text-crema' ? 'bg-crema' : 'bg-vino-deep'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
