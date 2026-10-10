import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { Check, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import { LANDINGS, getLanding } from "@/lib/landings";
import { BUSINESS, PRIMARY_KEYWORDS, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANDINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLanding(slug);
  if (!l) return {};
  return {
    title: { absolute: l.title },
    description: l.description,
    keywords: [...l.keywords, ...PRIMARY_KEYWORDS],
    alternates: { canonical: `/${l.slug}` },
    openGraph: {
      title: l.title,
      description: l.description,
      url: `${SITE_URL}/${l.slug}`,
      images: [{ url: l.image, alt: l.imageAlt }],
      locale: "es_AR",
      type: "website",
    },
  };
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLanding(slug);
  if (!l) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: l.h1, item: `${SITE_URL}/${l.slug}` },
    ],
  };

  const others = LANDINGS.filter((o) => o.slug !== l.slug);

  return (
    <main className="min-h-screen bg-crema text-marron overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <header className="relative bg-vino-deep text-crema pt-36 pb-20 md:pt-44 md:pb-28 grain overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vino-deep via-vino-deep to-verde/80" />
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-oro/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-[fadeUp_0.9s_ease-out_both]">
            <nav aria-label="Breadcrumb" className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-crema/60">
              <Link href="/" className="hover:text-oro transition-colors">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-oro">{l.eyebrow}</span>
            </nav>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">{l.h1}</h1>
            <p className="font-sans text-lg md:text-xl text-crema/80 leading-relaxed mb-8 max-w-xl">{l.intro}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noreferrer"
                id={`cta-whatsapp-${l.slug}`}
                className="inline-flex items-center gap-3 bg-oro text-vino-deep px-7 py-4 rounded-full font-sans font-bold uppercase tracking-widest text-sm hover:bg-oro-claro hover:-translate-y-0.5 transition-all shadow-xl"
              >
                <FaWhatsapp className="w-5 h-5" /> Pedir por WhatsApp
              </a>
              <Link
                href="/#productos"
                className="inline-flex items-center px-7 py-4 rounded-full border border-crema/30 font-sans font-semibold uppercase tracking-widest text-sm hover:border-oro hover:text-oro transition-colors"
              >
                Ver productos
              </Link>
            </div>
            <p className="mt-8 flex items-center gap-2 font-sans text-sm text-crema/60">
              <MapPin className="w-4 h-4 text-oro" /> {BUSINESS.city}, {BUSINESS.region}, {BUSINESS.countryName}
            </p>
          </div>
          <div className="relative animate-[fadeUp_1.1s_ease-out_0.15s_both]">
            <div className="absolute -inset-4 rounded-[2rem] border border-oro/30 rotate-3" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.image}
              alt={l.imageAlt}
              className="relative w-full aspect-[4/3] object-cover rounded-[2rem] shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </header>

      {/* Highlights */}
      <section className="bg-crema-dark border-y border-marron/10">
        <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {l.highlights.map((h) => (
            <li key={h} className="flex items-center gap-3 font-sans font-semibold text-verde">
              <span className="w-8 h-8 rounded-full bg-verde text-crema flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </span>
              {h}
            </li>
          ))}
        </ul>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        {l.sections.map((s) => (
          <section key={s.h2} className="mb-14 last:mb-0">
            <h2 className="font-display text-3xl md:text-4xl text-vino mb-6 leading-tight">{s.h2}</h2>
            <div className="w-16 h-[2px] bg-oro mb-6" />
            {s.body.map((p, i) => (
              <p key={i} className="font-sans text-lg text-marron/80 leading-relaxed mb-5">{p}</p>
            ))}
          </section>
        ))}
      </article>

      <Faq />

      {/* Internal links */}
      <section className="bg-verde text-crema py-20 grain">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl mb-10 text-center">Seguí descubriendo Regional</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/${o.slug}`}
                className="group block p-8 rounded-2xl bg-crema/5 border border-crema/10 hover:border-oro hover:bg-crema/10 transition-all"
              >
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-oro">{o.eyebrow}</span>
                <h3 className="font-display text-2xl mt-2 group-hover:text-oro transition-colors">{o.h1}</h3>
                <p className="font-sans text-crema/70 mt-3 line-clamp-2">{o.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
