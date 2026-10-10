"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Truck, Store } from "lucide-react";
import { BUSINESS, SERVICE_AREAS } from "@/lib/seo";

const cards = [
  {
    icon: MapPin,
    href: "/alfajores-obera",
    eyebrow: "Alfajor Oberá",
    title: "Alfajores artesanales en Oberá",
    text: "Elaborados en Oberá, la Capital Nacional del Inmigrante. Retiro en el día y pedidos por WhatsApp.",
  },
  {
    icon: Store,
    href: "/alfajores-misiones",
    eyebrow: "Alfajor Misiones",
    title: "El alfajor misionero",
    text: "Fécula de mandioca, yerba mate y miel de monte: los sabores de Misiones en un solo alfajor.",
  },
  {
    icon: Truck,
    href: "/alfajores-artesanales",
    eyebrow: "Alfajor artesanal",
    title: "Hechos a mano, para toda Argentina",
    text: "Alfajores artesanales en pequeñas tandas, con envíos desde Misiones a todo el país.",
  },
];

export default function LocalSeo() {
  return (
    <section id="obera-misiones" className="relative py-24 md:py-32 bg-crema-dark overflow-hidden" aria-labelledby="local-title">
      <div className="absolute -left-40 top-10 w-96 h-96 rounded-full bg-vino/5 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-verde font-semibold block mb-4">
              Desde la tierra colorada
            </span>
            <h2 id="local-title" className="font-display text-4xl md:text-5xl text-vino leading-tight">
              Alfajores artesanales de <span className="italic text-verde">Oberá, Misiones</span>, Argentina
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-lg text-marron/80 leading-relaxed space-y-4"
          >
            <p>
              <strong className="text-verde">Regional</strong> elabora alfajores artesanales en{" "}
              <strong>Oberá, Misiones</strong>. Nuestro alfajor misionero se hace con fécula de mandioca, yerba mate,
              dulce de leche y miel pura de monte, en pequeñas tandas y con ingredientes de productores locales.
            </p>
            <p>
              Si buscás <em>alfajores en Oberá</em>, un <em>alfajor de Misiones</em> para regalar o{" "}
              <em>alfajores artesanales</em> con envío a cualquier punto de Argentina, escribinos por WhatsApp al{" "}
              <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="text-vino font-semibold underline decoration-oro underline-offset-4">
                {BUSINESS.phoneDisplay}
              </a>
              .
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((c, i) => (
            <motion.div
              key={c.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={c.href}
                id={`local-link-${c.href.slice(1)}`}
                className="group h-full flex flex-col p-8 bg-blanco rounded-2xl border border-marron/10 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-oro transition-all duration-500"
              >
                <span className="w-12 h-12 rounded-full bg-vino/10 text-vino flex items-center justify-center mb-6 group-hover:bg-vino group-hover:text-crema transition-colors">
                  <c.icon className="w-5 h-5" />
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-oro font-semibold">{c.eyebrow}</span>
                <h3 className="font-display text-2xl text-verde mt-2 mb-3 group-hover:text-vino transition-colors">{c.title}</h3>
                <p className="font-sans text-marron/70 leading-relaxed flex-1">{c.text}</p>
                <span className="mt-6 font-sans text-sm font-bold uppercase tracking-widest text-vino">
                  Ver más <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-marron/10 min-h-[320px] bg-crema">
            <iframe
              title="Mapa de Oberá, Misiones — Regional Alfajores"
              src={`https://www.google.com/maps?q=${BUSINESS.lat},${BUSINESS.lng}&z=13&output=embed`}
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:col-span-2 bg-verde text-crema rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl mb-4">Enviamos a toda Misiones y Argentina</h3>
            <p className="font-sans text-crema/70 mb-6">Retiro en Oberá y envíos a:</p>
            <ul className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((a) => (
                <li key={a} className="px-3 py-1.5 rounded-full bg-crema/10 border border-crema/15 font-sans text-sm">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
