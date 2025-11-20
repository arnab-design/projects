import danielPhoto from 'figma:asset/d862c919dfcc9ea2ce21b2d948aacb4de38b7de4.png';

export function About() {
  return (
    <section id="about" className="py-20 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#1a4d3a] mb-12 text-center" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
          Daniel Samyn | Founder
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="text-[#2a2a2a]" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              <p>
                With over 10 years of experience in the financial industry, Daniel Samyn brings deep expertise across Data & Digital Strategy, Go-to-Market Strategy, Sales & Partnership Management, and Communications.
              </p>
              <p className="mt-4">
                Passionate about helping talented people reach their full potential, Daniel is working to empower individuals to scale their ideas, lead with confidence, and grow their impact.
              </p>
            </div>
            
            <div className="text-[#2a2a2a]" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              <p>
                Before Daniel launched Samyn Consulting, he was the Co-Founder of StarterHacks in 2017, where he led the partnership and engagement strategy before transitioning into an advisory board position. He and his Co-founders scaled the brand to one of the largest education focused start-ups in Canada, reducing the barriers of entry into the tech industry for over 1,500 students annually.
              </p>
              <p className="mt-4">
                Transitioning into the Enterprise world, Daniel spent eight years leading data strategy and transformation at RBC, where he helped design and implement analytics, AI, and data platform initiatives across Personal and Commercial Banking. His leadership generated over $25 million in annual savings, and launched products across Canada to optimize the operational processes across RBC.
              </p>
              <p className="mt-4">
                Today, Daniel channels his experience back into the start-up world, helping technical founders scale their businesses.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#1a4d3a] shadow-xl">
                <img
                  src={danielPhoto}
                  alt="Daniel Samyn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <p className="text-[#1a4d3a] mb-1" style={{ fontWeight: 600, fontSize: '1.125rem' }}>Daniel Samyn</p>
                <p className="text-[#2a2a2a]">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}