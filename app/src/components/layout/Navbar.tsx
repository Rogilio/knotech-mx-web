'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { href: '#inicio',      label: 'Inicio',      section: 'inicio'      },
  { href: '#servicios',   label: 'Servicios',   section: 'servicios'   },
  { href: '#beneficios',  label: 'Beneficios',  section: 'beneficios'  },
  { href: '#testimonios', label: 'Testimonios', section: 'testimonios' },
  { href: '#contacto',    label: 'Contacto',    section: 'contacto'    },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Scroll effect + active section tracker
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);

      const scrollY = window.scrollY + 100;
      for (const { section } of navLinks) {
        const el = document.getElementById(section);
        if (!el) continue;
        if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 72;
      const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  return (
    <>
      <header>
        <nav
          id="navbar"
          role="navigation"
          aria-label="Navegación principal"
          className={`fixed top-0 left-0 right-0 z-50 h-[72px] border-b transition-all duration-300
            bg-[var(--clr-nav-bg)] backdrop-blur-xl
            border-[var(--clr-border)]
            ${scrolled ? 'shadow-lg shadow-indigo-500/10' : ''}
          `}
        >
          <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6">

            {/* Logo */}
            <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-2.5 no-underline flex-shrink-0" aria-label="KnoTech - Inicio">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/35 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
                  <path d="M12 7v4M8.5 17l3-4M15.5 17l-3-4"/><path d="M7 19h10"/>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-[1.1rem] text-indigo-500">KnoTech</span>
                <span className="text-[0.62rem] text-slate-400 font-medium tracking-wide">Soluciones Tecnológicas</span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <ul id="navMenu" className="hidden md:flex items-center gap-1" role="list">
              {navLinks.map(({ href, label, section }) => (
                <li key={section}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    style={activeSection !== section ? { color: 'var(--clr-text-muted)' } : undefined}
                    className={`relative text-[0.9rem] font-medium px-3 py-2 rounded-lg transition-all duration-300
                      ${activeSection === section
                        ? 'text-indigo-500 bg-indigo-500/10'
                        : 'hover:text-indigo-500 hover:bg-indigo-500/8'
                      }`}
                    data-section={section}
                  >
                    {label}
                    {activeSection === section && (
                      <span className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Nav Actions */}
            <div className="flex items-center gap-2">
              {/* Dark mode toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Cambiar modo claro/oscuro"
                className="w-10 h-10 rounded-full border border-[var(--clr-border)] bg-[var(--clr-surface)] flex items-center justify-center text-[var(--clr-text)] transition-all duration-300 hover:bg-indigo-500/15 hover:rotate-[20deg] hover:shadow-sm"
              >
                {theme === 'dark' ? (
                  // Sun
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                  </svg>
                ) : (
                  // Moon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                  </svg>
                )}
              </button>

              {/* CTA */}
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                className="hidden md:inline-flex text-[0.85rem] font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-2 rounded-full shadow-lg shadow-indigo-500/35 transition-all duration-300 hover:opacity-90 hover:-translate-y-px hover:shadow-indigo-500/50"
                aria-label="Solicitar cotización"
              >
                Cotizar ahora
              </a>

              {/* Hamburger */}
              <button
                id="hamburger"
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden w-10 h-10 flex flex-col gap-[5px] items-center justify-center rounded-lg transition-colors hover:bg-indigo-500/10"
              >
                <span className={`block w-[22px] h-[2px] bg-[var(--clr-text)] rounded transition-transform duration-300 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`block w-[22px] h-[2px] bg-[var(--clr-text)] rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block w-[22px] h-[2px] bg-[var(--clr-text)] rounded transition-transform duration-300 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile overlay */}
        <div
          role="presentation"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        />

        {/* Mobile slide-in menu */}
        <ul
          id="navMenuMobile"
          role="list"
          className={`md:hidden fixed top-[72px] right-0 w-[min(320px,85vw)] h-[calc(100vh-72px)] z-40
            bg-[var(--clr-bg-alt)] border-l border-[var(--clr-border)] shadow-2xl
            flex flex-col gap-1 p-5 transition-transform duration-300
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {navLinks.map(({ href, label, section }) => (
            <li key={section}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`block w-full px-4 py-3.5 rounded-xl text-base font-medium transition-colors
                  ${activeSection === section
                    ? 'text-indigo-500 bg-indigo-500/10'
                    : 'text-[var(--clr-text-muted)] hover:text-indigo-500 hover:bg-indigo-500/8'
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
