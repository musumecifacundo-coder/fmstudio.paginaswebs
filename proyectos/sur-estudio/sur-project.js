const surTranslations = {
  es: {
    title: "Sur Estudio — Proyecto de FM Studio",
    description: "Conocé Sur Estudio, una muestra de e-commerce diseñada y desarrollada por FM Studio.",
    skip: "Ir al contenido",
    "nav-projects": "Proyectos", "nav-about": "Sobre mí", "nav-services": "Qué hago", "nav-contact": "Contacto", "nav-cta": "Hablemos",
    "hero-type": "E-COMMERCE · INDUMENTARIA", "hero-status": "DEMO NAVEGABLE", "hero-overline": "PROYECTO SELECCIONADO",
    "hero-lead": "Una tienda de muestra donde la campaña invita a mirar y el catálogo ayuda a encontrar.",
    "view-demo": "Recorrer la demo", "hero-art-label": "Campaña visual de Sur Estudio", "hero-art-alt": "Modelo con blazer de lino en la campaña de Sur Estudio",
    "art-stamp": "DISEÑO & DESARROLLO WEB", "overview-label": "EL PROYECTO",
    "overview-title": "Una tienda para mirar,<br /><em>encontrar y elegir.</em>",
    "brief-title": "El punto de partida", "brief-copy": "Sur Estudio es una marca ficticia de indumentaria y accesorios. La creé para explorar cómo una campaña editorial puede convivir con un catálogo fácil de usar.",
    "response-title": "La respuesta", "response-copy": "Diseñé una demo con 24 productos, búsqueda, filtros y una bolsa de muestra. También preparé un tema para WordPress y WooCommerce.",
    "meta-one": "DISEÑO UX", "meta-two": "IDENTIDAD VISUAL", "meta-three": "DESARROLLO WEB",
    "photo-label": "Vista de la portada de Sur Estudio", "photo-alt": "Portada de la tienda Sur Estudio con su campaña principal", "photo-caption": "DE LA CAMPAÑA A LA COLECCIÓN",
    "decisions-label": "DECISIONES DE DISEÑO", "decisions-title": "Una historia para descubrir.<br /><em>Un catálogo para decidir.</em>",
    "decision-one-title": "Entrar por la campaña", "decision-one-copy": "La portada presenta la identidad visual y ofrece un camino directo a la colección.",
    "decision-two-title": "Encontrar sin rodeos", "decision-two-copy": "La búsqueda y los filtros organizan los productos en Sastrería, Esenciales y Accesorios.",
    "decision-three-title": "Probar el recorrido", "decision-three-copy": "La bolsa permite agregar productos y ver el subtotal. La demo no procesa pagos.",
    "pair-label": "Vistas de Sur Estudio", "pair-a-alt": "Catálogo de Sur Estudio con filtros y productos", "pair-b-alt": "Segunda campaña de indumentaria de Sur Estudio", "pair-word": "MIRAR.<br />ELEGIR. ↗",
    "outro-kicker": "EXPLORÁ LA DEMO", "outro-title": "La mejor forma de verla<br />es <em>recorrerla.</em>", "back-projects": "Volver a proyectos",
    "demo-note": "Los productos y precios son de muestra. No se realizan compras ni pagos.", "footer-copy": "Diseño web directo, hecho con intención."
  },
  en: {
    title: "Sur Estudio — FM Studio Project",
    description: "Explore Sur Estudio, an e-commerce concept designed and developed by FM Studio.",
    skip: "Skip to content",
    "nav-projects": "Projects", "nav-about": "About me", "nav-services": "What I do", "nav-contact": "Contact", "nav-cta": "Let's talk",
    "hero-type": "E-COMMERCE · FASHION", "hero-status": "INTERACTIVE DEMO", "hero-overline": "SELECTED PROJECT",
    "hero-lead": "A concept store where the campaign invites you in and the catalog helps you find what you need.",
    "view-demo": "Explore the demo", "hero-art-label": "Sur Estudio fashion campaign", "hero-art-alt": "Model wearing a linen blazer in the Sur Estudio campaign",
    "art-stamp": "WEB DESIGN & DEVELOPMENT", "overview-label": "THE PROJECT",
    "overview-title": "A store to browse,<br /><em>find and choose.</em>",
    "brief-title": "The starting point", "brief-copy": "Sur Estudio is a fictional fashion and accessories brand. I created it to explore how an editorial campaign can work alongside an easy-to-use catalog.",
    "response-title": "The response", "response-copy": "I designed a demo with 24 products, search, filters and a sample cart. I also prepared a theme for WordPress and WooCommerce.",
    "meta-one": "UX DESIGN", "meta-two": "VISUAL IDENTITY", "meta-three": "WEB DEVELOPMENT",
    "photo-label": "Sur Estudio homepage preview", "photo-alt": "Sur Estudio store homepage with its main campaign", "photo-caption": "FROM CAMPAIGN TO COLLECTION",
    "decisions-label": "DESIGN DECISIONS", "decisions-title": "A story to discover.<br /><em>A catalog to choose from.</em>",
    "decision-one-title": "Lead with the campaign", "decision-one-copy": "The homepage sets the visual tone and offers a direct path to the collection.",
    "decision-two-title": "Find things easily", "decision-two-copy": "Search and filters organize products into Tailoring, Essentials and Accessories.",
    "decision-three-title": "Try the shopping flow", "decision-three-copy": "The cart lets visitors add items and see a subtotal. The demo does not process payments.",
    "pair-label": "Sur Estudio project previews", "pair-a-alt": "Sur Estudio catalog with filters and products", "pair-b-alt": "Sur Estudio's second fashion campaign", "pair-word": "BROWSE.<br />CHOOSE. ↗",
    "outro-kicker": "EXPLORE THE DEMO", "outro-title": "The best way to see it<br />is to <em>explore it.</em>", "back-projects": "Back to projects",
    "demo-note": "Products and prices are for demonstration only. No purchases or payments are made.", "footer-copy": "Direct web design, made with intention."
  }
};

function setSurLanguage(language) {
  const copy = surTranslations[language] ?? surTranslations.es;
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value !== undefined) element.setAttribute('alt', value);
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('.main-nav').setAttribute('aria-label', language === 'en' ? 'Main navigation' : 'Navegación principal');
  document.querySelector('.language-switch').setAttribute('aria-label', language === 'en' ? 'Select language' : 'Seleccionar idioma');
  try { localStorage.setItem('fmstudio-language', language); } catch { /* Storage is optional. */ }
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setSurLanguage(button.dataset.language));
});
document.querySelector('#year').textContent = new Date().getFullYear();
try {
  const savedLanguage = localStorage.getItem('fmstudio-language');
  if (savedLanguage === 'en') setSurLanguage('en');
} catch { /* Spanish is the default language. */ }
