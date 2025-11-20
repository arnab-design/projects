export function PartnerNetwork() {
  return (
    <section id="partners" className="py-20 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#1a4d3a] mb-12 text-center max-w-5xl mx-auto" style={{ fontSize: '2rem', fontWeight: 600, lineHeight: 1.4 }}>
          Leverage our extensive network of partners to augment your skillset with their area of expertise while you focus on what matters most for your business
        </h2>

        {/* Category Labels */}
        <div className="flex justify-between mb-6 pb-4 border-b-2 border-[#1a4d3a]">
          <span className="text-[#1a4d3a]" style={{ fontWeight: 600, fontSize: '1.125rem' }}>Business</span>
          <span className="text-[#1a4d3a]" style={{ fontWeight: 600, fontSize: '1.125rem' }}>Technical</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Business Column */}
          <div className="bg-white border-2 border-[#1a4d3a] p-8 rounded-lg shadow-sm">
            <div className="space-y-4 text-center">
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Brand Consulting</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Human Resources</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Financial & Grant Assessment</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>CRM & Revenue Assessment</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Marketing Activations</p>
            </div>
          </div>

          {/* Middle Column - Creative/Operations */}
          <div className="bg-white border-2 border-[#1a4d3a] p-8 rounded-lg shadow-sm">
            <div className="space-y-4 text-center">
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Talent Sourcing</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Agile Consultation</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Art Consulting</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Graphic Design</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Marketing Analytics</p>
            </div>
          </div>

          {/* Technical Column */}
          <div className="bg-white border-2 border-[#1a4d3a] p-8 rounded-lg shadow-sm">
            <div className="space-y-4 text-center">
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Mobile/Web Development</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>BI & Analytics enablement</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Technical Diligence</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Infrastructure Management</p>
              <p className="text-[#2a2a2a]" style={{ fontSize: '1.0625rem', lineHeight: 1.5 }}>Cyber security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}