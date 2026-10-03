import puppeteer from "puppeteer";

(async () => {
  try {
    console.log("🔍 Iniciando verificación completa...\n");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // ═══════════════════════════════════════
    // 1. DESKTOP VIEWPORT
    // ═══════════════════════════════════════
    await page.setViewport({ width: 1440, height: 900 });
    console.log("📺 Viewport Desktop: 1440x900");
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
    await page.screenshot({ path: "screenshot_desktop.png", fullPage: true });
    console.log("📸 Screenshot desktop guardada.\n");

    // ═══════════════════════════════════════
    // 2. MOBILE VIEWPORT
    // ═══════════════════════════════════════
    await page.setViewport({ width: 375, height: 812 });
    await page.reload({ waitUntil: "networkidle0" });
    await page.screenshot({ path: "screenshot_mobile.png", fullPage: true });
    console.log("📱 Screenshot mobile guardada.\n");

    // ═══════════════════════════════════════
    // 3. DOM VERIFICATIONS
    // ═══════════════════════════════════════
    const checks = await page.evaluate(() => {
      const q = (s) => document.querySelector(s);
      const qa = (s) => document.querySelectorAll(s).length;
      const text = (s) => document.querySelector(s)?.textContent?.trim() || "";

      return {
        // Structure
        hasNav: !!q("nav"),
        hasH1: !!q("h1"),
        h1Count: qa("h1"),
        hasH2: qa("h2"),
        hasFooter: !!q("footer"),
        hasFavicon: !!q("link[rel='icon']"),

        // Branding
        logoImages: qa("img[alt*='Regional']"),
        hasVideoHero: !!q("video"),

        // Sections
        hasProductos: !!q("#productos"),
        hasNosotros: !!q("#nosotros"),
        hasGaleria: !!q("#galeria"),
        hasContacto: !!q("#contacto"),

        // Contact info
        hasWhatsAppLink: qa("a[href*='wa.me']"),
        hasPhoneLink: qa("a[href*='tel:']"),
        hasMailInfo: !!text("footer")?.includes("contacto@"),

        // Form
        hasForm: !!q("form"),
        formInputs: qa("form input"),
        formTextarea: qa("form textarea"),
        formButton: qa("form button[type='submit']"),

        // Social
        hasInstagramLink: qa("a[href*='instagram']"),
        hasFacebookLink: qa("a[href*='facebook']"),

        // SEO
        htmlLang: document.documentElement.lang,

        // Legal
        hasPrivacyLink: !!Array.from(document.querySelectorAll("a")).find((a) =>
          a.textContent?.toLowerCase().includes("privacidad")
        ),
        hasTermsLink: !!Array.from(document.querySelectorAll("a")).find((a) =>
          a.textContent?.toLowerCase().includes("término")
        ),
        hasCertLink: !!Array.from(document.querySelectorAll("a")).find((a) =>
          a.textContent?.toLowerCase().includes("certificacion")
        ),
      };
    });

    console.log("═══════════════════════════════════════");
    console.log("     AUDITORÍA WEB — REGIONAL");
    console.log("═══════════════════════════════════════\n");

    const pass = (msg) => console.log(`  ✅ ${msg}`);
    const warn = (msg) => console.log(`  ⚠️  ${msg}`);
    const fail = (msg) => console.log(`  ❌ ${msg}`);

    // 1. Responsive
    console.log("📐 RESPONSIVE (Mobile-First)");
    pass("Screenshots tomadas en 375px y 1440px");

    // 2. Navigation
    console.log("\n🧭 NAVEGACIÓN CLARA");
    checks.hasNav ? pass("Navbar detectada") : fail("Falta navbar");
    checks.logoImages >= 1 ? pass(`Logo de marca presente (${checks.logoImages} imágenes)`) : fail("No se encontró logo");

    // 3. Content Structure
    console.log("\n📝 ESTRUCTURA DE CONTENIDO");
    checks.h1Count === 1 ? pass("Un solo H1 en la página") : warn(`H1 count: ${checks.h1Count}`);
    checks.hasH2 >= 4 ? pass(`${checks.hasH2} secciones H2 detectadas`) : warn(`Solo ${checks.hasH2} H2s`);
    checks.hasFooter ? pass("Footer presente") : fail("Falta footer");

    // 4. Sections
    console.log("\n📦 SECCIONES CLAVE");
    checks.hasProductos ? pass("Sección #productos") : fail("Falta #productos");
    checks.hasNosotros ? pass("Sección #nosotros (About)") : fail("Falta #nosotros");
    checks.hasGaleria ? pass("Sección #galeria") : fail("Falta #galeria");
    checks.hasContacto ? pass("Sección #contacto") : fail("Falta #contacto");

    // 5. Contact Info
    console.log("\n📞 CONTACTO VISIBLE");
    checks.hasWhatsAppLink >= 1 ? pass(`WhatsApp links: ${checks.hasWhatsAppLink}`) : fail("Falta WhatsApp");
    checks.hasPhoneLink >= 1 ? pass("Teléfono clickeable") : warn("Teléfono no clickeable");
    checks.hasMailInfo ? pass("Email presente") : warn("Email no encontrado en footer");

    // 6. Form
    console.log("\n📋 FORMULARIO DE CONTACTO");
    checks.hasForm ? pass("Formulario detectado") : fail("Falta formulario");
    checks.formInputs >= 2 ? pass(`${checks.formInputs} campos de input`) : warn("Pocos inputs");
    checks.formTextarea >= 1 ? pass("Textarea presente") : warn("Sin textarea");
    checks.formButton >= 1 ? pass("Botón de envío") : fail("Sin botón submit");

    // 7. Social
    console.log("\n🌐 REDES SOCIALES");
    checks.hasInstagramLink >= 1 ? pass("Instagram integrado") : warn("Falta Instagram");
    checks.hasFacebookLink >= 1 ? pass("Facebook integrado") : warn("Falta Facebook");

    // 8. SEO
    console.log("\n🔍 SEO");
    checks.htmlLang === "es" ? pass("HTML lang='es'") : warn(`Lang: ${checks.htmlLang}`);

    // 9. Legal
    console.log("\n⚖️  LEGALES");
    checks.hasPrivacyLink ? pass("Link de privacidad") : warn("Falta link de privacidad");
    checks.hasTermsLink ? pass("Link de términos") : warn("Falta link de términos");
    checks.hasCertLink ? pass("Link de certificaciones") : warn("Falta link de certificaciones");

    // 10. Branding
    console.log("\n🎨 BRANDING");
    checks.hasVideoHero ? pass("Video en Hero") : warn("Sin video en hero");
    checks.logoImages >= 2 ? pass("Logo presente en múltiples secciones") : warn("Logo solo en 1 lugar");

    console.log("\n═══════════════════════════════════════");
    console.log("     AUDITORÍA COMPLETADA");
    console.log("═══════════════════════════════════════\n");

    await browser.close();
  } catch (err) {
    console.error("Error:", err);
  }
})();
