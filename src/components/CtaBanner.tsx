"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CtaBanner() {
  return (
    <section className="relative py-20 md:py-28 bg-vino-deep text-crema overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-vino-deep via-vino to-marron" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-oro/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-verde/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-oro font-semibold block mb-6">
            ¿Listo para probar?
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-crema mb-6 leading-tight">
            Hacé tu pedido ahora y<br />
            <span className="italic text-oro">recibí en tu casa</span>
          </h2>
          <p className="font-sans text-lg text-crema/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Enviamos a todo el país. Escribinos por WhatsApp y armá tu caja personalizada con alfajores, mermelada de rosella y miel pura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5493755297547?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20alfajores%20Regional"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-oro text-vino-deep px-10 py-4 font-sans font-bold text-sm uppercase tracking-[0.2em] hover:bg-oro-claro transition-all duration-300 rounded-sm shadow-xl hover:shadow-2xl hover:shadow-oro/20 group"
            >
              <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Pedir por WhatsApp
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 border-2 border-crema/30 text-crema px-10 py-4 font-sans font-bold text-sm uppercase tracking-[0.2em] hover:bg-crema hover:text-vino-deep transition-all duration-300 rounded-sm"
            >
              Contactarnos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
