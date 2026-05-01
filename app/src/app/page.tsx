import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import BackToTop from '@/components/sections/BackToTop';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Contact />
      <BackToTop />
    </main>
  );
}
