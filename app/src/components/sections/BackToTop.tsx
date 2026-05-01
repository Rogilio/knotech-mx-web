'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      id="backToTop"
      onClick={scrollToTop}
      aria-label="Volver al inicio de la página"
      title="Volver arriba"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/40 transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/60
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
  );
}
