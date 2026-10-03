"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    category: "Alfajores Premium",
    tagline: "Nuestra especialidad. Fécula de mandioca y yerba mate.",
    items: [
      { id: 1, name: "Caja Regional", image: "/img_alf/caja.jpg", detail: "Caja x12 unidades" },
      { id: 2, name: "Alfajor Clásico", image: "/img_alf/alf2.jpg", detail: "Individual" },
      { id: 3, name: "Alfajor Relleno", image: "/img_alf/alf3.jpg", detail: "Doble dulce de leche" },
      { id: 4, name: "Alfajor Especial", image: "/img_alf/alf4.jpg", detail: "Edición limitada" },
    ],
  },
  {
    category: "Mermelada de Rosella",
    tagline: "Un sabor exótico, directo de la chacra a tu mesa.",
    items: [
      { id: 5, name: "Mermelada Artesanal", image: "/img_alf/mermeladarose.jpg", detail: "Frasco 350g" },
      { id: 6, name: "Rosella Premium", image: "/img_alf/mermerose2.jpg", detail: "Frasco 500g" },
      { id: 7, name: "Envasado de Origen", image: "/img_alf/mermerose3.jpg", detail: "Presentación regalo" },
      { id: 8, name: "Dulce Experiencia", image: "/img_alf/mermerose4.jpg", detail: "Pack degustación" },
    ],
  },
  {
    category: "Miel Pura",
    tagline: "Dulzor natural, cosechado responsablemente en Misiones.",
    items: [
      { id: 9, name: "Miel de la Zona", image: "/img_alf/miel1.jpg", detail: "Frasco 500g" },
      { id: 10, name: "Miel Orgánica", image: "/img_alf/miel2.jpg", detail: "Certificada" },
      { id: 11, name: "Frasco Premium", image: "/img_alf/miel3.jpg", detail: "Presentación regalo" },
      { id: 12, name: "Miel Dorada", image: "/img_alf/miel4.jpg", detail: "Cosecha de primavera" },
    ],
  },
];

export default function Products() {
  return (
    <section
      id="productos"
      className="py-24 md:py-36 bg-verde text-crema relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMEwyMCA0ME0wIDIwTDQwIDIwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9zdmc+')] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-oro font-semibold ornament block mb-4">
            Nuestros Productos
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-crema mb-6 leading-tight">
            Sabores de nuestra{" "}
            <span className="italic text-oro-claro">tierra</span>
          </h2>
          <div className="w-24 h-[1px] bg-oro mx-auto mb-6" />
          <p className="font-sans text-lg text-crema/70 max-w-2xl mx-auto leading-relaxed">
            Cada producto es elaborado cuidando cada detalle para ofrecerte la
            verdadera esencia de Oberá, Misiones.
          </p>
        </motion.div>

        {/* Product categories */}
        <div className="space-y-28">
          {products.map((section, idx) => (
            <div key={idx}>
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12 flex flex-col md:flex-row md:items-end gap-4"
              >
                <div>
                  <h3 className="font-display text-3xl md:text-5xl text-crema leading-tight">
                    {section.category}
                  </h3>
                  <p className="font-sans text-oro text-lg mt-2 italic">
                    {section.tagline}
                  </p>
                </div>
              </motion.div>

              {/* Product grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
                    className="group relative overflow-hidden rounded-sm bg-verde-claro/20 border border-crema/10 hover:border-oro/40 transition-all duration-500"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-verde via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <p className="text-oro text-xs uppercase tracking-widest font-semibold mb-1">
                        {item.detail}
                      </p>
                      <h4 className="font-display text-xl text-crema">
                        {item.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://wa.me/5493755297547"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-vino text-white px-12 py-4 font-sans font-bold text-sm uppercase tracking-[0.2em] hover:bg-oro hover:text-verde transition-all duration-500 shadow-xl rounded-sm"
          >
            Consultar precios por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
