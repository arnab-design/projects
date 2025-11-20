export function WorkstreamsTable() {
  const workstreams = [
    {
      name: 'Pitch',
      subtitle: 'Talk about your ideas with Confidence',
      purpose: 'Build confidence delivering a clear narrative for your audience, anywhere, anytime.',
      activities: ['Story Building', 'Story Telling', 'Story Delivery'],
      outcome: 'Pitch Deck'
    },
    {
      name: 'Product',
      subtitle: 'Prioritize your backlog, focus on what matters',
      purpose: 'Add structure and purpose behind what you do, & why it helps you achieve your overall mission',
      activities: ['Vision', 'Strategy', 'Features'],
      outcome: 'Product Documentation'
    },
    {
      name: 'Portfolio',
      subtitle: 'Tell the story of Impact to Investors',
      purpose: 'Build a robust framework for tracking when & how your company moves toward its vision.',
      activities: ['Investment Review', 'Performance tracking', 'Delivery trains'],
      outcome: 'Repeatable Delivery Model'
    }
  ];

  return (
    <section id="workstreams" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#1a4d3a] mb-16 text-center max-w-5xl mx-auto" style={{ fontSize: '2rem', fontWeight: 600, lineHeight: 1.4 }}>
          Leverage our expertise in our 3 key impact workstreams to accelerate growth for your business
        </h2>

        {/* Column Headers */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="text-[#1a4d3a]" style={{ fontSize: '1.125rem', fontWeight: 700 }}>Workstream</div>
          <div className="text-[#1a4d3a]" style={{ fontSize: '1.125rem', fontWeight: 700 }}>Purpose</div>
          <div className="text-[#1a4d3a]" style={{ fontSize: '1.125rem', fontWeight: 700 }}>Activities</div>
          <div className="text-[#1a4d3a]" style={{ fontSize: '1.125rem', fontWeight: 700 }}>Outcome</div>
        </div>

        {/* Workstream Rows */}
        <div className="space-y-6">
          {workstreams.map((stream, index) => (
            <div key={index} className="grid grid-cols-4 gap-6 items-stretch">
              {/* Workstream - Clean Design */}
              <div className="relative flex items-stretch">
                <div className="bg-[#2d5016] text-white p-6 w-full flex flex-col justify-center rounded-l-lg border-2 border-black border-r-0">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                    {stream.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.4, opacity: 0.95 }}>
                    {stream.subtitle}
                  </p>
                </div>
              </div>

              {/* Purpose - Beige Background */}
              <div className="bg-[#f5e6d3] border-2 border-black p-6 rounded flex items-center">
                <p className="text-[#2a2a2a]" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>
                  {stream.purpose}
                </p>
              </div>

              {/* Activities - Clean Design */}
              <div className="relative flex items-stretch">
                <div className="bg-[#e8e8e8] border-2 border-black p-6 rounded w-full flex flex-col justify-center">
                  <ul className="text-[#2a2a2a] space-y-2">
                    {stream.activities.map((activity, idx) => (
                      <li key={idx} style={{ fontSize: '0.9375rem', lineHeight: 1.4 }}>• {activity}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Outcome - White Background */}
              <div className="bg-white border-2 border-black p-6 rounded text-center flex items-center justify-center">
                <p className="text-[#2a2a2a]" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                  {stream.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}