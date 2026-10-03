"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Productos", href: "#productos" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-crema/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative group">
            <motion.img
              src="/img_alf/logoalf.png"
              alt="Regional"
              className={`transition-all duration-500 object-contain ${
                scrolled ? "h-12" : "h-16 md:h-20"
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-sans text-sm font-semibold tracking-[0.15em] uppercase transition-colors group ${
                  scrolled
                    ? "text-verde hover:text-vino"
                    : "text-crema hover:text-oro"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300 ${
                    scrolled ? "bg-vino" : "bg-oro"
                  }`}
                />
              </Link>
            ))}
            <a
              href="https://wa.me/5493755297547"
              target="_blank"
              rel="noreferrer"
              className="ml-4 bg-vino text-white px-6 py-2.5 font-sans text-sm font-bold uppercase tracking-widest hover:bg-verde transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl"
            >
              Comprar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors ${
              scrolled ? "text-verde" : "text-crema"
            }`}
            aria-label="Menú"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-crema border-t border-verde/10 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-verde font-sans font-semibold text-lg tracking-widest uppercase border-b border-verde/10 hover:text-vino hover:pl-2 transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <a
                href="https://wa.me/5493755297547"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block w-full text-center bg-vino text-white py-4 font-sans font-bold text-lg uppercase tracking-widest rounded-sm hover:bg-verde transition-all"
              >
                Comprar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
