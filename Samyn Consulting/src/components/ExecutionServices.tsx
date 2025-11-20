export function ExecutionServices() {
  return (
    <section id="execution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#1a4d3a] mb-12 text-center max-w-5xl mx-auto" style={{ fontSize: '2rem', fontWeight: 600, lineHeight: 1.4 }}>
          Unlock efficiencies across your delivery process and engage stakeholders with purpose throughout your process
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Agile Coaching */}
          <div className="bg-[#f5f2eb] border-2 border-[#1a4d3a] p-8 rounded-lg shadow-sm">
            <h3 className="text-[#1a4d3a] text-center mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Agile Coaching
            </h3>
            <p className="text-[#2a2a2a] mb-8 text-center" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Utilize Scrum or Kanban to address user specific pain points as a part of your continuous delivery
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1a4d3a] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>
                  1
                </div>
                <div className="flex-1">
                  <p className="text-[#2a2a2a]" style={{ lineHeight: 1.6 }}>
                    <span className="text-[#1a4d3a]" style={{ fontWeight: 600 }}>Educate:</span> Hands on scrum training for your team
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1a4d3a] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>
                  2
                </div>
                <div className="flex-1">
                  <p className="text-[#2a2a2a]" style={{ lineHeight: 1.6 }}>
                    <span className="text-[#1a4d3a]" style={{ fontWeight: 600 }}>Implement:</span> Migrate your backlog & formalize your sprint cadence
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1a4d3a] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>
                  3
                </div>
                <div className="flex-1">
                  <p className="text-[#2a2a2a]" style={{ lineHeight: 1.6 }}>
                    <span className="text-[#1a4d3a]" style={{ fontWeight: 600 }}>Iterate:</span> Create a seamless delivery model and working practice across departments
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Trains */}
          <div className="bg-[#f5f2eb] border-2 border-[#1a4d3a] p-8 rounded-lg shadow-sm">
            <h3 className="text-[#1a4d3a] text-center mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Delivery Trains
            </h3>
            <p className="text-[#2a2a2a] mb-8 text-center" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Establish a quarterly delivery plan for your cross functional teams to align on key objectives
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1a4d3a] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>
                  1
                </div>
                <div className="flex-1">
                  <p className="text-[#2a2a2a]" style={{ lineHeight: 1.6 }}>
                    <span className="text-[#1a4d3a]" style={{ fontWeight: 600 }}>Educate:</span> Hands on training for your team on writing OKRs, and aligning KPIs
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1a4d3a] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>
                  2
                </div>
                <div className="flex-1">
                  <p className="text-[#2a2a2a]" style={{ lineHeight: 1.6 }}>
                    <span className="text-[#1a4d3a]" style={{ fontWeight: 600 }}>Implement:</span> Map your resource plan to your delivery requirements and align the backlog
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1a4d3a] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 600 }}>
                  3
                </div>
                <div className="flex-1">
                  <p className="text-[#2a2a2a]" style={{ lineHeight: 1.6 }}>
                    <span className="text-[#1a4d3a]" style={{ fontWeight: 600 }}>Showcase:</span> Invite your stakeholders and showcase both your delivery from last quarter, and your priorities for the next
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}