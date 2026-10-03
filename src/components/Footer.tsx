export default function Footer() {
  return (
    <footer className="bg-crema-dark text-marron pt-20 pb-10 px-4 md:px-10 border-t border-marron/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 mb-16">
        
        <div className="max-w-sm">
          <h2 className="font-display text-4xl font-bold mb-4 text-vino-deep">Regional</h2>
          <p className="font-sans text-marron/70 mb-6">
            Alfajores artesanales premium. Un pedazo de la tierra colorada en cada bocado, directamente desde Oberá, Misiones.
          </p>
          <a href="mailto:hola@regionalalfajores.com.ar" className="font-sans font-semibold border-b border-marron hover:text-vino-deep hover:border-vino-deep transition-colors pb-1">
            hola@regionalalfajores.com.ar
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
          <div>
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs mb-6 text-marron/50">Navegación</h3>
            <ul className="flex flex-col gap-4 font-sans font-medium">
              <li><a href="#" className="hover:text-vino-deep transition-colors">La Historia</a></li>
              <li><a href="#" className="hover:text-vino-deep transition-colors">Ingredientes</a></li>
              <li><a href="#" className="hover:text-vino-deep transition-colors">Productos</a></li>
              <li><a href="#" className="hover:text-vino-deep transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs mb-6 text-marron/50">Social</h3>
            <ul className="flex flex-col gap-4 font-sans font-medium">
              <li><a href="#" aria-label="Instagram de Regional" className="hover:text-vino-deep transition-colors">Instagram</a></li>
              <li><a href="#" aria-label="TikTok de Regional" className="hover:text-vino-deep transition-colors">TikTok</a></li>
              <li><a href="#" aria-label="Facebook de Regional" className="hover:text-vino-deep transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-marron/10 gap-4">
        <p className="font-sans text-sm text-marron/60">
          © {new Date().getFullYear()} Regional Alfajores. Todos los derechos reservados.
        </p>
        <div className="flex gap-4 font-sans text-sm text-marron/60">
          <a href="#" className="hover:text-vino-deep">Privacidad</a>
          <a href="#" className="hover:text-vino-deep">Términos</a>
        </div>
      </div>
    </footer>
  );
}
