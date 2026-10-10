"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const reels = [
  { id: 1, title: "Proceso de Elaboración", video: "/img_alf/presentacion.mp4" },
  { id: 2, title: "El Secreto de la Yerba Mate", video: "/img_alf/reel.mp4" },
];

export default function ReelsCarousel() {
  return (
    <section className="py-24 bg-vino-deep text-crema overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Experiencia Regional</h2>
          <p className="font-sans text-crema/80 max-w-md text-lg">
            Descubrí la magia detrás de cada alfajor. Un recorrido visual por nuestra tierra y nuestro trabajo.
          </p>
        </div>
        <button className="px-6 py-3 rounded-full border border-crema/30 hover:bg-crema hover:text-vino-deep transition-colors font-sans text-sm tracking-wider uppercase font-semibold">
          Seguinos en Instagram
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full pb-10">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-10 pb-10 hide-scrollbar" style={{ scrollPaddingLeft: "1rem" }}>
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 0 }}
              className="relative shrink-0 w-[70vw] sm:w-[300px] aspect-[9/16] rounded-3xl snap-center group cursor-pointer perspective-1000"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-marron rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 md:-rotate-y-12 group-hover:rotate-y-0 group-hover:shadow-[0_20px_50px_rgba(201,168,76,0.3)]">
                <div className="w-full h-full bg-black relative">
                  <video 
                    src={reel.video} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <p className="font-sans text-white font-medium text-lg leading-tight">
                      {reel.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
