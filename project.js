const projectTranslations = {
  es: {
    title: "Dra. Ivana Kosak — Proyecto de FM Studio",
    description: "Conocé el proyecto web de la Dra. Ivana Kosak, diseñado y desarrollado por FM Studio.",
    skip: "Ir al contenido",
    "nav-projects": "Proyectos", "nav-about": "Sobre mí", "nav-services": "Qué hago", "nav-contact": "Contacto", "nav-cta": "Hablemos",
    "hero-type": "WEB PROFESIONAL · SALUD", "hero-status": "SITIO PUBLICADO", "hero-overline": "PROYECTO SELECCIONADO",
    "hero-lead": "Una presencia digital para contar una forma de cuidar: cercana, integral y profundamente humana.",
    "view-live": "Visitar el sitio online", "art-stamp": "DISEÑO & DESARROLLO WEB", "art-left": "CLARIDAD<br />+ CALIDEZ", "pair-word": "UNA HISTORIA<br />PROPIA ↗",
    "overview-label": "EL PROYECTO", "overview-title": "Una voz propia<br /><em>también en la web.</em>",
    "brief-title": "El punto de partida", "brief-copy": "Ivana necesitaba un espacio para presentar su enfoque de medicina integrativa y reunir, de forma clara, la información que sus consultantes buscan antes de escribirle.",
    "response-title": "La respuesta", "response-copy": "Diseñé y desarrollé un sitio que combina su historia, tratamientos y vías de contacto. La identidad visual acompaña su práctica con una presencia cálida y profesional.",
    "meta-one": "ESTRATEGIA DE CONTENIDO", "meta-two": "DISEÑO WEB", "meta-three": "DESARROLLO",
    "photo-caption": "IMÁGENES REALES, UNA HISTORIA REAL", "decisions-label": "DECISIONES DE DISEÑO",
    "decisions-title": "Claridad para explorar.<br /><em>Confianza para conectar.</em>",
    "decision-one-title": "Una presentación personal", "decision-one-copy": "Las fotos y la voz de Ivana ocupan el centro. El sitio explica quién es y cómo trabaja antes de pedir una acción.",
    "decision-two-title": "Servicios bien organizados", "decision-two-copy": "Tratamientos, REPROCANN, trayectoria y turnos tienen recorridos propios para encontrar la información sin perderse.",
    "decision-three-title": "Contacto a mano", "decision-three-copy": "Desde cualquier sección es fácil llegar a la página de turnos y conocer las modalidades de atención.",
    "outro-kicker": "EL PROYECTO, EN VIVO", "outro-title": "La mejor forma de verlo<br />es <em>recorrerlo.</em>",
    "back-projects": "Volver a proyectos", "footer-copy": "Diseño web directo, hecho con intención."
  },
  en: {
    title: "Dr. Ivana Kosak — FM Studio Project",
    description: "Explore Dr. Ivana Kosak's website, designed and developed by FM Studio.",
    skip: "Skip to content",
    "nav-projects": "Projects", "nav-about": "About me", "nav-services": "What I do", "nav-contact": "Contact", "nav-cta": "Let's talk",
    "hero-type": "PROFESSIONAL WEBSITE · HEALTHCARE", "hero-status": "LIVE WEBSITE", "hero-overline": "SELECTED PROJECT",
    "hero-lead": "A digital presence that expresses a way of caring: personal, holistic, and deeply human.",
    "view-live": "Visit the live website", "art-stamp": "WEB DESIGN & DEVELOPMENT", "art-left": "CLARITY<br />+ WARMTH", "pair-word": "HER OWN<br />STORY ↗",
    "overview-label": "THE PROJECT", "overview-title": "A voice of her own<br /><em>on the web, too.</em>",
    "brief-title": "The starting point", "brief-copy": "Ivana needed a place to explain her integrative approach to medicine and bring together the information people look for before contacting her.",
    "response-title": "The response", "response-copy": "I designed and developed a website that brings her story, treatments, and contact options together. Its visual identity gives her practice a warm, professional presence.",
    "meta-one": "CONTENT STRATEGY", "meta-two": "WEB DESIGN", "meta-three": "DEVELOPMENT",
    "photo-caption": "REAL IMAGES, A REAL STORY", "decisions-label": "DESIGN DECISIONS",
    "decisions-title": "Clarity to explore.<br /><em>Confidence to connect.</em>",
    "decision-one-title": "A personal introduction", "decision-one-copy": "Ivana's photographs and voice lead the experience. The website explains who she is and how she works before asking visitors to take action.",
    "decision-two-title": "Well-organized services", "decision-two-copy": "Treatments, REPROCANN, her background, and appointments each have a clear path so visitors can find what they need.",
    "decision-three-title": "Easy to get in touch", "decision-three-copy": "The appointments page and care options are easy to reach from every section.",
    "outro-kicker": "EXPLORE THE LIVE PROJECT", "outro-title": "The best way to see it<br />is to <em>explore it.</em>",
    "back-projects": "Back to projects", "footer-copy": "Direct web design, made with intention."
  }
};

function setProjectLanguage(language) {
  const copy = projectTranslations[language] ?? projectTranslations.es;
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('.main-nav').setAttribute('aria-label', language === 'en' ? 'Main navigation' : 'Navegación principal');
  document.querySelector('.language-switch').setAttribute('aria-label', language === 'en' ? 'Select language' : 'Seleccionar idioma');
  document.querySelector('.case-hero-art').setAttribute('aria-label', language === 'en' ? 'Portrait of Dr. Ivana Kosak on a composition inspired by her visual identity' : 'Retrato de la Dra. Ivana Kosak sobre una composición inspirada en su identidad visual');
  document.querySelector('.case-photo').setAttribute('aria-label', language === 'en' ? 'Ivana working in her office' : 'Ivana trabajando en su consultorio');
  document.querySelector('.case-image-pair').setAttribute('aria-label', language === 'en' ? 'Project photographs' : 'Fotografías del proyecto');
  try { localStorage.setItem('fmstudio-language', language); } catch { /* Storage is optional. */ }
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setProjectLanguage(button.dataset.language));
});
document.querySelector('#year').textContent = new Date().getFullYear();
try {
  const savedLanguage = localStorage.getItem('fmstudio-language');
  if (savedLanguage === 'en') setProjectLanguage('en');
} catch { /* Spanish is the default language. */ }
