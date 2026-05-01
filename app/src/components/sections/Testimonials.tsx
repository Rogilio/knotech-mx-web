import { testimonials } from '@/lib/data/testimonials';
import TestimonialCard from '@/components/ui/TestimonialCard';

export default function Testimonials() {
  return (
    <section id="testimonios" aria-labelledby="testimonials-title" className="py-24 bg-[var(--clr-bg)]">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.75rem] font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-4">
            Lo que dicen nuestros clientes
          </span>
          <h2 id="testimonials-title" className="font-heading text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-[var(--clr-text)] leading-tight mb-4">
            Historias de <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">éxito real</span>
          </h2>
          <p className="text-[1.05rem] text-[var(--clr-text-muted)] max-w-[560px] mx-auto">
            Más de 200 empresas han confiado en KnoTech para su infraestructura tecnológica.
            Aquí comparten su experiencia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

      </div>
    </section>
  );
}
