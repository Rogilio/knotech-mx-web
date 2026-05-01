import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'redes',
    title: 'Instalación de Redes',
    description:
      'Diseño y cableado estructurado Cat6/Cat6A, configuración de switches, routers, puntos de acceso inalámbrico y redes SD-WAN para oficinas y edificios corporativos.',
    tag: 'Cableado · Wi-Fi · LAN/WAN',
    color: 'indigo',
    icon: 'network',
  },
  {
    id: 'camaras',
    title: 'Instalación de Cámaras',
    description:
      'Sistemas CCTV IP y analógico, cámaras HD/4K, visión nocturna, PTZ y domo. Monitoreo remoto desde app móvil y grabación en NVR/DVR local o en la nube.',
    tag: 'CCTV · IP · Nube · 4K',
    color: 'cyan',
    icon: 'camera',
  },
  {
    id: 'audiovisual',
    title: 'Equipo Audio Visual',
    description:
      'Instalación de pantallas interactivas, proyectores, sistemas de videoconferencia, parlantes y amplificadores para salas de juntas, auditorios y espacios de colaboración.',
    tag: 'Pantallas · Proyectores · Video',
    color: 'violet',
    icon: 'monitor',
  },
  {
    id: 'biometrico',
    title: 'Accesos Biométricos',
    description:
      'Control de acceso por huella dactilar, reconocimiento facial y tarjeta RFID. Integración con software de asistencia, alarmas y torniquetes automatizados.',
    tag: 'Huella · Facial · RFID',
    color: 'amber',
    icon: 'fingerprint',
  },
  {
    id: 'soporte',
    title: 'Soporte y Mantenimiento',
    description:
      'Contratos de soporte preventivo y correctivo, monitoreo proactivo de red, diagnóstico remoto y visitas técnicas programadas para garantizar disponibilidad 24/7.',
    tag: 'Preventivo · Correctivo · 24/7',
    color: 'emerald',
    icon: 'support',
  },
  {
    id: 'proximos',
    title: 'Próximos Servicios',
    description:
      'Estamos en constante evolución. Próximamente añadiremos más servicios tecnológicos: automatización, ciberseguridad empresarial, consultorías y más.',
    tag: 'Muy pronto · Escalando',
    color: 'rose',
    icon: 'clock',
  },
];
