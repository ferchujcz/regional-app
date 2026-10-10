import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { BUSINESS } from "@/lib/seo";

const nav = [
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Productos", href: "/#productos" },
  { name: "Galería", href: "/#galeria" },
  { name: "Preguntas frecuentes", href: "/#preguntas" },
  { name: "Contacto", href: "/#contacto" },
  { name: "Calidad", href: "/calidad" },
];

const local = [
  { name: "Alfajores en Oberá", href: "/alfajores-obera" },
  { name: "Alfajores de Misiones", href: "/alfajores-misiones" },
  { name: "Alfajores artesanales", href: "/alfajores-artesanales" },
];

export default function Footer() {
  return (
    <footer className="bg-marron text-crema pt-20 pb-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BUSINESS.logo} alt="Regional Alfajores Oberá" className="h-16 w-auto mb-5 bg-crema rounded-full p-1" />
          <p className="font-sans text-crema/70 leading-relaxed">
            Alfajores artesanales de Oberá, Misiones, Argentina. Un pedazo de la tierra colorada en cada bocado.
          </p>
        </div>

        <nav aria-label="Navegación del pie">
          <h2 className="font-sans font-bold uppercase tracking-widest text-xs mb-6 text-oro">Navegación</h2>
          <ul className="flex flex-col gap-3 font-sans">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-crema/80 hover:text-oro transition-colors">{l.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Alfajores por zona">
          <h2 className="font-sans font-bold uppercase tracking-widest text-xs mb-6 text-oro">Alfajores Misiones</h2>
          <ul className="flex flex-col gap-3 font-sans">
            {local.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-crema/80 hover:text-oro transition-colors">{l.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic font-sans">
          <h2 className="font-sans font-bold uppercase tracking-widest text-xs mb-6 text-oro">Contacto</h2>
          <ul className="flex flex-col gap-4 text-crema/80">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-1 text-oro shrink-0" />{BUSINESS.city}, {BUSINESS.region}, {BUSINESS.countryName}</li>
            <li>
              <a href={`tel:${BUSINESS.phone}`} className="flex gap-3 hover:text-oro transition-colors">
                <Phone className="w-4 h-4 mt-1 text-oro shrink-0" />{BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex gap-3 hover:text-oro transition-colors break-all">
                <Mail className="w-4 h-4 mt-1 text-oro shrink-0" />{BUSINESS.email}
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-crema/10 gap-4">
        <p className="font-sans text-sm text-crema/50">
          © {new Date().getFullYear()} Regional Alfajores · Alfajores artesanales de Oberá, Misiones.
        </p>
        <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="font-sans text-sm text-oro hover:text-oro-claro">
          Hacé tu pedido por WhatsApp →
        </a>
      </div>
    </footer>
  );
}
