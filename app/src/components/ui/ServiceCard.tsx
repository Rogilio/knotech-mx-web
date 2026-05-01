import { Service } from '@/types';

// ---- SVG icons per service ----
function NetworkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
      <rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/>
      <rect x="9" y="16" width="6" height="6" rx="1"/>
      <path d="M5 8v4h14V8M12 16v-4"/>
    </svg>
  );
}
function CameraIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  );
}
function MonitorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      <circle cx="9" cy="10" r="2"/><path d="M14 10h4M14 13h4"/>
    </svg>
  );
}
function FingerprintIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
      <path d="M2 12a10 10 0 1 1 20 0"/>
      <path d="M5 12a7 7 0 0 1 14 0"/>
      <path d="M8 12a4 4 0 0 1 8 0"/>
      <line x1="12" y1="12" x2="12" y2="12.01"/>
    </svg>
  );
}
function SupportIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-7 h-7">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  );
}

const iconMap: Record<Service['icon'], React.ReactNode> = {
  network: <NetworkIcon />,
  camera: <CameraIcon />,
  monitor: <MonitorIcon />,
  fingerprint: <FingerprintIcon />,
  support: <SupportIcon />,
  clock: <ClockIcon />,
};

const colorConfig: Record<Service['color'], { iconBg: string; iconText: string; tagBg: string; tagText: string }> = {
  indigo:  { iconBg: 'rgba(99,102,241,0.12)',  iconText: '#6366f1', tagBg: 'rgba(99,102,241,0.12)',  tagText: '#6366f1'  },
  cyan:    { iconBg: 'rgba(6,182,212,0.12)',    iconText: '#06b6d4', tagBg: 'rgba(6,182,212,0.12)',    tagText: '#06b6d4'  },
  violet:  { iconBg: 'rgba(139,92,246,0.12)',   iconText: '#8b5cf6', tagBg: 'rgba(139,92,246,0.12)',   tagText: '#8b5cf6'  },
  amber:   { iconBg: 'rgba(245,158,11,0.12)',   iconText: '#f59e0b', tagBg: 'rgba(245,158,11,0.12)',   tagText: '#d97706'  },
  emerald: { iconBg: 'rgba(16,185,129,0.12)',   iconText: '#10b981', tagBg: 'rgba(16,185,129,0.12)',   tagText: '#059669'  },
  rose:    { iconBg: 'rgba(244,63,94,0.12)',    iconText: '#f43f5e', tagBg: 'rgba(244,63,94,0.12)',    tagText: '#e11d48'  },
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const cfg = colorConfig[service.color];
  return (
    <article
      className="group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default"
      style={{
        background: 'var(--clr-surface)',
        border: '1px solid var(--clr-border)',
      }}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.04), rgba(6,182,212,0.04))' }}
      />

      {/* Icon */}
      <div
        className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
        style={{ background: cfg.iconBg, color: cfg.iconText }}
      >
        {iconMap[service.icon]}
      </div>

      {/* Content */}
      <h3 className="relative z-10 font-heading text-base font-bold mb-2" style={{ color: 'var(--clr-text)' }}>
        {service.title}
      </h3>
      <p className="relative z-10 text-sm leading-relaxed mb-5" style={{ color: 'var(--clr-text-muted)' }}>
        {service.description}
      </p>

      {/* Tag */}
      <span
        className="relative z-10 inline-block text-xs font-semibold px-3 py-1 rounded-full"
        style={{ background: cfg.tagBg, color: cfg.tagText }}
      >
        {service.tag}
      </span>
    </article>
  );
}
