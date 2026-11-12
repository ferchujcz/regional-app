"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Wheat, Leaf, Droplets, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Wheat,
    title: "Fécula de Mandioca",
    detail: "Masa suave que se deshace",
  },
  {
    icon: Leaf,
    title: "Yerba Mate Misionera",
    detail: "Infusión sutil de la tierra",
  },
  {
    icon: Droplets,
    title: "Miel Pura & Dulce de Leche",
    detail: "Corazón cremoso y floral",
  },
  {
    icon: Sparkles,
    title: "Baño de Merengue",
    detail: "Corona crujiente artesanal",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-vino-deep text-crema flex flex-col justify-between pt-28 md:pt-36 pb-12 grain"
    >
      {/* Background radial & gradient */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-vino-deep via-vino-deep/95 to-verde/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-oro/10 blur-3xl" />
      </motion.div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto text-center my-auto py-8">
        {/* Logo Medallion — spaced safely below fixed navbar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 relative"
        >
          <div className="absolute -inset-2 rounded-full bg-oro/20 blur-md" />
          <div className="relative w-36 h-36 md:w-44 md:h-44 border-2 border-oro/70 rounded-full flex items-center justify-center bg-crema shadow-2xl overflow-hidden ring-4 ring-verde/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img_alf/logoalf.png"
              alt="Regional Alfajores - Logo"
              className="w-full h-full object-contain p-4"
            />
          </div>
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crema/10 border border-oro/30 text-oro text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.25em] mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-oro shrink-0" />
          <span>Oberá, Misiones · Libre de Gluten (Sin TACC)</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-crema max-w-4xl leading-[1.1]"
        >
          Alfajores con historia,{" "}
          <span className="text-oro italic font-script font-light text-5xl sm:text-6xl md:text-8xl block mt-1">
            de fécula de mandioca y yerba mate
          </span>
        </motion.h1>

        {/* Upfront Story & What We Make */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6 font-sans text-base md:text-xl text-crema/85 max-w-2xl mx-auto leading-relaxed"
        >
          Elaboramos a mano el auténtico{" "}
          <strong className="text-oro-claro font-semibold">alfajor misionero</strong>:
          tapas suaves de fécula de mandioca infusionadas con yerba mate, rellenas de abundante
          dulce de leche y miel pura de monte, coronadas con merengue italiano. Acompañamos
          nuestra tradición con{" "}
          <strong className="text-oro-claro font-semibold">mermelada artesanal de rosella</strong> y{" "}
          <strong className="text-oro-claro font-semibold">miel pura</strong> de nuestra tierra colorada.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/productos"
            className="group relative px-8 py-4 bg-oro text-vino-deep rounded-full font-sans uppercase tracking-widest text-xs md:text-sm font-bold transition-all hover:bg-oro-claro shadow-xl flex items-center gap-3"
          >
            <span>Explorar Productos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/nosotros"
            className="px-8 py-4 bg-transparent rounded-full border border-crema/35 text-crema hover:border-oro hover:text-oro font-sans uppercase tracking-widest text-xs md:text-sm font-semibold transition-colors"
          >
            Nuestra Receta e Historia
          </Link>
        </motion.div>
      </div>

      {/* Bottom editorial strip: What makes our alfajor unique right from the start */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.9 }}
        className="relative z-10 max-w-6xl mx-auto w-full px-4 mt-8 pt-8 border-t border-crema/15"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-crema/15">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3.5 ${idx > 0 ? "lg:pl-6" : ""}`}
            >
              <div className="w-10 h-10 rounded-full bg-oro/15 border border-oro/40 flex items-center justify-center shrink-0 text-oro mt-0.5">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-base md:text-lg text-crema font-semibold leading-snug">
                  {item.title}
                </h2>
                <p className="font-sans text-xs md:text-sm text-crema/70 mt-0.5">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
