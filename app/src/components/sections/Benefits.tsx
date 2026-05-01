'use client';

import { useEffect, useRef } from 'react';
import { benefits, metrics } from '@/lib/data/benefits';
import BenefitItem from '@/components/ui/BenefitItem';

export default function Benefits() {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animate progress bars on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLDivElement;
            const width = bar.getAttribute('data-width') ?? '0%';
            bar.style.width = width;
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((bar) => {
      if (bar) {
        bar.style.width = '0%';
        observer.observe(bar);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="beneficios" aria-labelledby="benefits-title" className="relative py-24 bg-[var(--clr-bg-alt)] overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-indigo-500/6 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Benefits list */}
          <div>
            <span className="inline-block text-[0.75rem] font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-4">
              ¿Por qué elegirnos?
            </span>
            <h2 id="benefits-title" className="font-heading text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[var(--clr-text)] leading-tight mb-4">
              Tecnología que <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">genera resultados</span>
            </h2>
            <p className="text-[1.05rem] text-[var(--clr-text-muted)] mb-8 max-w-[480px]">
              No solo instalamos equipos, construimos infraestructuras que impulsan
              la productividad y seguridad de tu negocio.
            </p>

            <div className="flex flex-col gap-4">
              {benefits.map((benefit) => (
                <BenefitItem key={benefit.id} benefit={benefit} />
              ))}
            </div>
          </div>

          {/* Right — Metrics card */}
          <div>
            <div
              role="complementary"
              aria-label="Métricas de rendimiento"
              className="rounded-2xl p-8 shadow-xl"
              style={{
                background: 'var(--clr-surface)',
                border: '1px solid var(--clr-border)',
              }}
            >
              <p className="font-heading font-bold text-[var(--clr-text)] text-lg mb-6 flex items-center gap-2">
                <span>📊</span> Rendimiento de proyectos
              </p>

              {/* Top metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-2xl p-5 text-center border border-indigo-500/10">
                  <div className="font-heading text-3xl font-extrabold text-[var(--clr-text)] leading-none">99.9%</div>
                  <div className="text-xs text-[var(--clr-text-muted)] mt-2 font-medium">Uptime de red</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-2xl p-5 text-center border border-indigo-500/10">
                  <div className="font-heading text-3xl font-extrabold text-[var(--clr-text)] leading-none">4h</div>
                  <div className="text-xs text-[var(--clr-text-muted)] mt-2 font-medium">Respuesta máx.</div>
                </div>
              </div>

              {/* Progress bars */}
              <div className="flex flex-col gap-5">
                {metrics.map((metric, i) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-sm font-medium text-[var(--clr-text)] mb-2">
                      <span>{metric.label}</span>
                      <span>{metric.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-indigo-500/10 overflow-hidden">
                      <div
                        ref={(el) => { progressRefs.current[i] = el; }}
                        data-width={`${metric.percentage}%`}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-1000 ease-out"
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
