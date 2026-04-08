import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Pricing from '@/components/Pricing';
import Events from '@/components/Events';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Journey />
      <Pricing />
      <Events />
      <Contact />
    </main>
  );
}
