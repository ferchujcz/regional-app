"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden">
      {/* Top ornamental line */}
      <div className="h-2 bg-gradient-to-r from-vino via-oro to-verde" />

      {/* Main content */}
      <div className="bg-crema grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-sm tracking-[0.3em] uppercase text-verde font-semibold ornament block mb-6">
                Nuestra Historia
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-vino leading-tight mb-8">
                De la tierra <br />
                <span className="italic text-verde">a tu mesa</span>
              </h2>
              <div className="w-16 h-[1px] bg-oro mb-8" />

              <p className="font-sans text-lg text-marron/85 leading-relaxed mb-6">
                En <strong className="font-display text-vino text-xl not-italic">Regional</strong>,
                nacimos de un sueño en Oberá, Misiones: crear un alfajor que
                honre la identidad de nuestra tierra colorada.
              </p>
              <p className="font-sans text-lg text-marron/85 leading-relaxed mb-6">
                Usamos{" "}
                <strong className="text-verde">fécula de mandioca</strong> de
                productores locales,{" "}
                <strong className="text-verde">yerba mate</strong> que crece a
                metros de nuestro taller, y{" "}
                <strong className="text-oro">miel pura</strong> cosechada por
                apicultores vecinos.
              </p>
              <p className="font-sans text-lg text-marron/85 leading-relaxed mb-8 italic border-l-4 border-oro pl-6">
                "No vendemos alfajores. Compartimos un pedazo de Misiones con
                cada persona que los prueba."
              </p>

              <div className="flex flex-wrap gap-8 text-center">
                <div>
                  <span className="font-display text-4xl text-vino block">100%</span>
                  <span className="font-sans text-xs uppercase tracking-widest text-verde font-semibold">Artesanal</span>
                </div>
                <div>
                  <span className="font-display text-4xl text-vino block">0</span>
                  <span className="font-sans text-xs uppercase tracking-widest text-verde font-semibold">Conservantes</span>
                </div>
                <div>
                  <span className="font-display text-4xl text-vino block">Local</span>
                  <span className="font-sans text-xs uppercase tracking-widest text-verde font-semibold">Ingredientes</span>
                </div>
              </div>
            </motion.div>

            {/* Image collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-4 border-crema-dark">
                <img
                  src="/img_alf/caja.jpg"
                  alt="Caja Regional — Alfajores Artesanales"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-verde/30 to-transparent" />
              </div>
              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-verde text-crema p-8 rounded-sm shadow-2xl max-w-[250px] hidden md:block"
              >
                <img
                  src="/img_alf/logoalf.png"
                  alt="Regional"
                  className="h-10 w-auto mb-3 brightness-200"
                />
                <p className="font-sans text-sm text-crema/80 leading-relaxed">
                  Cada alfajor es elaborado a mano en nuestro taller de Oberá.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
