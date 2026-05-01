import { stats } from '@/lib/data/benefits';

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Sección principal"
      className="relative min-h-screen flex items-center pt-[72px]"
      style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #1e40af 60%, #0891b2 100%)',
        overflow: 'clip',
      }}
    >
      {/* Blobs */}
      <div className="absolute top-[-150px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-20 blur-[80px] animate-float" style={{ background: 'radial-gradient(circle, #a78bfa, #6366f1)' }} aria-hidden="true" />
      <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 blur-[80px] animate-float-delayed" style={{ background: 'radial-gradient(circle, #22d3ee, #3b82f6)' }} aria-hidden="true" />

      {/* Grid dots */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />

      {/* Main container — 2-col grid on lg */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — text content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-indigo-100 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide" role="status">
            <span className="w-[7px] h-[7px] bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            Soluciones Tecnológicas · México
          </div>

          {/* Title */}
          <h1 className="font-heading text-[clamp(2rem,5vw,3.6rem)] font-extrabold text-white leading-[1.1] mb-6">
            Tu infraestructura tecnológica{' '}en{' '}
            <span className="bg-gradient-to-r from-sky-200 to-indigo-300 bg-clip-text text-transparent">
              manos expertas
            </span>
          </h1>

          {/* Description */}
          <p className="text-[1rem] text-white/75 mb-10 leading-relaxed max-w-[520px]">
            Diseñamos, instalamos y mantenemos redes de alta disponibilidad, sistemas de seguridad y
            equipos audiovisuales para empresas que exigen confiabilidad y rendimiento.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-12">
            <a
              href="#servicios"
              id="hero-cta-services"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold text-[0.9rem] px-7 py-3.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.3)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3 19 12 5 21V3z"/></svg>
              Ver servicios
            </a>
            <a
              href="#contacto"
              id="hero-cta-contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold text-[0.9rem] px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.62 1.18h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              Contactar ahora
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/15" role="list">
            {stats.map((stat) => (
              <div key={stat.label} role="listitem">
                <div className="font-heading text-[1.8rem] font-extrabold text-white leading-none">{stat.value}</div>
                <div className="text-[0.75rem] text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating cards decoration */}
        <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
          <div className="relative w-[360px] h-[340px]">
            {[
              { emoji: '🌐', label: 'Red instalada y operativa', color: 'rgba(99,102,241,0.3)',  top: 0,   left: 20, delay: '0s'   },
              { emoji: '📷', label: 'Cámaras configuradas',      color: 'rgba(6,182,212,0.3)',   top: 120, left: 80, delay: '1.5s' },
              { emoji: '✅', label: 'Soporte 24/7 activo',        color: 'rgba(16,185,129,0.3)',  top: 240, left: 10, delay: '3s'   },
            ].map(({ emoji, label, color, top, left, delay }) => (
              <div
                key={label}
                className="absolute flex items-center gap-3 rounded-2xl px-5 py-3 text-white text-sm font-medium whitespace-nowrap shadow-2xl"
                style={{
                  top, left,
                  animation: `floatCard 5s ease-in-out infinite ${delay}`,
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: color }}>
                  {emoji}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
