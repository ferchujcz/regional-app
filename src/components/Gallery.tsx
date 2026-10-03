"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-36 bg-marron text-crema relative overflow-hidden grain">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-oro font-semibold ornament block mb-4">
              Detrás de Escena
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-crema leading-tight mb-4">
              Conocé Regional <br className="hidden md:block" />
              <span className="italic text-oro-claro">desde adentro</span>
            </h2>
            <p className="font-sans text-lg text-crema/60 leading-relaxed">
              Explorá cómo vivimos la experiencia de producir los mejores
              sabores de Misiones.
            </p>
          </div>
          <a
            href="https://instagram.com/regional.arg"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-oro text-oro font-sans font-semibold text-sm uppercase tracking-widest hover:bg-oro hover:text-marron transition-all duration-300 rounded-sm self-start"
          >
            <FaInstagram className="w-5 h-5" />
            <span>Seguinos</span>
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-sm aspect-[9/16] md:aspect-auto md:h-[600px] bg-black border border-crema/10 hover:border-oro/30 transition-all duration-500"
          >
            <video
              src="/img_alf/presentacion.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <p className="text-oro text-xs uppercase tracking-widest font-semibold mb-2">
                Video
              </p>
              <h3 className="font-display text-2xl text-crema">
                Nuestra Presentación
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden rounded-sm aspect-[9/16] md:aspect-auto md:h-[600px] bg-black border border-crema/10 hover:border-oro/30 transition-all duration-500"
          >
            <video
              src="/img_alf/reel.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <p className="text-oro text-xs uppercase tracking-widest font-semibold mb-2">
                Reel
              </p>
              <h3 className="font-display text-2xl text-crema">
                Proceso Artesanal
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
