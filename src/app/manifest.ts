import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Regional Alfajores — Oberá, Misiones",
    short_name: "Regional",
    description: "Alfajores artesanales de Oberá, Misiones, Argentina.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6EF",
    theme_color: "#5A0C0E",
    lang: "es-AR",
    icons: [{ src: "/img_alf/logoalf.png", sizes: "512x512", type: "image/png" }],
  };
}
