import { BUSINESS, DEFAULT_DESCRIPTION, MAP_LINK, SERVICE_AREAS, SITE_NAME, SITE_URL } from "@/lib/seo";

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
        streetAddress: BUSINESS.street,
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
      hasMap: MAP_LINK,
      identifier: [
        { "@type": "PropertyValue", name: "RNE", value: BUSINESS.rne },
        { "@type": "PropertyValue", name: "Marca INPI", value: BUSINESS.marcaInpi },
      ],
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
      name: "Alfajor de yerba mate, miel y fécula de mandioca — Libre de gluten",
      alternateName: "Delicias con yerba mate, miel y fécula de mandioca",
      description:
        "Alfajor artesanal de yerba mate relleno con dulce de leche y miel, cubierto con merengue italiano. Libre de gluten (RNPA 14267117). Elaborado en Oberá, Misiones, Argentina.",
      identifier: { "@type": "PropertyValue", name: "RNPA", value: BUSINESS.rnpa },
      additionalProperty: { "@type": "PropertyValue", name: "Libre de gluten", value: "Sí" },
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
