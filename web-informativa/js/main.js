/**
 * main.js — KnoTech Web Informativa
 * Funcionalidades: Dark Mode, Hamburger Menu, Scroll suave,
 * Back-to-top, Año dinámico, Validación de formulario, Reveal on scroll
 */

'use strict';

// ============================================================
// DARK MODE TOGGLE
// ============================================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

/**
 * Aplica el tema y guarda la preferencia en localStorage
 * @param {'dark'|'light'} theme
 */
function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Cargar preferencia guardada o preferencia del sistema
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
})();

// Toggle al hacer clic
themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ============================================================
// NAVBAR — Scroll effect & Active links
// ============================================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link[data-section]');

// Añadir sombra al navbar al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
  updateActiveLink();
  toggleBackToTop();
}, { passive: true });

/**
 * Resalta el enlace de navegación de la sección visible
 */
function updateActiveLink() {
  const scrollY = window.scrollY + 100;

  navLinks.forEach(link => {
    const sectionId = link.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    if (!section) return;

    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

// Llamar al cargar para marcar la sección inicial
updateActiveLink();

// ============================================================
// HAMBURGER MENU
// ============================================================
const hamburger   = document.getElementById('hamburger');
const navMenu     = document.getElementById('navMenu');
const navOverlay  = document.getElementById('navOverlay');

function openMenu() {
  hamburger?.classList.add('open');
  navMenu?.classList.add('open');
  navOverlay?.classList.add('active');
  navOverlay?.style && (navOverlay.style.display = 'block');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger?.classList.remove('open');
  navMenu?.classList.remove('open');
  navOverlay?.classList.remove('active');
  setTimeout(() => {
    if (navOverlay && !navOverlay.classList.contains('active')) {
      navOverlay.style.display = 'none';
    }
  }, 300);
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  hamburger.classList.contains('open') ? closeMenu() : openMenu();
});

navOverlay?.addEventListener('click', closeMenu);

// Cerrar menú al hacer clic en un enlace de navegación
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Inicializar overlay oculto
if (navOverlay) navOverlay.style.display = 'none';

// ============================================================
// SCROLL SUAVE — Anclas internas
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(html).getPropertyValue('--nav-h') || '72', 10);
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ============================================================
// BOTÓN "VOLVER ARRIBA"
// ============================================================
const backToTop = document.getElementById('backToTop');

/**
 * Muestra u oculta el botón según el scroll
 */
function toggleBackToTop() {
  if (!backToTop) return;
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// AÑO DINÁMICO EN FOOTER
// ============================================================
const yearEl = document.getElementById('currentYear');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ============================================================
// VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ============================================================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

/**
 * Valida formato básico de email
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Muestra mensaje de feedback en el formulario
 * @param {string} message
 * @param {'error'|'success'} type
 */
function showFeedback(message, type) {
  if (!formFeedback) return;
  formFeedback.textContent = message;
  formFeedback.className   = `form-feedback ${type}`;
  formFeedback.style.display = 'block';

  if (type === 'success') {
    setTimeout(() => { formFeedback.style.display = 'none'; }, 5000);
  }
}

contactForm?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name    = (document.getElementById('name')?.value    || '').trim();
  const email   = (document.getElementById('email')?.value   || '').trim();
  const service = (document.getElementById('service')?.value || '');
  const message = (document.getElementById('message')?.value || '').trim();

  // Validaciones
  if (!name) {
    showFeedback('⚠️ Por favor ingresa tu nombre completo.', 'error');
    document.getElementById('name')?.focus();
    return;
  }

  if (!email) {
    showFeedback('⚠️ El email es obligatorio.', 'error');
    document.getElementById('email')?.focus();
    return;
  }

  if (!isValidEmail(email)) {
    showFeedback('⚠️ Por favor ingresa un email válido (ejemplo: tu@correo.com).', 'error');
    document.getElementById('email')?.focus();
    return;
  }

  if (!message || message.length < 10) {
    showFeedback('⚠️ El mensaje debe tener al menos 10 caracteres.', 'error');
    document.getElementById('message')?.focus();
    return;
  }

  // Simular envío
  const submitBtn = contactForm.querySelector('.btn-submit');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin"><path d="M21 12a9 9 0 1 1-6.2-8.56"/></svg>
      Enviando...
    `;
    submitBtn.style.opacity = '0.8';
  }

  setTimeout(() => {
    showFeedback('✅ ¡Mensaje enviado con éxito! Te contactaremos a la brevedad.', 'success');
    contactForm.reset();

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        Enviar mensaje
      `;
      submitBtn.style.opacity = '1';
    }
  }, 1500);
});

// ============================================================
// REVEAL ON SCROLL (Intersection Observer)
// ============================================================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ============================================================
// PROGRESS BARS — Animación al entrar en vista
// ============================================================
const progressBars = document.querySelectorAll('.progress-fill[data-width]');

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.getAttribute('data-width');
      progressObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
  bar.style.width = '0%';
  progressObserver.observe(bar);
});

// ============================================================
// AÑADIR CLASE spin AL CSS DINÁMICAMENTE
// ============================================================
const spinStyle = document.createElement('style');
spinStyle.textContent = `
  @keyframes spin { to { transform: rotate(360deg); } }
  .spin { animation: spin 0.9s linear infinite; }
`;
document.head.appendChild(spinStyle);
