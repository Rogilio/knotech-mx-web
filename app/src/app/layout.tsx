import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/layout/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'KnoTech — Soluciones Tecnológicas Integrales',
  description:
    'KnoTech — Soluciones profesionales en redes, cámaras de seguridad, audio visual, accesos biométricos y soporte técnico. Tu infraestructura tecnológica en manos expertas.',
  keywords: [
    'instalación de redes',
    'cámaras de seguridad',
    'audio visual',
    'biometría',
    'soporte técnico',
    'redes corporativas',
    'CCTV',
    'Monterrey',
    'México',
  ],
  authors: [{ name: 'KnoTech' }],
  openGraph: {
    title: 'KnoTech — Soluciones Tecnológicas Integrales',
    description: 'Redes, seguridad, audio visual y soporte técnico. Conectamos tu empresa con el futuro.',
    type: 'website',
    locale: 'es_MX',
  },
  icons: {
    icon: '/icons/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="light" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
