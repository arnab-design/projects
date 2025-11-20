import { Button } from './ui/button';
import { Linkedin, Mail } from 'lucide-react';

export function ContactFooter() {
  return (
    <section id="contact" className="py-20 bg-[#1a4d3a] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8">
          <span style={{ fontSize: '2rem', fontWeight: 600 }}>
            Samyn Consulting
          </span>
        </div>
        
        <h2 className="mb-6" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
          Ready to Build with Structure?
        </h2>
        <p className="text-[#f5f2eb] mb-12 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
          Book a consultation to discuss opportunities to partner.
        </p>

        <Button
          size="lg"
          className="bg-[#d4a853] hover:bg-[#c9913a] text-white px-8 py-6 transition-all hover:shadow-lg mb-12"
          onClick={() => window.open('https://calendar.google.com', '_blank')}
          style={{ fontSize: '1.125rem' }}
        >
          Book a Consultation
        </Button>

        <p className="text-[#f5f2eb] mb-8 max-w-2xl mx-auto" style={{ fontSize: '0.9375rem', opacity: 0.9 }}>
          All content shared remains private and confidential unless express consent is given.
        </p>

        {/* Footer Links */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4a853] transition-colors flex items-center gap-2"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <span className="text-[#f5f2eb]">|</span>
          <a
            href="mailto:contact@samynconsulting.com"
            className="hover:text-[#d4a853] transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>

        <p className="text-[#f5f2eb]" style={{ fontSize: '0.875rem', opacity: 0.7 }}>
          © {new Date().getFullYear()} Samyn Consulting. All rights reserved.
        </p>
      </div>
    </section>
  );
}