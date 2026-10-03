import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5493755297547"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 bg-verde text-white p-3.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(30,58,43,0.5)] hover:scale-110 hover:bg-vino transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />
    </a>
  );
}
