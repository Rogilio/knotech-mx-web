import { Benefit } from '@/types';

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

const iconMap: Record<Benefit['icon'], React.ReactNode> = {
  shield: <ShieldIcon />,
  bolt:   <BoltIcon />,
  check:  <CheckIcon />,
  users:  <UsersIcon />,
};

interface BenefitItemProps {
  benefit: Benefit;
}

export default function BenefitItem({ benefit }: BenefitItemProps) {
  return (
    <div
      className="group flex gap-4 items-start p-5 rounded-xl transition-all duration-300 hover:translate-x-1"
      style={{
        background: 'var(--clr-surface)',
        border: '1px solid var(--clr-border)',
      }}
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 shadow-md">
        {iconMap[benefit.icon]}
      </div>

      {/* Text */}
      <div>
        <h3 className="font-heading font-bold text-sm mb-1" style={{ color: 'var(--clr-text)' }}>
          {benefit.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--clr-text-muted)' }}>
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
