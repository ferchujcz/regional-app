import { BUSINESS, DEFAULT_DESCRIPTION, FAQS, SERVICE_AREAS, SITE_NAME, SITE_URL } from "@/lib/seo";

/**
 * Structured data (schema.org JSON-LD) for local SEO and GEO
 * (Generative Engine Optimization: Google AI Overviews, ChatGPT, Perplexity, Gemini).
 */
export default function JsonLd() {
  const businessId = `${SITE_URL}/#negocio`;

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-AR",
      publisher: { "@id": businessId },
    },
    {
      "@type": ["Bakery", "LocalBusiness"],
      "@id": businessId,
      name: BUSINESS.name,
      alternateName: [
        "Regional",
        "Alfajores Regional Oberá",
        "Alfajores artesanales de Oberá",
      ],
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      logo: `${SITE_URL}${BUSINESS.logo}`,
      image: [`${SITE_URL}${BUSINESS.image}`, `${SITE_URL}/img_alf/alf2.jpg`],
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      priceRange: "$$",
      servesCuisine: ["Alfajores", "Repostería artesanal", "Productos regionales"],
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.lat,
        longitude: BUSINESS.lng,
      },
      hasMap: `https://www.google.com/maps?q=${BUSINESS.lat},${BUSINESS.lng}`,
      areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "13:00",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "sales",
        areaServed: "AR",
        availableLanguage: ["es"],
      },
      knowsAbout: [
        "Alfajores artesanales",
        "Alfajor misionero",
        "Fécula de mandioca",
        "Yerba mate",
        "Mermelada de rosella",
        "Miel de Misiones",
      ],
      sameAs: BUSINESS.social,
      makesOffer: [
        "Alfajores de fécula de mandioca",
        "Alfajores de yerba mate",
        "Mermelada de rosella",
        "Miel pura de Misiones",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Product", name },
        areaServed: "AR",
      })),
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#alfajor`,
      name: "Alfajor artesanal de Oberá, Misiones",
      description:
        "Alfajor artesanal misionero de fécula de mandioca con dulce de leche, toque de yerba mate y miel pura. Elaborado en Oberá, Misiones, Argentina.",
      image: `${SITE_URL}/img_alf/alf2.jpg`,
      brand: { "@type": "Brand", name: "Regional" },
      manufacturer: { "@id": businessId },
      category: "Alfajores",
      countryOfOrigin: "AR",
      offers: {
        "@type": "Offer",
        url: BUSINESS.whatsapp,
        priceCurrency: "ARS",
        availability: "https://schema.org/InStock",
        seller: { "@id": businessId },
        areaServed: "AR",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
