export function StartupJourneyDiagram() {
  return (
    <section id="journey" className="py-20 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#1a4d3a] mb-8 text-center max-w-4xl mx-auto" style={{ fontSize: '2rem', fontWeight: 600, lineHeight: 1.4 }}>
          Why do start-ups struggle at different points of their progression?
        </h2>

        <div className="relative bg-white border-2 border-[#1a4d3a] rounded-lg p-8 shadow-sm">
          {/* Impact Workstreams Label and Scale Indicator */}
          <div className="mb-6">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-start">
                <p className="text-[#1a4d3a] mb-2" style={{ fontSize: '1rem', fontWeight: 600 }}>
                  Impact workstreams
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-[#1a4d3a] underline" style={{ fontSize: '1rem', fontWeight: 600 }}>
                    Scale
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-transparent border-b-[#1a4d3a]" />
                    <div className="w-0.5 h-8 bg-[#1a4d3a]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Section - Pain Point Cards */}
          <div className="relative mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Pitch Card */}
              <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[#2d5016] text-white py-3 px-4 text-center" style={{ fontWeight: 600, fontSize: '1rem' }}>
                  Pitch
                </div>
                <div className="p-5 text-[#2a2a2a]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  I have an idea, but I can't get buy in from others.
                </div>
              </div>

              {/* Product Card */}
              <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[#2d5016] text-white py-3 px-4 text-center" style={{ fontWeight: 600, fontSize: '1rem' }}>
                  Product
                </div>
                <div className="p-5 text-[#2a2a2a]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  I have support, but I can't filter out what the most important things to work on are.
                </div>
              </div>

              {/* Portfolio Card */}
              <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[#2d5016] text-white py-3 px-4 text-center" style={{ fontWeight: 600, fontSize: '1rem' }}>
                  Portfolio
                </div>
                <div className="p-5 text-[#2a2a2a]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  My investors want more transparency in how their investment is being utilized.
                </div>
              </div>
            </div>

            {/* Growth Curve with Nodes */}
            <div className="relative hidden md:block" style={{ height: '150px' }}>
              <svg className="w-full h-full" viewBox="0 0 1000 150" preserveAspectRatio="none">
                {/* Growth curve path */}
                <path
                  d="M 0 130 Q 120 125, 200 110 Q 280 95, 400 75 Q 550 50, 700 35 Q 850 25, 1000 20"
                  stroke="#1a4d3a"
                  strokeWidth="3"
                  fill="none"
                />
                
                {/* Node 1 */}
                <circle cx="165" cy="110" r="10" fill="#1a4d3a" />
                
                {/* Node 2 */}
                <circle cx="500" cy="60" r="10" fill="#1a4d3a" />
                
                {/* Node 3 */}
                <circle cx="835" cy="28" r="10" fill="#1a4d3a" />
              </svg>
            </div>
          </div>

          {/* Time Axis */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <p className="text-[#1a4d3a] underline" style={{ fontSize: '1rem', fontWeight: 600 }}>
                Time
              </p>
              <div className="flex items-center">
                <div className="w-16 h-0.5 bg-[#1a4d3a]" />
                <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[12px] border-transparent border-l-[#1a4d3a]" />
              </div>
            </div>
            <p className="text-[#1a4d3a]" style={{ fontSize: '1rem', fontWeight: 600 }}>
              Growth Phase & Purpose
            </p>
          </div>

          {/* Bottom Section - Growth Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Community Research */}
            <div className="bg-white border-2 border-black rounded-l-lg overflow-hidden md:border-r-0 md:rounded-r-none">
              <div className="bg-[#2d5016] text-white py-3 px-4 text-center" style={{ fontWeight: 600, fontSize: '1rem' }}>
                Community Research
              </div>
              <div className="p-5 text-[#2a2a2a]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Validate your idea through identification of pain points, and user experiences
              </div>
            </div>

            {/* Divider - hidden on mobile */}
            <div className="hidden md:block w-px bg-[#4a9db5] border-t-2 border-b-2 border-black" />

            {/* Go-To-Market */}
            <div className="bg-white border-2 border-black md:border-r-0 md:border-l-0 md:rounded-none rounded-lg overflow-hidden">
              <div className="bg-[#2d5016] text-white py-3 px-4 text-center" style={{ fontWeight: 600, fontSize: '1rem' }}>
                Go-To-Market
              </div>
              <div className="p-5 text-[#2a2a2a]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Launch your MVP and drive user traction to your company.
              </div>
            </div>

            {/* Divider - hidden on mobile */}
            <div className="hidden md:block w-px bg-[#4a9db5] border-t-2 border-b-2 border-black" />

            {/* Raise Funds */}
            <div className="bg-white border-2 border-black rounded-r-lg overflow-hidden md:border-l-0 md:rounded-l-none">
              <div className="bg-[#2d5016] text-white py-3 px-4 text-center" style={{ fontWeight: 600, fontSize: '1rem' }}>
                Raise Funds
              </div>
              <div className="p-5 text-[#2a2a2a]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Look for support to scale your business operations by show casing your growth and profitability metrics.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}