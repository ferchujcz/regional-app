"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("✓ ¡Mensaje enviado! Nos contactaremos a la brevedad.");
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section id="contacto" className="py-24 md:py-36 bg-crema grain relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-verde to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-verde font-semibold ornament block mb-4">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-vino mb-6 leading-tight">
            ¿Querés probar{" "}
            <span className="italic text-verde">Regional</span>?
          </h2>
          <div className="w-24 h-[1px] bg-oro mx-auto mb-6" />
          <p className="font-sans text-lg text-marron/70 max-w-xl mx-auto">
            Escribínos y te respondemos al instante. También podés hacer tu
            pedido directo por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="bg-verde text-crema p-8 rounded-sm shadow-lg">
              <img
                src="/img_alf/logoalf.png"
                alt="Regional"
                className="h-14 w-auto mb-6 brightness-200"
              />
              <div className="space-y-6">
                <a
                  href="tel:+5493755297547"
                  className="flex items-start gap-4 hover:text-oro transition-colors group"
                >
                  <Phone className="w-5 h-5 text-oro mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-crema/60 mb-1">Teléfono</p>
                    <p className="font-sans text-lg">+54 9 3755 297547</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/5493755297547"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 hover:text-oro transition-colors group"
                >
                  <FaWhatsapp className="w-5 h-5 text-oro mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-crema/60 mb-1">WhatsApp</p>
                    <p className="font-sans text-lg">Iniciar chat directo</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-oro mt-1" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-crema/60 mb-1">Email</p>
                    <p className="font-sans text-lg">contacto@regionalalfajores.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-oro mt-1" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-crema/60 mb-1">Ubicación</p>
                    <p className="font-sans text-lg">Oberá, Misiones, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-oro mt-1" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-widest text-crema/60 mb-1">Horarios</p>
                    <p className="font-sans">Lunes a Viernes: 9:00 – 18:00</p>
                    <p className="font-sans">Sábados: 9:00 – 13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-blanco p-8 md:p-10 rounded-sm shadow-lg border border-crema-dark flex flex-col gap-6"
            >
              <h3 className="font-display text-3xl text-verde mb-2">
                Envíanos un mensaje
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans font-semibold text-xs uppercase tracking-widest text-verde mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-b-2 border-crema-dark py-3 focus:outline-none focus:border-vino transition-colors bg-transparent font-sans placeholder:text-marron/30"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block font-sans font-semibold text-xs uppercase tracking-widest text-verde mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border-b-2 border-crema-dark py-3 focus:outline-none focus:border-vino transition-colors bg-transparent font-sans placeholder:text-marron/30"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans font-semibold text-xs uppercase tracking-widest text-verde mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full border-b-2 border-crema-dark py-3 focus:outline-none focus:border-vino transition-colors bg-transparent resize-none font-sans placeholder:text-marron/30"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-vino text-white py-4 font-sans font-bold uppercase tracking-[0.2em] hover:bg-verde transition-colors rounded-sm shadow-lg text-sm"
              >
                Enviar Mensaje
              </button>
              {status && (
                <p className="font-sans text-verde font-bold text-center">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
