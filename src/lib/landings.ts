// Keyword-targeted landing pages for local SEO.
// Each page targets a cluster of search terms with unique, useful content.

export type Landing = {
  slug: string;
  title: string; // <title>
  description: string; // meta description
  h1: string;
  eyebrow: string;
  intro: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  sections: { h2: string; body: string[] }[];
  highlights: string[];
};

export const LANDINGS: Landing[] = [
  {
    slug: "alfajores-obera",
    title: "Alfajores en Oberá — Alfajor Artesanal de Oberá, Misiones",
    description:
      "Comprá alfajores artesanales en Oberá, Misiones. Alfajor de fécula de mandioca, yerba mate y dulce de leche elaborado en Oberá. Pedidos por WhatsApp, retiro y envíos.",
    h1: "Alfajores artesanales en Oberá, Misiones",
    eyebrow: "Alfajor Oberá",
    intro:
      "Regional nace en Oberá, la Capital Nacional del Inmigrante, en el corazón de Misiones. Acá elaboramos cada alfajor de forma artesanal, en pequeñas tandas, con ingredientes de la tierra colorada.",
    keywords: ["alfajores Oberá", "alfajor Oberá", "alfajores artesanales Oberá", "dónde comprar alfajores en Oberá"],
    image: "/img_alf/alf2.jpg",
    imageAlt: "Alfajor artesanal elaborado en Oberá, Misiones",
    highlights: ["Elaborados en Oberá", "Retiro en el día", "Pedidos por WhatsApp", "Cajas para regalo"],
    sections: [
      {
        h2: "El alfajor de Oberá con identidad misionera",
        body: [
          "Nuestro alfajor de Oberá combina una masa suave de fécula de mandioca con abundante dulce de leche y un toque de yerba mate. Lo terminamos con miel pura de monte y un baño de merengue que se deshace en la boca.",
          "Es el sabor que los obereños eligen para acompañar el mate, regalar a quienes nos visitan o llevar de recuerdo después de la Fiesta Nacional del Inmigrante.",
        ],
      },
      {
        h2: "¿Dónde comprar alfajores en Oberá?",
        body: [
          "Hacé tu pedido por WhatsApp al +54 9 3755 297547 y coordinamos el retiro en Oberá o la entrega en tu domicilio. Atendemos de lunes a viernes de 9 a 18 h y sábados de 9 a 13 h.",
          "También abastecemos a regionalerías, cafeterías y hoteles de Oberá que quieran ofrecer un alfajor artesanal local a sus clientes.",
        ],
      },
      {
        h2: "Alfajores de Oberá para regalar",
        body: [
          "Armamos cajas de alfajores artesanales combinadas con mermelada de rosella y miel pura de Misiones: el regalo regional perfecto para turistas, empresas y eventos.",
        ],
      },
    ],
  },
  {
    slug: "alfajores-misiones",
    title: "Alfajores de Misiones — El Alfajor Misionero Artesanal",
    description:
      "Alfajores de Misiones elaborados con fécula de mandioca, yerba mate y miel de monte. El alfajor misionero artesanal de Regional, con envíos a Posadas, Iguazú, Eldorado y toda la provincia.",
    h1: "Alfajores de Misiones: el auténtico alfajor misionero",
    eyebrow: "Alfajor Misiones",
    intro:
      "Misiones tiene sabores únicos: la mandioca, la yerba mate y la miel de sus montes. Con ellos creamos un alfajor misionero artesanal que lleva la tierra colorada en cada bocado.",
    keywords: ["alfajores Misiones", "alfajor Misiones", "alfajor misionero", "alfajores de Misiones"],
    image: "/img_alf/caja.jpg",
    imageAlt: "Caja de alfajores de Misiones Regional",
    highlights: ["Ingredientes misioneros", "Envíos a toda la provincia", "Venta por mayor", "Ideal para turistas"],
    sections: [
      {
        h2: "¿Qué hace único al alfajor de Misiones?",
        body: [
          "La fécula de mandioca le da al alfajor misionero una textura liviana y suave, distinta a la de los alfajores tradicionales de harina de trigo. Además, es una base naturalmente libre de gluten.",
          "Sumamos yerba mate, el cultivo emblema de Misiones, y miel pura de productores locales. Cada ingrediente cuenta la historia de nuestra provincia.",
        ],
      },
      {
        h2: "Envíos de alfajores en toda Misiones",
        body: [
          "Desde Oberá enviamos alfajores a Posadas, Eldorado, Puerto Iguazú, Apóstoles, Leandro N. Alem, Aristóbulo del Valle, San Vicente, Campo Viera y todas las localidades de la provincia.",
          "Regionalerías y comercios turísticos de Misiones pueden sumar nuestros alfajores con precios por mayor.",
        ],
      },
      {
        h2: "Un recuerdo de Misiones",
        body: [
          "Si visitaste las Cataratas del Iguazú, las Misiones Jesuíticas o los Saltos del Moconá, llevate el sabor de Misiones a casa: alfajores, mermelada de rosella y miel pura en una misma caja.",
        ],
      },
    ],
  },
  {
    slug: "alfajores-artesanales",
    title: "Alfajores Artesanales de Oberá, Misiones, Argentina",
    description:
      "Alfajores artesanales hechos a mano en Oberá, Misiones, Argentina. Alfajor artesanal de fécula de mandioca, dulce de leche y miel. Envíos a Buenos Aires, Córdoba, Rosario y todo el país.",
    h1: "Alfajores artesanales de Oberá, Misiones, Argentina",
    eyebrow: "Alfajor artesanal",
    intro:
      "Un alfajor artesanal se nota desde el primer bocado. En Regional elaboramos nuestros alfajores a mano, sin apuros y con ingredientes nobles, desde Oberá, Misiones, para toda Argentina.",
    keywords: [
      "alfajores artesanales",
      "alfajor artesanal",
      "alfajor artesanal Oberá Misiones Argentina",
      "alfajores artesanales Argentina",
    ],
    image: "/img_alf/alf3.jpg",
    imageAlt: "Alfajores artesanales hechos a mano en Oberá, Misiones, Argentina",
    highlights: ["Hechos a mano", "Pequeñas tandas", "Ingredientes nobles", "Envíos a todo el país"],
    sections: [
      {
        h2: "Cómo elaboramos nuestros alfajores artesanales",
        body: [
          "Preparamos la masa con fécula de mandioca, la horneamos en pequeñas tandas y rellenamos cada alfajor a mano con dulce de leche abundante. Luego lo bañamos y lo dejamos reposar el tiempo justo.",
          "No usamos procesos industriales: cada alfajor artesanal es revisado uno por uno antes de empaquetarse.",
        ],
      },
      {
        h2: "Alfajores artesanales con envío a toda Argentina",
        body: [
          "Enviamos nuestros alfajores artesanales desde Oberá, Misiones, a Buenos Aires, Córdoba, Rosario, Mendoza, Corrientes, Resistencia y cualquier punto del país.",
          "Escribinos por WhatsApp para conocer variedades, precios y costos de envío actualizados.",
        ],
      },
      {
        h2: "Para empresas, eventos y regalos",
        body: [
          "Cajas personalizadas de alfajores artesanales para regalos empresariales, casamientos, cumpleaños y eventos. Un detalle distinto con sabor a Misiones.",
        ],
      },
    ],
  },
];

export function getLanding(slug: string) {
  return LANDINGS.find((l) => l.slug === slug);
}
