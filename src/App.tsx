import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Features } from './components/Features';
import { Classes } from './components/Classes';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Classes />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}


