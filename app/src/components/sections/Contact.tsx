'use client';

import { useState, useRef } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string; type: 'error' | 'success' } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFeedback(null);

    if (!form.name.trim()) {
      setFeedback({ message: '⚠️ Por favor ingresa tu nombre completo.', type: 'error' });
      return;
    }
    if (!form.email.trim()) {
      setFeedback({ message: '⚠️ El email es obligatorio.', type: 'error' });
      return;
    }
    if (!isValidEmail(form.email)) {
      setFeedback({ message: '⚠️ Por favor ingresa un email válido (ejemplo: tu@correo.com).', type: 'error' });
      return;
    }
    if (form.message.trim().length < 10) {
      setFeedback({ message: '⚠️ El mensaje debe tener al menos 10 caracteres.', type: 'error' });
      return;
    }

    setLoading(true);
    // Simulated send — replace with real Server Action or API route later
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setFeedback({ message: '✅ ¡Mensaje enviado con éxito! Te contactaremos a la brevedad.', type: 'success' });
    setForm(initialForm);
    setTimeout(() => setFeedback(null), 5000);
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-[var(--clr-border)] bg-[var(--clr-surface)] text-[var(--clr-text)] placeholder:text-[var(--clr-text-muted)] text-sm outline-none transition-all duration-300 focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 focus:bg-[var(--clr-surface-hover)]';

  return (
    <section id="contacto" aria-labelledby="contact-title" className="py-24 bg-[var(--clr-bg-alt)]">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.75rem] font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-4">
            ¿Listo para comenzar?
          </span>
          <h2 id="contact-title" className="font-heading text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[var(--clr-text)] leading-tight mb-4">
            Hablemos de tu <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">proyecto</span>
          </h2>
          <p className="text-[1.05rem] text-[var(--clr-text-muted)] max-w-[560px] mx-auto">
            Cuéntanos lo que necesitas y te enviamos una propuesta personalizada sin costo en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact info */}
          <div>
            <h3 className="font-heading text-xl font-bold text-[var(--clr-text)] mb-3">¿Cómo podemos ayudarte?</h3>
            <p className="text-[var(--clr-text-muted)] text-sm leading-relaxed mb-8">
              Nos especializamos en proyectos desde la pequeña oficina hasta grandes complejos corporativos.
              Nuestro equipo técnico está disponible para asesorarte sin compromiso.
            </p>

            <address className="flex flex-col gap-4 not-italic">
              {[
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.62 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89"/></svg>,
                  text: '+52 (81) 1234-5678',
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                  text: 'contacto@knotech.mx',
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
                  text: 'Monterrey, Nuevo León, México',
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                  text: 'Lun–Sáb, 8:00 AM – 7:00 PM',
                },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-indigo-500/25">
                    {icon}
                  </div>
                  <span className="text-sm text-[var(--clr-text)]">{text}</span>
                </div>
              ))}
            </address>
          </div>

          {/* Form */}
          <div
            className="rounded-2xl p-8 shadow-xl"
            style={{ background: 'var(--clr-surface)', border: '1px solid var(--clr-border)' }}
          >
            <form
              ref={formRef}
              id="contactForm"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulario de contacto"
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-[var(--clr-text)]">
                    Nombre completo <span aria-hidden="true" className="text-rose-500">*</span>
                  </label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                    placeholder="Ej. Juan Pérez" autoComplete="name" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-[var(--clr-text)]">
                    Correo electrónico <span aria-hidden="true" className="text-rose-500">*</span>
                  </label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="tu@empresa.com" autoComplete="email" required className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-[var(--clr-text)]">
                  Teléfono <span className="text-[var(--clr-text-muted)] font-normal">(opcional)</span>
                </label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                  placeholder="+52 81 1234 5678" autoComplete="tel" className={inputClass} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-sm font-medium text-[var(--clr-text)]">
                  Servicio de interés
                </label>
                <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClass}>
                  <option value="">Selecciona un servicio…</option>
                  <option value="redes">Instalación de Redes</option>
                  <option value="camaras">Instalación de Cámaras</option>
                  <option value="audiovisual">Equipo Audio Visual</option>
                  <option value="biometrico">Accesos Biométricos</option>
                  <option value="soporte">Soporte y Mantenimiento</option>
                  <option value="varios">Varios servicios</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-[var(--clr-text)]">
                  ¿Cómo podemos ayudarte? <span aria-hidden="true" className="text-rose-500">*</span>
                </label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange}
                  placeholder="Describe brevemente tu proyecto o necesidad…" required rows={4}
                  className={`${inputClass} resize-none`} />
              </div>

              <button
                id="submitBtn"
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-[0.95rem] py-3.5 px-8 rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    Enviar mensaje
                  </>
                )}
              </button>

              {feedback && (
                <div
                  role="alert"
                  aria-live="polite"
                  className="text-sm font-medium px-4 py-3 rounded-xl"
                  style={{
                    background: feedback.type === 'success' ? 'rgba(16,185,129,0.1)' : 'rgba(244,63,94,0.1)',
                    color: feedback.type === 'success' ? '#059669' : '#e11d48',
                    border: `1px solid ${feedback.type === 'success' ? 'rgba(16,185,129,0.2)' : 'rgba(244,63,94,0.2)'}`,
                  }}
                >
                  {feedback.message}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
