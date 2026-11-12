"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Truck, Store, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { BUSINESS, SERVICE_AREAS } from "@/lib/seo";

const highlights = [
  {
    icon: MapPin,
    href: "/alfajores-obera",
    eyebrow: "Origen Oberá",
    title: "Alfajores artesanales en Oberá",
    text: "Elaborados en Oberá, la Capital Nacional del Inmigrante. Retiro en el día en nuestro taller y atención personalizada por WhatsApp.",
  },
  {
    icon: Store,
    href: "/alfajores-misiones",
    eyebrow: "Identidad Misionera",
    title: "El auténtico alfajor misionero",
    text: "Fécula de mandioca, yerba mate y miel de monte: los cultivos emblema de Misiones reunidos en una receta propia y sin gluten.",
  },
  {
    icon: Truck,
    href: "/alfajores-artesanales",
    eyebrow: "Envíos Nacionales",
    title: "Hechos a mano, para toda Argentina",
    text: "Producimos en pequeñas tandas cuidando la frescura de cada caja, con envíos desde Misiones hacia todo el país.",
  },
];

export default function LocalSeo() {
  return (
    <section
      id="obera-misiones"
      className="relative py-24 md:py-32 bg-crema-dark overflow-hidden"
      aria-labelledby="local-title"
    >
      <div className="absolute -left-40 top-10 w-96 h-96 rounded-full bg-vino/5 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro split */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end pb-16 border-b border-marron/15">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-verde font-semibold block mb-4">
              Desde la tierra colorada
            </span>
            <h2
              id="local-title"
              className="font-display text-4xl md:text-5xl lg:text-6xl text-vino leading-tight"
            >
              Qué hacemos desde el{" "}
              <span className="italic text-verde">primer día</span> en Oberá
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 font-sans text-base md:text-lg text-marron/85 leading-relaxed space-y-4"
          >
            <p>
              En <strong className="text-verde">Regional</strong> nacimos con un propósito claro:
              crear un alfajor que represente de verdad a <strong>Oberá y a Misiones</strong>.
              Por eso desde el principio reemplazamos las harinas industriales por{" "}
              <strong>fécula de mandioca</strong>, sumamos <strong>yerba mate</strong> de secaderos locales,
              endulzamos con <strong>miel pura de monte</strong> y rellenamos con abundante{" "}
              <strong>dulce de leche</strong>.
            </p>
            <p>
              Además de nuestros alfajores libres de gluten (RNPA {BUSINESS.rnpa}), elaboramos{" "}
              <strong>mermelada artesanal de rosella</strong> y envasamos <strong>miel pura misionera</strong>.
              Podés pedir tu caja para regalar o disfrutar escribiéndonos al{" "}
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-vino font-semibold underline decoration-oro underline-offset-4 hover:text-verde transition-colors"
              >
                {BUSINESS.phoneDisplay}
              </a>
              .
            </p>
          </motion.div>
        </div>

        {/* Open Editorial Columns (Replaces the 3 white floating cards) */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-marron/15 py-14 border-b border-marron/15">
          {highlights.map((c, i) => (
            <motion.div
              key={c.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`py-8 md:py-2 ${
                i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"
              }`}
            >
              <Link
                href={c.href}
                id={`local-link-${c.href.slice(1)}`}
                className="group flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-sans text-xs uppercase tracking-[0.25em] text-vino font-bold">
                      {c.eyebrow}
                    </span>
                    <span className="w-10 h-10 rounded-full border border-marron/20 text-verde flex items-center justify-center group-hover:bg-vino group-hover:text-crema group-hover:border-vino transition-all">
                      <c.icon className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-verde mb-3 group-hover:text-vino transition-colors">
                    {c.title}
                  </h3>
                  <p className="font-sans text-marron/75 leading-relaxed">
                    {c.text}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-widest text-vino group-hover:text-verde transition-colors">
                  <span>Conocer más</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Map and Service Areas integrated cleanly */}
        <div className="pt-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg border border-marron/15 min-h-[320px] bg-crema">
            <iframe
              title="Mapa de Oberá, Misiones — Regional Alfajores"
              src={`https://www.google.com/maps?q=${BUSINESS.lat},${BUSINESS.lng}&z=13&output=embed`}
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-vino font-bold block">
              Alcance Regional y Nacional
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-verde leading-tight">
              Enviamos a toda Misiones y Argentina
            </h3>
            <p className="font-sans text-marron/80 leading-relaxed">
              Coordinamos retiro directo en <strong>{BUSINESS.street}, Oberá</strong> y despachamos
              semanalmente a comercios, turistas y familias en:
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4 pt-2">
              {SERVICE_AREAS.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-2 font-sans text-sm text-marron font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-oro shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
