export function Packages() {
  const workstreams = [
    {
      name: 'Pitch',
      subtitle: 'Talk about your ideas with Confidence',
      research: ['Elevator Pitch', '5 Minute Pitch Deck'],
      goToMarket: ['Value Proposition Differentiation', 'Channel Engagement Strategy'],
      raiseFunds: ['15 Minute Pitch', 'Personalized Coaching']
    },
    {
      name: 'Product',
      subtitle: 'Prioritize your backlog, focus on what matters',
      research: ['Pain point mapping', 'Feature Definition', 'User Personas'],
      goToMarket: ['MVP', 'Product Playbook'],
      raiseFunds: ['Horizon Planning', 'Data Strategy']
    },
    {
      name: 'Portfolio',
      subtitle: 'Tell the story of Impact to Investors',
      research: ['OKR Identification', 'Feature Mapping', 'Investment Buckets'],
      goToMarket: ['KPI Creation', 'Resource Alignment', 'Engagement Metrics'],
      raiseFunds: ['Executive Dashboard', 'Success Story Tracking', 'Session Facilitation']
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#1a4d3a] mb-16 text-center max-w-4xl mx-auto" style={{ fontSize: '2rem', fontWeight: 600, lineHeight: 1.4 }}>
          Drive focus and purpose behind your passion by selecting a pre-defined delivery package
        </h2>

        {/* Package Headers with Tabs */}
        <div className="grid grid-cols-4 gap-0 mb-0">
          <div></div>
          <div className="bg-[#e8e8e8] border-2 border-black p-5 text-center relative">
            <div className="absolute -top-8 left-0 right-0 bg-white border-2 border-black rounded-t-lg px-3 py-1.5 mx-2" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              Get Community Ready in 2 weeks
            </div>
            <h3 className="text-white bg-[#2d5016] py-2.5 px-4 rounded" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
              Research
            </h3>
          </div>
          <div className="bg-[#e8e8e8] border-2 border-black border-l-0 p-5 text-center relative">
            <div className="absolute -top-8 left-0 right-0 bg-white border-2 border-black rounded-t-lg px-3 py-1.5 mx-2" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              Get Seed funding ready in 3 weeks
            </div>
            <h3 className="text-white bg-[#2d5016] py-2.5 px-4 rounded" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
              Go-to-Market
            </h3>
          </div>
          <div className="bg-[#e8e8e8] border-2 border-black border-l-0 p-5 text-center relative">
            <div className="absolute -top-8 left-0 right-0 bg-white border-2 border-black rounded-t-lg px-3 py-1.5 mx-2" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              Get Series A ready in 1 month
            </div>
            <h3 className="text-white bg-[#2d5016] py-2.5 px-4 rounded" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
              Raise Funds
            </h3>
          </div>
        </div>

        {/* Matrix Grid */}
        {workstreams.map((stream, streamIndex) => (
          <div key={streamIndex} className="grid grid-cols-4 gap-0">
            {/* Workstream Label - Clean Design */}
            <div className="relative flex items-stretch">
              <div className="bg-[#2d5016] text-white p-5 w-full flex flex-col justify-center rounded-l-lg border-2 border-black border-r-0">
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {stream.name}
                </h4>
                <p style={{ fontSize: '0.75rem', lineHeight: 1.3, opacity: 0.95 }}>
                  {stream.subtitle}
                </p>
              </div>
            </div>

            {/* Research Deliverables */}
            <div className="bg-white border-2 border-black border-t-0 p-5">
              <ol className="text-[#2a2a2a] space-y-2">
                {stream.research.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
                    {idx + 1}. {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Go-to-Market Deliverables */}
            <div className="bg-white border-2 border-black border-l-0 border-t-0 p-5">
              <ol className="text-[#2a2a2a] space-y-2">
                {stream.goToMarket.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
                    {idx + 1}. {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Raise Funds Deliverables */}
            <div className="bg-white border-2 border-black border-l-0 border-t-0 p-5">
              <ol className="text-[#2a2a2a] space-y-2">
                {stream.raiseFunds.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
                    {idx + 1}. {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}

        {/* Footnotes */}
        <div className="mt-8 space-y-1 text-[#2a2a2a]" style={{ fontSize: '0.8125rem', lineHeight: 1.6 }}>
          <p>*All packages subject to 3 iterations, then an hourly rate is applied for further engagement</p>
          <p>**Packages are inclusive of previous tier deliverables</p>
          <p>***Individual deliverables to be priced upon request</p>
        </div>
      </div>
    </section>
  );
}