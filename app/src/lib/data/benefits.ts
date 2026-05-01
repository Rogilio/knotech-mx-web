import { Benefit, Metric, Stat } from '@/types';

export const benefits: Benefit[] = [
  {
    id: 'seguridad',
    title: 'Seguridad garantizada',
    description:
      'Instalaciones con certificación técnica, materiales de primera calidad y garantía de hasta 2 años en mano de obra y equipos.',
    icon: 'shield',
  },
  {
    id: 'respuesta',
    title: 'Respuesta ultra-rápida',
    description:
      'Tiempo de respuesta menor a 4 horas para emergencias. Soporte remoto inmediato y visitas técnicas el mismo día cuando es crítico.',
    icon: 'bolt',
  },
  {
    id: 'medida',
    title: 'Soluciones a medida',
    description:
      'Cada empresa tiene necesidades únicas. Diseñamos soluciones personalizadas con presupuesto transparente y sin costos ocultos.',
    icon: 'check',
  },
  {
    id: 'equipo',
    title: 'Equipo certificado',
    description:
      'Técnicos con certificaciones Cisco, CompTIA y fabricantes líderes. Más de 8 años de experiencia en proyectos empresariales.',
    icon: 'users',
  },
];

export const metrics: Metric[] = [
  { label: 'Satisfacción del cliente', value: '98%', percentage: 98 },
  { label: 'Proyectos en tiempo', value: '95%', percentage: 95 },
  { label: 'Disponibilidad soporte', value: '100%', percentage: 100 },
];

export const stats: Stat[] = [
  { value: '+200', label: 'Proyectos completados' },
  { value: '+8', label: 'Años de experiencia' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Soporte disponible' },
];
