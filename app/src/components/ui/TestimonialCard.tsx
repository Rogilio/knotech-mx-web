import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className="relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        background: 'var(--clr-surface)',
        border: '1px solid var(--clr-border)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4" aria-label={`${testimonial.rating} estrellas`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-amber-400 text-base" aria-hidden="true">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'var(--clr-text-muted)' }}>
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})` }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="font-semibold text-sm" style={{ color: 'var(--clr-text)' }}>{testimonial.authorName}</div>
          <div className="text-xs" style={{ color: 'var(--clr-text-muted)' }}>
            {testimonial.authorRole} · {testimonial.company}
          </div>
        </div>
      </div>
    </article>
  );
}
