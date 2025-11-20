import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="pt-24 pb-20 bg-[#1a4d3a] flex items-center justify-center min-h-[70vh]"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-white mb-8" style={{ fontSize: '3.5rem', fontWeight: 600, lineHeight: 1.3 }}>
          Engage | Embed | Execute
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#d4a853] hover:bg-[#c9913a] text-white px-8 py-6 transition-all hover:shadow-lg"
            onClick={() => window.open('https://calendar.google.com', '_blank')}
            style={{ fontSize: '1.125rem' }}
          >
            Book a Consultation
          </Button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-[#f5f2eb] hover:text-white transition-colors flex items-center gap-2 group px-4"
            style={{ fontSize: '1.125rem' }}
          >
            See How We Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}