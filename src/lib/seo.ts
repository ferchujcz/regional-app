// Central SEO / GEO configuration for Regional Alfajores.
// Update SITE_URL with the final production domain before deploying.

export const SITE_URL = "https://regionalalfajores.com.ar";
export const SITE_NAME = "Regional Alfajores";

export const BUSINESS = {
  name: "Regional Alfajores",
  legalName: "Regional — Alfajores Artesanales de Oberá",
  phone: "+5493755297547",
  phoneDisplay: "+54 9 3755 297547",
  whatsapp: "https://wa.me/5493755297547",
  email: "regionalarg@gmail.com",
  street: "Tronador 1011",
  city: "Oberá",
  region: "Misiones",
  regionCode: "AR-N",
  postalCode: "3360",
  country: "AR",
  countryName: "Argentina",
  fullAddress: "Tronador 1011, Oberá, Misiones 3360, Argentina",
  // Tronador — Villa del Parque, Oberá (approx.). Refine with the exact Google Maps pin if needed.
  lat: -27.4975,
  lng: -55.1113,
  logo: "/img_alf/logoalf.png",
  image: "/img_alf/caja.jpg",
  instagram: "https://www.instagram.com/regional.arg/",
  facebook: "https://www.facebook.com/regional.arg",
  social: ["https://www.instagram.com/regional.arg/", "https://www.facebook.com/regional.arg"],
  rne: "14001641",
  rnpa: "14267117",
  marcaInpi: "3.794.853",
};

export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.fullAddress)}&z=16&output=embed`;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.fullAddress)}`;

export const PRIMARY_KEYWORDS = [
  "alfajores Oberá",
  "alfajor Oberá",
  "alfajores Misiones",
  "alfajor Misiones",
  "alfajores artesanales",
  "alfajor artesanal",
  "alfajores artesanales Oberá Misiones",
  "alfajor artesanal Oberá Misiones Argentina",
  "alfajores artesanales Argentina",
  "alfajores de Misiones",
  "alfajores de fécula de mandioca",
  "alfajores sin TACC Misiones",
  "alfajores de yerba mate",
  "alfajores regionales",
  "productos regionales Misiones",
  "mermelada de rosella Misiones",
  "miel pura Misiones",
  "regalos regionales Oberá",
];

export const DEFAULT_DESCRIPTION =
  "Alfajores artesanales de Oberá, Misiones, Argentina. Alfajor de fécula de mandioca, yerba mate, dulce de leche y miel pura. Mermelada de rosella y productos regionales misioneros. Pedidos por WhatsApp con envíos a todo el país.";

export const FAQS = [
  {
    q: "¿Dónde comprar alfajores artesanales en Oberá, Misiones?",
    a: "Podés comprar los alfajores artesanales Regional en Tronador 1011, Oberá, Misiones, o hacer tu pedido por WhatsApp al +54 9 3755 297547. Coordinamos retiro en Oberá y envíos a toda la provincia de Misiones y al resto de Argentina.",
  },
  {
    q: "¿Qué tiene de especial el alfajor de Misiones?",
    a: "El alfajor misionero de Regional se elabora con fécula de mandioca, un ingrediente típico de la tierra colorada, y se complementa con yerba mate, miel pura de monte y dulce de leche. El resultado es una textura suave y un sabor único que representa a Misiones.",
  },
  {
    q: "¿Los alfajores de mandioca son sin gluten?",
    a: "Sí. Nuestro alfajor de yerba mate con dulce de leche y miel, cubierto con merengue italiano, está inscripto como LIBRE DE GLUTEN en el Registro Nacional de Producto Alimenticio (RNPA 14267117), elaborado en un establecimiento habilitado (RNE 14001641).",
  },
  {
    q: "¿Hacen envíos de alfajores desde Oberá a todo el país?",
    a: "Sí. Enviamos alfajores artesanales desde Oberá a Posadas, Eldorado, Puerto Iguazú y todas las localidades de Misiones, y también a Corrientes, Buenos Aires, Córdoba, Rosario y el resto de Argentina.",
  },
  {
    q: "¿Venden alfajores por mayor para comercios o eventos?",
    a: "Sí, vendemos alfajores artesanales por mayor a regionalerías, cafeterías, hoteles y comercios, y armamos cajas personalizadas para eventos, empresas y regalos regionales de Misiones.",
  },
  {
    q: "¿Qué otros productos regionales de Misiones ofrecen?",
    a: "Además de alfajores, elaboramos mermelada de rosella (flor de Jamaica) y miel pura de Misiones, ideales para regalar o acompañar el mate.",
  },
];

export const SERVICE_AREAS = [
  "Oberá",
  "Posadas",
  "Eldorado",
  "Puerto Iguazú",
  "Apóstoles",
  "Leandro N. Alem",
  "Campo Viera",
  "Aristóbulo del Valle",
  "San Vicente",
  "Misiones",
  "Corrientes",
  "Argentina",
];
