const footerServices = [
  { label: 'Instalación de Redes', href: '#servicios' },
  { label: 'Cámaras de Seguridad', href: '#servicios' },
  { label: 'Audio Visual', href: '#servicios' },
  { label: 'Accesos Biométricos', href: '#servicios' },
  { label: 'Soporte Técnico', href: '#servicios' },
];

const footerCompany = [
  { label: 'Inicio', href: '#inicio' },
  { label: '¿Por qué nosotros?', href: '#beneficios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

const footerContact = [
  { label: '+52 81 1234-5678', href: 'tel:+528112345678' },
  { label: 'contacto@knotech.mx', href: 'mailto:contacto@knotech.mx' },
  { label: 'Solicitar cotización', href: '#contacto' },
];

function SocialButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-500/40 hover:text-indigo-400 hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
                  <path d="M12 7v4M8.5 17l3-4M15.5 17l-3-4"/><path d="M7 19h10"/>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-[1.1rem] text-indigo-400">KnoTech</span>
                <span className="text-[0.62rem] text-slate-500 font-medium tracking-wide">Soluciones Tecnológicas</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Conectamos empresas con la tecnología que necesitan para crecer. Confiabilidad, calidad y soporte experto en cada proyecto.
            </p>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <p className="font-heading font-semibold text-white mb-4 text-sm tracking-wide uppercase">Servicios</p>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Empresa */}
          <nav aria-label="Empresa">
            <p className="font-heading font-semibold text-white mb-4 text-sm tracking-wide uppercase">Empresa</p>
            <ul className="flex flex-col gap-2.5">
              {footerCompany.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <nav aria-label="Contacto rápido">
            <p className="font-heading font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contacto</p>
            <ul className="flex flex-col gap-2.5">
              {footerContact.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} KnoTech. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2" aria-label="Redes sociales">
            {/* LinkedIn */}
            <SocialButton href="#" label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"/>
                <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </SocialButton>
            {/* Facebook */}
            <SocialButton href="#" label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>
              </svg>
            </SocialButton>
            {/* WhatsApp */}
            <SocialButton href="#" label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>
              </svg>
            </SocialButton>
            {/* Instagram */}
            <SocialButton href="#" label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </SocialButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
