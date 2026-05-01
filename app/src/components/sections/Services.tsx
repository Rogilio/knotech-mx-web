import { services } from '@/lib/data/services';
import ServiceCard from '@/components/ui/ServiceCard';

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="py-24 bg-[var(--clr-bg)]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.75rem] font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-4">
            Lo que hacemos
          </span>
          <h2 id="services-title" className="font-heading text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[var(--clr-text)] leading-tight mb-4">
            Servicios <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">especializados</span> en tecnología
          </h2>
          <p className="text-[1.05rem] text-[var(--clr-text-muted)] max-w-[560px] mx-auto">
            Soluciones completas de infraestructura tecnológica para empresas de todos los tamaños.
            Cada proyecto, con profesionalismo y garantía.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((service) => (
            <div key={service.id} role="listitem">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
