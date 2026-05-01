// ============================================================
// KnoTech MX — TypeScript Interfaces
// ============================================================

export interface Service {
  id: string;
  title: string;
  description: string;
  tag: string;
  color: 'indigo' | 'cyan' | 'violet' | 'amber' | 'emerald' | 'rose';
  icon: 'network' | 'camera' | 'monitor' | 'fingerprint' | 'support' | 'clock';
}

export interface Testimonial {
  id: string;
  text: string;
  authorName: string;
  authorRole: string;
  company: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  rating: number;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: 'shield' | 'bolt' | 'check' | 'users';
}

export interface Stat {
  value: string;
  label: string;
}

export interface Metric {
  label: string;
  value: string;
  percentage: number;
}
