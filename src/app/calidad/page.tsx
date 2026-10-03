"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Calidad() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rojo font-sans tracking-[0.2em] uppercase text-sm font-bold mb-4 block">
            Certificaciones y Calidad
          </span>
          <h1 className="text-5xl md:text-7xl font-display text-white mb-6 uppercase tracking-tight">
            Nuestras <span className="text-rojo">Regulaciones</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            En Regional, nos tomamos muy en serio la calidad y seguridad de nuestros productos. Cumplimos con todas las normativas nacionales para llevar lo mejor de Misiones a tu mesa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          
          {/* Sin TACC Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark/50 border border-white/10 rounded-3xl p-10 hover:border-rojo/50 transition-colors"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              {/* Placeholder for Sin TACC Logo */}
              <span className="text-black font-bold text-xl">TACC</span>
            </div>
            <h2 className="text-3xl font-display text-white mb-4 uppercase">Libre de Gluten (Sin TACC)</h2>
            <p className="text-white/70 leading-relaxed font-light mb-6">
              Nuestros alfajores elaborados con fécula de mandioca son naturalmente libres de gluten. Contamos con instalaciones certificadas para garantizar la ausencia de contaminación cruzada, ofreciendo un producto 100% seguro para personas celíacas.
            </p>
            <ul className="text-white/60 space-y-2 font-light text-sm">
              <li>✓ Análisis de laboratorio aprobados</li>
              <li>✓ Entorno de producción aislado</li>
              <li>✓ Certificación Nacional</li>
            </ul>
          </motion.div>

          {/* RNPA / RNE Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark/50 border border-white/10 rounded-3xl p-10 hover:border-rojo/50 transition-colors"
          >
            <div className="w-16 h-16 bg-rojo rounded-full flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">RNPA</span>
            </div>
            <h2 className="text-3xl font-display text-white mb-4 uppercase">Registros Nacionales</h2>
            <p className="text-white/70 leading-relaxed font-light mb-6">
              Todos nuestros productos, desde la miel pura hasta la mermelada de rosella y los alfajores, cuentan con sus respectivos números de Registro Nacional de Producto Alimenticio (RNPA) y Registro Nacional de Establecimiento (RNE).
            </p>
            <ul className="text-white/60 space-y-2 font-light text-sm">
              <li>✓ RNE: En trámite / Aprobado (Misiones)</li>
              <li>✓ Control bromatológico estricto</li>
              <li>✓ Trazabilidad garantizada desde la chacra</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
