"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const Alfajor3D = dynamic(() => import("./Alfajor3D"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollVal, setScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const floatingY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Track scroll value for the 3D model
  useMotionValueEvent(scrollYProgress, "change", (v) => setScrollVal(v));

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-vino-deep text-crema flex items-center justify-center grain"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-vino-deep/80 to-verde/90 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 border-4 border-verde-claro rounded-full flex items-center justify-center bg-crema shadow-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img_alf/logoalf.png" alt="Regional Alfajores - Logo" className="w-full h-full object-contain p-4" />
          </div>
        </motion.div>

        <div className="overflow-hidden mb-6 text-center">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl font-display font-bold tracking-tight text-crema"
          >
            <span className="block font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-oro/90 mb-5">
              Alfajores artesanales de Oberá, Misiones
            </span>
            Alfajores con historia,
            <br />
            <span className="text-oro italic font-script font-light text-5xl md:text-8xl">de fécula de mandioca...</span>
          </motion.h1>
        </div>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-12 text-center"
        >
          <a
            href="#productos"
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-oro/50 transition-all hover:border-oro inline-block"
          >
            <span className="relative z-10 text-oro font-sans uppercase tracking-widest text-sm font-semibold transition-colors group-hover:text-vino-deep">
              Descubrir el Sabor
            </span>
            <div className="absolute inset-0 bg-oro scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
        </motion.div>
      </div>

      {/* Floating 3D Alfajor — smaller, no box */}
      <motion.div
        style={{ y: floatingY }}
        className="absolute bottom-16 right-4 md:bottom-24 md:right-24 z-20 w-32 h-32 md:w-44 md:h-44"
      >
        <Alfajor3D scrollProgress={scrollVal} />
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-sans text-crema/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-crema/60 to-transparent" />
      </motion.div>
    </section>
  );
}
